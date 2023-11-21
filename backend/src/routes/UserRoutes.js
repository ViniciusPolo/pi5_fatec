const express = require("express");
const userController = require("../controllers/UserController");
const UserController = require("../controllers/UserController");

const routes = express.Router();

routes.get("/users", userController.indexAll);
routes.get("/users/:id_user", userController.indexOne);

routes.post("/validate", userController.ValidToken);
routes.post("/emailusers", userController.indexByEmail);
routes.post("/users", userController.store);
routes.post("/cadusers", userController.storeOne);
routes.post("/login", userController.login);
routes.post("/logout", userController.logout);

routes.put("/users-address/:id_user", userController.updateAddress);
routes.put("/users/:id_user", UserController.update);

module.exports = routes;
