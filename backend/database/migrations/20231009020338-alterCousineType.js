'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn(
      'restaurants',
      'cousineType'
    ),
      queryInterface.addColumn(
        'restaurants',
        'cousine_type',
        {
          type: Sequelize.STRING
        }
      )
  }
}