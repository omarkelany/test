const { Sequelize, Model, DataTypes, sequelize } = require('../init_sequelize');

class User extends Model {}
User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    token: DataTypes.STRING
}, { sequelize, modelName: 'user' });

module.exports = User;
