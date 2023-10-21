const express = require("express");
const router = express.Router();

const usersController = require("../controllers/usersControllers");

router.get("/users", usersController.indexAll);
router.get("/users/:id_user", usersController.indexOne);

router.post("/validate", usersController.ValidToken);
router.post("/users", usersController.store);
router.post("/cadusers", usersController.storeOne);

router.put("/users/:id_user", usersController.update);
router.patch("/users/:id_user", usersController.updateImage);

router.post("/login", usersController.login);
router.post("/logout", usersController.logout);

module.exports = router;
