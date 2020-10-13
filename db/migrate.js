const { Sequelize, Model, DataTypes, sequelize } = require('./init_sequelize');
const queryInterface = sequelize.getQueryInterface();
const users = require('./migrations/users');
// const students = require('./migrations/students');

module.exports.start = async () => {
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