'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => { 
      queryInterface.addColumn(
        'users',
        'image',
        {
          type: Sequelize.STRING
        }
      ),
      queryInterface.addColumn(
        'menus',
        'image',
        {
          type: Sequelize.STRING
        }
      )
    }  
}
