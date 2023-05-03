require('dotenv').config()

// module.exports = {
// 	host: process.env.HOST,
// 	dialect: process.env.DIALECT,
// 	username: process.env.USERNAME,
// 	password: process.env.PASSWORD,
//   port: process.env.PORT,
//   database: process.env.DATABASE,
//   logging: console.log,
//   define: {
//     timestamps: true,
//     underscored: true,
//   },
//   dialectOptions: {
//     rejectUnauthorized: false,
//     keepAlive: true,
//     keepAliveInterval: 30000, // Tempo limite em milissegundos
//   }
// }

const { Pool } = require('pg')

const conn = new Pool({
  host: process.env.HOST,
	Dialect: 'postgres',
	username: process.env.USERNAME,
	password: process.env.PASSWORD,
  port: process.env.PORT,
  database: process.env.DATABASE,
})

// Testando a conexão
async function testConn() {
  try {
    await conn.query('select now()')
    console.log('** POSTGRES: conexão estabelecida')
  }
  catch(error) {
    console.error('** POSTGRES: ERRO => ' + error)
  }
}

testConn()

module.exports = conn

