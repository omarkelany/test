const { Sequelize, Model, DataTypes, sequelize } = require('../db');

class Student extends Model {}
Student.init({
    username: DataTypes.STRING,
    birthday: DataTypes.DATE
}, { sequelize, modelName: 'student' });
