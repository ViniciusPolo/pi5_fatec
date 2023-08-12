const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const conexao = new Sequelize(dbConfig)

//import models
const users = require('../api/models/UsersModel')
const restaurants = require('../api/models/RestaurantsModel')
const menus = require('../api/models/MenusModel')
const requests = require('../api/models/RequestsModel')
const addresses = require('../api/models/AddressesModel')

try{
    conexao.authenticate();
    console.log('Conexão estabelecida!')
} catch (error) {
    console.log('Conexão não estabelecida =(')
}

// init connect with models
users.init(conexao)
restaurants.init(conexao)
menus.init(conexao)
requests.init(conexao)
addresses.init(conexao)

users.associate(conexao.models)
restaurants.associate(conexao.models)
addresses.associate(conexao.models)

module.exports = conexao