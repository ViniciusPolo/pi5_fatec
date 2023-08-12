'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => { 
      queryInterface.addColumn(
        'addresses',
        'latitude',
        {
          type: Sequelize.STRING
        }
      ),
      queryInterface.addColumn(
        'addresses',
        'longitude',
        {
          type: Sequelize.STRING
        }
      )
    }  
}