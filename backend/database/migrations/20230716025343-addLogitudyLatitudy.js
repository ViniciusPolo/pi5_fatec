'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => { 
      queryInterface.addColumn(
        'address',
        'latitude',
        {
          type: Sequelize.STRING
        }
      ),
      queryInterface.addColumn(
        'address',
        'longitude',
        {
          type: Sequelize.STRING
        }
      )
    }  
}