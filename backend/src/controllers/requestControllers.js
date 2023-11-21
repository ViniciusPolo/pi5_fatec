const Request = require("../models/RequestModel");

module.exports = {
  async indexAll(req, res) {},

  async indexbyOrderId(req, res) {
    const { user_id } = req.body;
    try {
      const orders = await Request.findAll({
        // where: { order_id: order_id },
        include: [
          {
            association: "req_owner",
            where: { is_open: 0, user_owner: user_id },
          },
          { association: "menu_owner" },
        ],
      });
      return res.status(200).send({
        orders,
      });
    } catch (err) {
      return res.status(400).send("Orders by User Not Found" + err);
    }
  },

  async indexbyMenuOrder(req, res) {
    const { order_id, food_id } = req.body;
    try {
      const orders = await Request.findAll({
        where: { order_id: order_id, food_id: food_id },
        include: [{ association: "req_owner" }, { association: "menu_owner" }],
      });
      return res.status(200).send({
        orders,
      });
    } catch (err) {
      return res.status(400).send("Orders by User Not Found" + err);
    }
  },
  async store(req, res) {
    console.log(req.body);
    const data = req.body;
    try {
      const request = await Request.create(data);
      return res.status(200).send({
        request,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).send(error);
    }
  },
  async update(req, res) {
    const { id_request } = req.params;
    const data = req.body;
    try {
      const request = await Request.update(data, {
        where: { id: id_request },
      });
      return res.status(200).send({
        status: 1,
        message: "order sucessefull updated",
        request,
      });
    } catch (error) {
      return res.status(400).send(error);
    }
  },

  async delete(req, res) {
    const { id_request } = req.params;
    try {
      const request = await Request.destroy({
        where: { id: id_request },
      });
      return res.status(200).send({
        status: 1,
        message: `Request deleted`,
        request,
      });
    } catch (err) {
      return res.status(400).send("Request Not Found" + err);
    }
  },
};
