const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "webapp-dev",
  "webapp",
  "1234Qwer@",
  {
    host: "webapp-server-dev.database.windows.net",
    dialect: "mssql",
    dialectOptions: {
      options: {
        encrypt: true, // Use this if you're on Windows Azure
        enableArithAbort: true,
      },
    },
  }
);

module.exports = sequelize;