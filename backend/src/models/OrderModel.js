const { Model, DataTypes } = require("sequelize");

class Order extends Model {
  static init(sequelize) {
    super.init(
      {
        date_of_buy: DataTypes.DATE,
        user_owner: DataTypes.INTEGER,
        status_payment: DataTypes.INTEGER,
        is_open: DataTypes.INTEGER,
        day_of_week: {
          type: DataTypes.ENUM(["weekday", "weekend"]),
          allowNull: false, // Defina como true ou false, dependendo dos requisitos.
        },
      },
      {
        sequelize,
        tableName: "orders",
      }
    );
    return this;
  }
  static associate(models) {
    this.belongsToMany(models.Menus, {
      foreignKey: "order_id",
      through: "requests",
      as: "menus",
    });
    this.belongsTo(models.Users, {
      foreignKey: "user_owner",
      as: "Order_owner",
    });
    this.hasMany(models.Requests, { foreignKey: "order_id", as: "req_owner" });
  }
}
module.exports = Order;
