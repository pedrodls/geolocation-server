require("dotenv").config();

module.exports = {
    dev: {
        HOST: "localhost",
        USER: "root",
        PASSWORD: "",
        DB: "geolocation",
        DIALECT: "mysql",
        pool: {
            max: 5,
            min: 0, 
            acquire: 30000,
            idle: 10000
        }
    }
}[process.env.ENV.toLowerCase()];