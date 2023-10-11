const { Model, DataTypes } = require('sequelize')

class Requests extends Model {
    static init(sequelize) {
        super.init({
            restaurant_id: DataTypes.INTEGER,
            food_id: DataTypes.INTEGER,
            user_id: DataTypes.INTEGER,
            status_prepare: DataTypes.INTEGER,
            status_payment: DataTypes.INTEGER,
            total_value: DataTypes.FLOAT,
            total_delivery: DataTypes.FLOAT,
            quantity: DataTypes.INTEGER,
            is_open: DataTypes.INTEGER,
            day_of_week: {
                type: DataTypes.ENUM(['weekday',
                'weekend']),
                allowNull: false // Defina como true ou false, dependendo dos requisitos.
            },      
            type_of_product: {
                type: DataTypes.ENUM(['food',
                'drink',
                'alcoholicDrink',
                'desert']),
                allowNull: false // Defina como true ou false, dependendo dos requisitos.
            }       
        }, {
            sequelize,
            tableName: "requests"
        })
        return this
    }

}
module.exports = Requests