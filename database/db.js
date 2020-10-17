const dotenv = require('dotenv');
dotenv.config();
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize(`${process.env.DATABASE_SERVER}://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`);

module.exports = {
     Model, DataTypes, sequelize
};