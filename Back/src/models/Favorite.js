const { DataTypes, ENUM } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Favorite', {
        id:{
            Type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        name:{
            Type: DataTypes.STRING,
            allowNull: false,
        },
        status:{
            Type: DataTypes.ENUM('Alive', 'Dead', 'unknown'),
            allowNull: false,
        },
        species:{
            Type: DataTypes.STRING,
            allowNull: false
        },
        gender:{
            Type: DataTypes.ENUM('Female', 'Male', 'Genderless', 'unknown'),
            allowNull: false,
        },
        image:{
            Type: DataTypes.STRING,
            allowNull: false,
        },
        origin:{
            Type: DataTypes.STRING,
            allowNull: false,
        },
    }, {timestamps: false});
};
