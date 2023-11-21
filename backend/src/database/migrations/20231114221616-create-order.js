"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("orders", {
      // colunas da tabela
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_owner: {
        type: Sequelize.INTEGER,
        references: {
          model: "users", // <<< Note, its table's name, not object name
          key: "id", // <<< Note, its a column name
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      date_of_buy: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      status_payment: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      is_open: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      day_of_week: {
        type: Sequelize.ENUM(["weekday", "weekend"]),
        allowNull: false, // Defina como true ou false, dependendo dos requisitos.
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
    await queryInterface.dropTable("orders");
  },
};
