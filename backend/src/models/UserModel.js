const { Model, DataTypes } = require("sequelize");

class Users extends Model {
  static init(sequelize) {
    super.init(
      {
        user_name: DataTypes.STRING,
        first_name: DataTypes.STRING,
        email: DataTypes.STRING,
        password_hash: DataTypes.STRING,
        type_of_user: DataTypes.INTEGER,
        address: DataTypes.JSON,
        age: DataTypes.STRING,
        gender: {
          type: DataTypes.ENUM(["M", "F"]),
        },
        image: DataTypes.STRING,
        date_of_birth: DataTypes.DATE,
      },
      {
        sequelize,
        tableName: "users",
      }
    );
    return this;
  }
  static associate(models) {
    this.hasMany(models.Restaurants, { foreignKey: "user_owner", as: "owner" });
    this.hasMany(models.Order, { foreignKey: "user_owner", as: "Order_owner" });
  }
}
module.exports = Users;
