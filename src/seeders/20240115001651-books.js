'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('books',
  [
    {
      title: 'Os Três Mosqueteiros',
      author: 'Alexandre Dumas',
      pageQuantity: 112,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      title: 'Peter Pan',
      author: 'James Matthew Barrie',
      pageQuantity: 192,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      title: 'Dracula',
      author: 'Bram Stocker',
      pageQuantity: 368,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    }
  ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('books', null, {}),
};