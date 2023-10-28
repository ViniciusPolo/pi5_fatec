'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => { 
      queryInterface.addColumn(
        'menus',
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