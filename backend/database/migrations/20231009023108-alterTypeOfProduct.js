'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn(
      'menus',
      'TypeOfProduct'
    ),
      queryInterface.addColumn(
        'menus',
        'type_of_product',
        {
          type: Sequelize.ENUM(
            'food',
            'drink',
            'alcoholicDrink',
            'desert'
          )
        }
      ),
      queryInterface.removeColumn(
        'requests',
        'TypeOfProduct'
      ),
        queryInterface.addColumn(
          'requests',
          'type_of_product',
          {
            type: Sequelize.ENUM(
              'food',
              'drink',
              'alcoholicDrink',
              'desert'
            )
          }
        )
  }
}