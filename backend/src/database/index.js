const Sequelize = require("sequelize");

const dbconfig = require("../config/database");

const connection = new Sequelize(dbconfig);

//import models
const users = require("../models/UserModel");
const restaurants = require("../models/RestaurantModel");
const menus = require("../models/MenusModel");
const orders = require("../models/OrderModel");
const requests = require("../models/RequestModel");

try {
  connection.authenticate();
  console.log("Conexão estabelecida!");
} catch (error) {
  console.log("Conexão não estabelecida =(");
}

// init connect with models
users.init(connection);
restaurants.init(connection);
menus.init(connection);
orders.init(connection);
requests.init(connection);

users.associate(connection.models);
restaurants.associate(connection.models);
menus.associate(connection.models);
orders.associate(connection.models);
requests.associate(connection.models);

module.exports = connection;
