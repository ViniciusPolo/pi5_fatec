"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("menus", {
      // colunas da tabela
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      restaurant_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "restaurants", // <<< Note, its table's name, not object name
          key: "id", // <<< Note, its a column name
        },
        allowNull: false,
      },
      food_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.FLOAT,
      },
      prepare_time: {
        type: Sequelize.INTEGER, //minutes
      },
      ingrediants: {
        type: Sequelize.JSON,
      },
      type_of_product: {
        type: Sequelize.ENUM(["food", "drink", "alcoholicDrink", "desert"]),
        allowNull: false, // Defina como true ou false, dependendo dos requisitos.
      },
      // objeto options
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

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("users");
  },
};
