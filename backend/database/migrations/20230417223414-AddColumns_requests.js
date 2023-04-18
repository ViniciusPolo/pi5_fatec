'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => { 
      queryInterface.addColumn(
        'requests',
        'total_value',
        {
          type: Sequelize.FLOAT
        }
      ),
      queryInterface.addColumn(
        'requests',
        'total_delivery',
        {
          type: Sequelize.FLOAT
        }
      )
    }  
}