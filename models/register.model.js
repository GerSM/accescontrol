const { db, DataTypes } = require('../utils/database.utils');



const Registration = db.define('register', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER
    },
    entranceTime: {
        allowNull: false,
        type: DataTypes.DATE
    },
    exitTime: {
        allowNull: true,
        type: DataTypes.DATE
    },
    status:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Working'
    }
})

module.exports = { Registration }