'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('movies', [
      {
        id: '1',
        users_Id: 1,
        movieName: 'moviemovie',
        price: '13000',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '2',
        users_Id: 1,
        movieName: 'highigh',
        price: '20000',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '3',
        users_Id: 2,
        movieName: 'good',
        price: '10000',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '4',
        users_Id: 2,
        movieName: 'helloworld',
        price: '5000',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('movies', null, {});
  },
};
