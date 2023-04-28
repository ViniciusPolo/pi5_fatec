'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => { 
      queryInterface.addColumn(
        'requests',
        'id_request_root',
        {
          type: Sequelize.INTEGER,
          allowNull: false
        }
      )
    }  
}