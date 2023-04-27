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
        }, {
            sequelize,
            tableName: "requests"
        })
        return this
    }

}
module.exports = Requests