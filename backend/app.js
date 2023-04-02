const express = require("express")
const cors = require('cors')
const http = require('http')

require('./database/indexDB')

//const dbConnection = require('./config/db')
const app = express()
//dbConnection()

app.use(express.json())
app.use(cors())

//Todas Rotas deverão ser descriminadas aqui
//ex: const usersRoutes = require('./api/routes/usersRoutes')

//E usadas aqui
//ex: app.use(usersRoutes)

//Quando for fazer o deploy, colocar o que aqui?
app.set('url', 'http://localhost:');
app.set('port', 3010);

http.createServer(app).listen(app.get('port'), function(){
    console.log('Server started on '+ app.get('url') + app.get('port'))
})

module.exports = app