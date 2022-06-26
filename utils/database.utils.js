const { Sequelize, DataTypes } = require('sequelize')

const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost', //host al que nos vamos a conectar
    username: 'postgres',
    password: '123456',
    port: 5432,
    database: 'accescontrol'
});

module.exports = { db, DataTypes }
