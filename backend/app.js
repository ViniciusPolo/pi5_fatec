const express = require("express")
const cors = require('cors')
const http = require('http')
require('dotenv').config()
const Sequelize = require('sequelize')

const expressSession = require('express-session')
const pgSession = require('connect-pg-simple')(expressSession)

require('./database/indexDB')

const dbConnection = require('./config/database')
const app = express()
//dbConnection()

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres'
});

//const conexao = new Sequelize(dbConfig)

const sessionConfig = {
  store: new pgSession({
    pool: dbConnection,
    Dialect: 'postgres',
  }),
  Dialect: 'postgres',
  name: '$DATA$',
  secret: process.env.COOKIE_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge : 7 * 24 * 60 * 60 * 1000,  // 7 dias
    httpOnly: true
  }
}
app.use(expressSession(sequelize))

app.use(express.json())
app.use(cors())

//Todas Rotas deverão ser descriminadas aqui
const usersRoutes = require('./api/routes/usersRoutes')
const restaurantsRoutes = require('./api/routes/restaurantsRoutes')
const menusRoutes = require('./api/routes/menusRoutes')
const requestsRoutes = require('./api/routes/requestsRoutes')

//E usadas aqui
app.use(usersRoutes)
app.use(restaurantsRoutes)
app.use(menusRoutes)
app.use('/requests',requestsRoutes)

//Quando for fazer o deploy, colocar o que aqui?
// app.set('url', 'http://localhost:');
// app.set('port', 3001);

// http.createServer(app).listen(app.get('port'), function(){
//     console.log('Server started on '+ app.get('url') + app.get('port'))
// })

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

module.exports = app