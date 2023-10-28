'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn(
      'request',
      'dayOfWeek'
    ),
    queryInterface.removeColumn(
      'menus',
      'day_of_week'
    ),
      queryInterface.addColumn(
        'requests',
        'day_of_week',
        {
          type: Sequelize.ENUM(
            'weekday',
            'weekend',
          )
        }
      )
  }
}