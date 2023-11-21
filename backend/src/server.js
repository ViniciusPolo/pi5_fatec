const express = require("express");
const cors = require("cors");
const http = require("http");
const bodyParser = require("body-parser");
require("dotenv").config();

require("./database/");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

const usersRoutes = require("./routes/UserRoutes");
const restaurantsRoutes = require("./routes/restaurantsRoutes");
const menusRoutes = require("./routes/menusRoutes");
const ordersRoutes = require("./routes/ordersRoutes");
const requestRoutes = require("./routes/requestRoutes");

app.use(usersRoutes);
app.use(restaurantsRoutes);
app.use(menusRoutes);
app.use(ordersRoutes);
app.use(requestRoutes);

//Para Localhost

app.set("url", "http://localhost:");
app.set("port", 3001);
http.createServer(app).listen(app.get("port"), function () {
  console.log("Server started on " + app.get("url") + app.get("port"));
});

//Para deploy

// const port = process.env.PORT || 8080;
// http.createServer(app).listen(port, () => {
//   console.log(`Server started on port ${port}`);
// });

module.exports = app;
