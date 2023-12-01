'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => { 
      queryInterface.addColumn(
        'users',
        'date_of_birth',
        {
          type: Sequelize.DATE,
          //allowNull: false
        }
      )
    }  
}