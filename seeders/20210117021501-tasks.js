'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     */
    Example: await queryInterface.bulkInsert('tasks', [
      {
        name_id: 1,
        description: 'Menghitung luas segitiga',
        status: 2,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name_id: 3,
        description: 'Menghitung luas lingkaran',
        status: 3,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name_id: 2,
        description: 'Menghitung luas persegi',
        status: 2,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name_id: 4,
        description: 'Menghitung luas persegi panjang',
        status: 1,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name_id: 5,
        description: 'Menghitung luas oval',
        status: 3,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name_id: 1,
        description: 'Menghitung luas limas',
        status: 1,
        createdAt: new Date,
        updatedAt: new Date
      },

    ], {});


  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     */ Example:
     await queryInterface.bulkDelete('tasks', null, {});
     
  }
};