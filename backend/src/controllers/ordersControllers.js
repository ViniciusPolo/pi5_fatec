const Orders = require("../models/OrderModel");

module.exports = {
  async indexAll(req, res) {
    try {
      const orders = await Orders.findAll();
      return res.json(orders);
    } catch (err) {
      return res.status(400).send("Broked ->" + err);
    }
  },
  async indexOne(req, res) {
    const { order_id } = req.params;
    try {
      const order = await Orders.findOne({
        where: { id: order_id },
        include: { association: "req_owner" },
      });
      return res.status(200).send({
        status: 1,
        message: `Order found`,
        order,
      });
    } catch (err) {
      return res.status(400).send("Order Not Found" + err);
    }
  },
  //
  async indexByUserOrder(req, res) {
    const { user_id } = req.params;
    try {
      const orders = await Orders.findAll({
        where: { user_owner: user_id, is_open: 0 },
        include: { association: "req_owner" },
      });
      return res.status(200).send({
        orders,
      });
    } catch (err) {
      return res.status(400).send("Orders by User Not Found" + err);
    }
  },
  async indexByUser(req, res) {
    const { user_id } = req.params;
    try {
      const orders = await Orders.findAll({
        where: { user_owner: user_id },
        include: { association: "req_owner" },
      });
      return res.status(200).send({
        status: 1,
        message: `Orders by User found`,
        orders,
      });
    } catch (err) {
      return res.status(400).send("Orders by User Not Found" + err);
    }
  },
  async store(req, res) {
    console.log(req.body);
    const { date_of_buy, user_owner, status_payment, is_open, day_of_week } =
      req.body;
    try {
      const orders = await Orders.create({
        date_of_buy,
        day_of_week,
        user_owner,
        status_payment,
        is_open,
      });
      return res.status(200).send({
        status: 1,
        message: "User sucessefull included",
        orders,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).send(error);
    }
  },
  async update(req, res) {
    const { order_id } = req.params;
    const data = req.body;
    console.log(req.body);
    try {
      const orders = await Orders.update(data, {
        where: { id: order_id },
      });
      return res.status(200).send({
        status: 1,
        message: "order sucessefull updated",
        orders,
      });
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async delete(req, res) {
    const { order_id } = req.params;
  },
};
