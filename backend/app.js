// const express = require("express")
// const cors = require('cors')
// const http = require('http')
// require('dotenv').config()
// const Sequelize = require('sequelize')

// const expressSession = require('express-session')
// const pgSession = require('connect-pg-simple')(expressSession)

// require('./database/indexDB')

// const dbConnection = require('./config/database')
// const app = express()
// //dbConnection()

// //const sequelize = new Sequelize(process.env.DATABASE_URL);

// //const conexao = new Sequelize(dbConfig)

// const sessionConfig = {
//   store: new pgSession({
//     pool: dbConnection,
//     dialect: 'postgres',
//   }),
//   dialect: 'postgres',
//   name: '$DATA$',
//   secret: process.env.COOKIE_SECRET,
//   resave: false,
//   saveUninitialized: false,
//   cookie: {
//     maxAge : 7 * 24 * 60 * 60 * 1000,  // 7 dias
//     httpOnly: true
//   }
// }
// app.use(expressSession(sessionConfig))

// app.use(express.json())
// app.use(cors())

// //Todas Rotas deverão ser descriminadas aqui
// const usersRoutes = require('./api/routes/usersRoutes')
// const restaurantsRoutes = require('./api/routes/restaurantsRoutes')
// const menusRoutes = require('./api/routes/menusRoutes')
// const requestsRoutes = require('./api/routes/requestsRoutes')

// //E usadas aqui
// app.use(usersRoutes)
// app.use(restaurantsRoutes)
// app.use(menusRoutes)
// app.use('/requests',requestsRoutes)

// //Quando for fazer o deploy, colocar o que aqui?
// // app.set('url', 'http://localhost:');
// // app.set('port', 3001);

// // http.createServer(app).listen(app.get('port'), function(){
// //     console.log('Server started on '+ app.get('url') + app.get('port'))
// // })

// const port = process.env.PORT || 8080;

// app.listen(port, () => {
//   console.log(`Server started on port ${port}`);
// });

// module.exports = app

require('dotenv').config()

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//Todas Rotas deverão ser descriminadas aqui
const usersRoutes = require('./api/routes/usersRoutes')
const restaurantsRoutes = require('./api/routes/restaurantsRoutes')
const menusRoutes = require('./api/routes/menusRoutes')
const requestsRoutes = require('./api/routes/requestsRoutes')

// Conecta ao banco de dados
const dbConn = require('./config/database')

const expressSession = require('express-session')
const pgSession = require('connect-pg-simple')(expressSession)

var app = express();

const sessionConfig = {
  store: new pgSession({
    pool: dbConn
  }),
  name: '$DATA$',
  secret: process.env.COOKIE_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge : 7 * 24 * 60 * 60 * 1000,  // 7 dias
    httpOnly: true
  }
}

// Se for ambiente de produção, habilita confiança no primeiro proxy
// e cookies seguros
if(app.get('env') === 'production') {
  app.set('trust proxy', 1)
  sessionConfig.cookie.secure = true
}

app.use(expressSession(sessionConfig))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//E usadas aqui
app.use(usersRoutes)
app.use(restaurantsRoutes)
app.use(menusRoutes)
app.use('/requests',requestsRoutes)




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;