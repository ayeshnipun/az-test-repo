const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const AuthUser = sequelize.define(
  "AuthUser",
  {
    Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    UserName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "AuthUser",
    timestamps: false, // if you don't have timestamp columns
  }
);

module.exports = AuthUser;
