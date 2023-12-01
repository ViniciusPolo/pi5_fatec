const { Model, DataTypes } = require("sequelize");

class Requests extends Model {
  static init(sequelize) {
    super.init(
      {
        order_id: DataTypes.INTEGER,
        food_id: DataTypes.INTEGER,
        status_prepare: DataTypes.INTEGER,
        total_value: DataTypes.FLOAT,
        total_delivery: DataTypes.FLOAT,
        quantity: DataTypes.INTEGER,
      },
      {
        sequelize,
        tableName: "requests",
      }
    );
    return this;
  }
  static associate(models) {
    this.belongsTo(models.Order, {
      foreignKey: "order_id",
      as: "req_owner",
    });
    this.belongsTo(models.Menus, {
      foreignKey: "food_id",
      as: "menu_owner",
    });
  }
}
module.exports = Requests;
