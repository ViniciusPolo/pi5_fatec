const express = require("express");
const router = express.Router();

const OrdersControllers = require("../controllers/ordersControllers");

router.get("/orders", OrdersControllers.indexAll);
router.get("/orders-request/:user_id", OrdersControllers.indexByUser);
router.get("/orders-open/:user_id", OrdersControllers.indexByUserOrder);
router.get("/orders/:order_id", OrdersControllers.indexOne);

router.post("/orders", OrdersControllers.store);
router.put("/orders/:order_id", OrdersControllers.update);

module.exports = router;
