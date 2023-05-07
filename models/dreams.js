const { Model, DataTypes } = require('sequelize');
const User = require('./User')
const sequelize = require('../config/connection');

class Dreams extends Model { }

Dreams.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        subject: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        interpretation: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        // Foreign Key - author_id = user.id
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'dreams',
    }
);

module.exports = Dreams;