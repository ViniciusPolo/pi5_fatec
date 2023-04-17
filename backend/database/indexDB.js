const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const conexao = new Sequelize(dbConfig)

//import models
const users = require('../api/models/UsersModel')
const restaurants = require('../api/models/RestaurantsModel')

try{
    conexao.authenticate();
    console.log('Conexão estabelecida!')
} catch (error) {
    console.log('Conexão não estabelecida =(')
}

// init connect with models
users.init(conexao)
restaurants.init(conexao)

users.associate(conexao.models)
restaurants.associate(conexao.models)

module.exports = conexao