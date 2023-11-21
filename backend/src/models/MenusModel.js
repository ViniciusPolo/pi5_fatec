const { Model, DataTypes } = require("sequelize");

class Menus extends Model {
  static init(sequelize) {
    super.init(
      {
        restaurant_id: DataTypes.INTEGER,
        food_name: DataTypes.STRING,
        price: DataTypes.FLOAT,
        prepare_time: DataTypes.INTEGER,
        ingrediants: DataTypes.JSON,
        logo: DataTypes.STRING,
        type_of_product: {
          type: DataTypes.ENUM(["food", "drink", "alcoholicDrink", "desert"]),
          allowNull: false, // Defina como true ou false, dependendo dos requisitos.
        },
      },
      {
        sequelize,
        tableName: "menus",
      }
    );
    return this;
  }
  static associate(models) {
    this.belongsTo(models.Restaurants, {
      foreignKey: "restaurant_id",
      as: "rest_owner",
    });
    this.hasMany(models.Requests, {
      foreignKey: "food_id",
      as: "menu_owner",
    });
    this.belongsToMany(models.Order, {
      foreignKey: "food_id",
      through: "requests",
      as: "orders",
    });
  }
}
module.exports = Menus;
