const { Model, DataTypes } = require('sequelize')

class Addresses extends Model {
    static init(sequelize) {
        super.init({
            belong_to: DataTypes.INTEGER,
            belong_type: DataTypes.INTEGER,
            street: DataTypes.STRING,
            number: DataTypes.INTEGER,
            complement: DataTypes.STRING,
            cep: DataTypes.STRING,
            state: DataTypes.STRING,
            country: DataTypes.STRING,
            latitude: DataTypes.STRING,
            longitude: DataTypes.STRING,
        }, {
            sequelize,
            tableName: "addresses"
        })
        return this
    }
    static associate (models){
        this.belongsTo(models.Users, {foreignKey: 'belong_to', as: 'user'})
    }
}
module.exports = Addresses