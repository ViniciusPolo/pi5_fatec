"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("requests", {
      // colunas da tabela
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      order_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "orders", // <<< Note, its table's name, not object name
          key: "id", // <<< Note, its a column name
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      food_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "menus", // <<< Note, its table's name, not object name
          key: "id", // <<< Note, its a column name
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      status_prepare: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      total_value: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      total_delivery: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("requests");
  },
};
