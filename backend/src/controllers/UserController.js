const Users = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  async indexAll(req, res) {
    try {
      const users = await Users.findAll();
      return res.json(users);
    } catch (err) {
      return res.status(400).send("Broked ->" + err);
    }
  },

  async indexByEmail(req, res) {
    const { email } = req.body;
    try {
      const verifyEmail = await Users.findOne({
        where: { email },
      });
      return res.status(200).send({
        status: 1,
        message: `User found`,
        verifyEmail,
      });
    } catch (err) {
      return res.status(400).send("email not found" + err);
    }
  },
  async indexOne(req, res) {
    const { id_user } = req.params;
    try {
      const user = await Users.findOne({
        where: { id: id_user },
      });
      return res.status(200).send({
        status: 1,
        message: `User found`,
        user,
      });
    } catch (err) {
      return res.status(400).send("User Not Found" + err);
    }
  },
  async store(req, res) {
    try {
      const {
        user_name,
        first_name,
        email,
        password,
        type_of_user,
        address,
        age,
        gender,
        image,
        date_of_birth,
      } = req.body;

      if (!password)
        return res.status(500).send({ error: 'Path "password" is required' });

      const password_hash = await bcrypt.hash(password, 12);

      const users = await Users.create({
        user_name,
        first_name,
        email,
        password_hash,
        type_of_user,
        address,
        age,
        gender,
        image,
        date_of_birth,
      });
      return res.status(200).send({
        status: 1,
        message: "User sucessefull included",
        users,
      });
    } catch (error) {
      return res.status(400).send({ err: "User Not Found - " + error });
    }
  },
  async storeOne(req, res) {
    const age = 0;
    try {
      const { first_name, email, password, type_of_user, user_name } = req.body;

      if (!password)
        return res.status(500).send({ error: 'Path "password" is required' });

      const password_hash = await bcrypt.hash(password, 12);
      //   console.log(password_hash);
      const users = await Users.create({
        first_name,
        user_name,
        email,
        password_hash,
        type_of_user,
      });
      return res.status(200).send({
        status: 1,
        message: "User sucessefull included",
        users,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).send(error);
    }
  },
  async updateAddress(req, res) {
    const { id_user } = req.params;
    const data = req.body;
    try {
      const user = await Users.update(
        { address: data.data },
        { where: { id: id_user } }
      );
      console.log(user);
      return user;
    } catch (error) {
      console.log(error);
      return res.status(400).send(error);
    }
  },

  async update(req, res) {
    const { id_user } = req.params;

    const data = req.body;

    try {
      const user = await Users.update(data, { where: { id: id_user } });
      console.log(user);

      return user;
    } catch (error) {
      console.log(error);
      return res.status(400).send(error);
    }
  },

  async login(req, res) {
    try {
      const user = await Users.findOne({ where: { email: req.body.email } });
      // console.log(user.id);
      if (!user) res.status(401).send("Unauthorized");
      else {
        bcrypt.compare(
          req.body.password,
          user.dataValues.password_hash,
          function (err, result) {
            if (result) {
              const token = jwt.sign({ id: user.id }, process.env.SECRET, {
                expiresIn: 3600,
              });
              res.json({ auth: true, user_id: user.id, token });
            } else res.status(401).end();
          }
        );
      }
    } catch (error) {
      console.error(error);
      // HTTP 500: Internal Server Error
      res.status(500).send(error);
    }
  },

  async logout(req, res) {
    try {
      res.send({ auth: false, token: null });
    } catch (error) {
      return res.status(400).send(error);
    }
  },

  ValidToken(req, res) {
    const token = req.body.token;

    if (!token) {
      return res.status(401).json({ message: "Token não fornecido" });
    }

    try {
      const dedoded = jwt.verify(token, process.env.SECRET);

      return res.json({ auth: true });
    } catch (error) {}
    return res.json({ auth: false });
  },
};
