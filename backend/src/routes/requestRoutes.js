const express = require("express");
const router = express.Router();

const RequestControllers = require("../controllers/requestControllers");

router.post("/requestorder", RequestControllers.indexbyOrderId);
router.post("/requestmenuorder", RequestControllers.indexbyMenuOrder);

router.post("/request", RequestControllers.store);
router.delete("/request/:id_request", RequestControllers.delete);
router.put("/request/:id_request", RequestControllers.update);

module.exports = router;
