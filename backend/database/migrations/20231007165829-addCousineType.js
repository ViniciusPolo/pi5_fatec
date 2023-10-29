'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => { 
      queryInterface.addColumn(
        'restaurants',
        'cousineType',
        {
          type: Sequelize.STRING
        }
      )
    }  
}