'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => { 
      queryInterface.addColumn(
        'requests',
        'opened',
        {
          type: Sequelize.INTEGER,
          allowNull: false
        }
      )
    }  
}