const sequelize = require('../config/db');
const AuthUser = require('./identity-user');
const User = require('./user');

const db = {
  sequelize,
  User,
  AuthUser
};

sequelize.sync();

module.exports = db;