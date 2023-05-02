var createError = require('http-errors');
var express = require('express');
var path = require('path');
const cors = require('cors')
const http = require('http')

require('./database/indexDB')

//Todas Rotas deverão ser descriminadas aqui
const usersRoutes = require('./api/routes/usersRoutes')
const restaurantsRoutes = require('./api/routes/restaurantsRoutes')
const menusRoutes = require('./api/routes/menusRoutes')
const requestsRoutes = require('./api/routes/requestsRoutes')

// const dbConnection = require('./config/database')
// const app = express()
// dbConnection()

// Conecta ao banco de dados
const dbConn = require('./config/database')

const expressSession = require('express-session')
const pgSession = require('connect-pg-simple')(expressSession)

var app = express();

const sessionConfig = {
  store: new pgSession({
    pool: dbConn
  })
}

app.use(expressSession(sessionConfig))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
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
