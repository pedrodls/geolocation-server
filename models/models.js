require("dotenv").config();

const Sequelize = require('sequelize');

const dbConfig = require('../config/database');

const sequelize = new Sequelize(
    dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.DIALECT,
        pool: {
            max: 5,
            min: 0,
            idle: 30000,
            acquire: 10000            
        }
    }
);

db = {};

db.sequelize = sequelize;

db.Sequelize = Sequelize;

db.Op = Sequelize.Op;

db.User = require('./user.model')(db)



if(process.env.ENV == "DEV"){ 
    sequelize.sync({force: false, alter: false});
}

module.exports = db;


