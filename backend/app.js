const express = require("express")
const cors = require('cors')
const http = require('http')
require('dotenv').config()
const Sequelize = require('sequelize')

require('./database/indexDB')

//const dbConnection = require('./config/database')
const app = express()
//dbConnection()

//const sequelize = new Sequelize(process.env.DATABASE_URL);
const dbConfig = require('./config/database')

const conexao = new Sequelize(dbConfig)

app.use(express.json())
app.use(cors())

//Todas Rotas deverão ser descriminadas aqui
const usersRoutes = require('./api/routes/usersRoutes')
const restaurantsRoutes = require('./api/routes/restaurantsRoutes')
const menusRoutes = require('./api/routes/menusRoutes')
const requestsRoutes = require('./api/routes/requestsRoutes')

//E usadas aqui
app.use('/users', usersRoutes(conexao))
app.use('/restaurants', restaurantsRoutes(conexao))
app.use('/menus', menusRoutes(conexao))
app.use('/requests', requestsRoutes(conexao))

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