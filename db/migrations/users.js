const { Sequelize, Model, DataTypes, sequelize } = require('../db');

class User extends Model {}
User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    token: DataTypes.STRING
}, { sequelize, modelName: 'user' });

module.exports = User;
