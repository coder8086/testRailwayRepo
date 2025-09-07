const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME || process.env.MYSQLDATABASE,
  process.env.DB_USER || process.env.MYSQLUSER,
  process.env.DB_PASS || process.env.MYSQLPASSWORD,
  {
    host: process.env.DB_HOST || process.env.MYSQLHOST,
    port: process.env.DB_PORT || process.env.MYSQLPORT || 3306,
    dialect: 'mysql',
    logging: false,
    dialectOptions: {
      ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : undefined
    }
  }
);

module.exports = sequelize;
