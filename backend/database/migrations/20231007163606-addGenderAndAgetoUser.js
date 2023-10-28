'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => { 
      queryInterface.addColumn(
        'users',
        'gender',
        {
          type: Sequelize.STRING
        }
      ),
      queryInterface.addColumn(
        'users',
        'age',
        {
          type: Sequelize.STRING
        }
      )
    }  
}
