'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('movies', 'users_Id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'users', //table
        key: 'id',
      },
      onDelete: 'no action',
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('movies', 'users_Id', {
      type: Sequelize.INTEGER,
    });
  },
};
