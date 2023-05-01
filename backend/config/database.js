require('dotenv').config()
module.exports = {
	host: process.env.HOST,
	dialect: process.env.DIALECT,
	username: process.env.USERNAME,
	password: process.env.PASSWORD,
  port: process.env.PORT,
  database: process.env.DATABASE,
  logging: console.log,
  define: {
    timestamps: true,
    underscored: true,
  },
  dialectOptions: {
    ssl: true,
    rejectUnauthorized: false,
    keepAlive: true,
    keepAliveInterval: 600000, // Tempo limite em milissegundos
  }
}

