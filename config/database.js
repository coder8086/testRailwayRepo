const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(
  process.env.MYSQLDATABASE,      // DB name
  process.env.MYSQLUSER,          // DB user
  process.env.MYSQLPASSWORD,      // DB password
  {
    host: process.env.MYSQLHOST,  // DB host
    port: process.env.MYSQLPORT || 3306,
    dialect: 'mysql',
    logging: false,
    dialectOptions: {
      ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : undefined
    }
  }
);

module.exports = sequelize;
