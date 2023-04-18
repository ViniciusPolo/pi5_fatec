const { Model, DataTypes } = require('sequelize')

class Menus extends Model {
    static init(sequelize) {
        super.init({
            restaurant_id: DataTypes.INTEGER,
            food_name: DataTypes.STRING,
            price: DataTypes.FLOAT,
            prepare_time: DataTypes.INTEGER,
            ingrediants: DataTypes.JSON,
        }, {
            sequelize,
            tableName: "menus"
        })
        return this
    }

}
module.exports = Menus