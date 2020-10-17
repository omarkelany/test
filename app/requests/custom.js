const {Op} = require('sequelize');
const db = require('../../database/db').sequelize;

module.exports = {
    required: value => {
        switch (typeof value) {
            case "number":
                return !(value === undefined);
            case "string":
                return !(value === "");
            case "object":
                return !(value === null);
        }
        return false;
    },
    passwordConfirmed: (value, {req}) => {
        return value === req.body.confirm_password;
    },
    unique: (field, Model) => {
        return (value, {req}) => {
            if (req.params.id) {
                Model.count({
                    where: {
                        [Op.and]: [
                            db.where(db.col(field), value),
                            {
                                id: {
                                    [Op.ne]: req.params.id
                                },
                            }
                        ]
                    }
                }).then(data => {
                    console.log(data === 0);
                    return (data === 0);
                });
            } else {
                Model.count({
                    where: db.where(db.col(field), value)
                }).then(data => {
                    console.log(data === 0);
                    return (data === 0);
                });
            }
        }
    },
};