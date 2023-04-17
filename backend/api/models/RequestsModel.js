const { Model, DataTypes } = require('sequelize')

class Requests extends Model {
    static init(sequelize) {
        super.init({
            restaurant_id: DataTypes.INTEGER,
            food_id: DataTypes.INTEGER,
            user_id: DataTypes.FLOAT,
            status_prepare: DataTypes.INTEGER,
            status_payment: DataTypes.INTEGER
        }, {
            sequelize,
            tableName: "requests"
        })
        return this
    }

}
module.exports = Requests