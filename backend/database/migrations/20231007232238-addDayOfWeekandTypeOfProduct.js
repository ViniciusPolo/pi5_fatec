'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => { 
      queryInterface.addColumn(
        'requests',
        'dayOfWeek',
        {
          type: Sequelize.STRING
        }
      ),
      queryInterface.addColumn(
        'requests',
        'TypeOfProduct',
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
