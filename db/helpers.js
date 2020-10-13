const { Sequelize, Model, DataTypes, sequelize } = require('./db');
const queryInterface = sequelize.getQueryInterface();
const User = require('./migrations/users');
const users = require('./seeders/users');
const dotenv = require('dotenv');
dotenv.config();

// const students = require('./migrations/students');
module.exports.migrate = async () => {
    const drop = process.env.DROP_ALL_TABLES || true;
    if (drop){
        console.log('\n----------START DROP ALL TABLE----------\n');
        await queryInterface.dropAllTables();
        console.log('\n----------END DROP ALL TABLE----------\n');
    }
    console.log('\n----------START MIGRATIONS----------\n');
    await sequelize.sync();
    console.log('\n----------END MIGRATIONS----------\n');
};

module.exports.seed = async () => {
    console.log('\n----------START SEEDING----------\n');
    await User.bulkCreate(users);
    console.log('\n----------END SEEDING----------\n');
};