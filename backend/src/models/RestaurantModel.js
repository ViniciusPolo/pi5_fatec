const { Model, DataTypes } = require("sequelize");

class Restaurants extends Model {
  static init(sequelize) {
    super.init(
      {
        user_owner: DataTypes.INTEGER,
        restaurant_name: DataTypes.STRING,
        bio: DataTypes.STRING,
        logo: DataTypes.STRING,
        cousine_type: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: "restaurants",
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Users, { foreignKey: "user_owner", as: "owner" });
    this.hasMany(models.Menus, {
      foreignKey: "restaurant_id",
      as: "rest_owner",
    });
  }
}
module.exports = Restaurants;
