const { Model, DataTypes } = require('sequelize')

class Restaurants extends Model {
    static init(sequelize) {
        super.init({
            user_owner: DataTypes.INTEGER,
            restaurant_name: DataTypes.STRING,
            bio: DataTypes.STRING,
            logo: DataTypes.STRING,
            address: DataTypes.JSON,
        }, {
            sequelize,
            tableName: "restaurants"
        })
        return this
    }

    static associate (models){
        this.belongsTo(models.Users, {foreignKey: 'user_owner', as: 'owner'})
    }

}
module.exports = Restaurants