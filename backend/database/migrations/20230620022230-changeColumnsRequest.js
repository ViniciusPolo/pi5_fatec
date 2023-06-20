'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => { 
      queryInterface.removeColumn(
        'requests',
        'id_request_root'
      ),
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