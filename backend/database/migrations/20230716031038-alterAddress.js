'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn(
      'users',
      'address'
    ),
      queryInterface.removeColumn(
        'restaurants',
        'address'
      ),
      queryInterface.addColumn(
        'users',
        'address',
        {
          type: Sequelize.INTEGER
        }
      ),
      queryInterface.addColumn(
        'restaurants',
        'address',
        {
          type: Sequelize.INTEGER
        }
      )
  }
}