const express = require("express");
const cors = require("cors");
const http = require("http");
const bodyParser = require("body-parser");
require("dotenv").config();
//const Sequelize = require('sequelize')

require("./database/indexDB");

// const dbConnection = require('./config/database')
const app = express();

//dbConnection()

//const sequelize = new Sequelize();

//const conexao = new Sequelize(dbConfig)

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

//Todas Rotas deverão ser descriminadas aqui
const usersRoutes = require("./api/routes/usersRoutes");
const restaurantsRoutes = require("./api/routes/restaurantsRoutes");
const menusRoutes = require("./api/routes/menusRoutes");
const requestsRoutes = require("./api/routes/requestsRoutes");
const addressesRoutes = require("./api/routes/addressesRoutes");

//E usadas aqui
app.use(usersRoutes);
app.use(restaurantsRoutes);
app.use(menusRoutes);
app.use("/requests", requestsRoutes);
app.use("/addresses", addressesRoutes);

//Para Localhost

// app.set('url', 'http://localhost:');
// app.set('port', 3100);
// http.createServer(app).listen(app.get('port'), function(){
//     console.log('Server started on '+ app.get('url') + app.get('port'))
// })


//Para deploy

const port = process.env.PORT || 8080;
http.createServer(app).listen(port, () => {
  console.log(`Server started on port ${port}`);
});

module.exports = app;
