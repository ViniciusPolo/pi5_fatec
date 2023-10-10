'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => { 
      queryInterface.addColumn(
        'request',
        'dayOfWeek',
        {
          type: Sequelize.STRING
        }
      ),
      queryInterface.addColumn(
        'request',
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