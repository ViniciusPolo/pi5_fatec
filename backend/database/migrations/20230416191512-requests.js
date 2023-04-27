'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('requests', {
      // colunas da tabela
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      restaurant_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'restaurants', // <<< Note, its table's name, not object name
          key: 'id', // <<< Note, its a column name
        },
        allowNull: false
      },
      food_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'menus', // <<< Note, its table's name, not object name
          key: 'id', // <<< Note, its a column name
        },
        allowNull: false
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users', // <<< Note, its table's name, not object name
          key: 'id', // <<< Note, its a column name
        },
        allowNull: false
      },
      status_prepare:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      status_payment:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      // objeto options
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};