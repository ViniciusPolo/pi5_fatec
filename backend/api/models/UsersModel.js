const { Model, DataTypes } = require('sequelize')

class Users extends Model {
    static init(sequelize) {
        super.init({
            first_name: DataTypes.STRING,
            last_name: DataTypes.STRING,
            email: DataTypes.STRING,
            password_hash: DataTypes.STRING,
            type_of_user: DataTypes.INTEGER,
            address: DataTypes.JSON,
            documents: DataTypes.JSON,
            gender: {
                type: DataTypes.ENUM(['M', 'F']),
                allowNull: false // Defina como true ou false, dependendo dos requisitos.
            },
            age: DataTypes.STRING,
            image: DataTypes.STRING,
            date_of_birth: DataTypes.DATE
        }, {
            sequelize,
            tableName: "users"
        })
        return this
    }
    static associate(models){
        this.hasMany(models.Restaurants, {foreignKey: 'user_owner', as: 'owner'})
    }
}
module.exports = Users