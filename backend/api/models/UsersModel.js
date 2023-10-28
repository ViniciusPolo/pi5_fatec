const { Model, DataTypes } = require("sequelize");

class Users extends Model {
  static init(sequelize) {
    super.init(
      {
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        email: DataTypes.STRING,
        password_hash: DataTypes.STRING,
        type_of_user: DataTypes.INTEGER,
        address: DataTypes.JSON,
        documents: DataTypes.JSON,
        age: DataTypes.INTEGER,
        gender: {
          type: DataTypes.ENUM(["M", "F"]),
          allowNull: true, // Defina como true ou false, dependendo dos requisitos.
        },
        image: DataTypes.STRING,
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
  }
}
module.exports = Users;
