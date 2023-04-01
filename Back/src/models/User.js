const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('User', {
        id:{
        Type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        },
        email:{
        Type: DataTypes.STRING,
        allowNull: false,
        isEmail: true,
        },
        password:{
            Type: DataTypes.STRING,
            allowNull: false,
        },
    }, {timestamps: false, tableName: 'users'});
};
