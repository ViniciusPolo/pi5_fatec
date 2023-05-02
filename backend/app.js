const express = require("express")
const cors = require('cors')
const http = require('http')

require('./database/indexDB')

const dbConnection = require('./config/database')
const app = express()
//dbConnection()

app.use(express.json())
app.use(cors())

//Todas Rotas deverão ser descriminadas aqui
const usersRoutes = require('./api/routes/usersRoutes')
// const restaurantsRoutes = require('./api/routes/restaurantsRoutes')
// const menusRoutes = require('./api/routes/menusRoutes')
// const requestsRoutes = require('./api/routes/requestsRoutes')

//E usadas aqui
app.use(usersRoutes)
// app.use(restaurantsRoutes)
// app.use(menusRoutes)
// app.use('/requests',requestsRoutes)

//Quando for fazer o deploy, colocar o que aqui?
//app.set('url', 'http://localhost:');

//app.set('port', 443);
// app.set('port', 3001);

http.createServer(app).listen(app.get('port'), function(){
    //console.log('Server started on '+ app.get('url') + app.get('port'))
    console.log('Server started')
})

module.exports = app