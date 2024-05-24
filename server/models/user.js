const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define(
  "User",
  {
    Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    FirstName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    LastName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Address: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    Contact: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "User",
    timestamps: false, // if you don't have timestamp columns
  }
);

module.exports = User ;
