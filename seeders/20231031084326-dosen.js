'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Dosens', [{
      nidn: 'DSN001',
      nama: 'Widhiyono',
      alamat: 'Tirto',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nidn: 'DSN002',
      nama: 'Wahyu Setyanto',
      alamat: 'Sapuro',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nidn: 'DSN003',
      nama: 'Fajar Aji',
      alamat: 'Comal',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nidn: 'DSN004',
      nama: 'Agus Ilyas',
      alamat: 'Perum GTA',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nidn: 'DSN005',
      nama: 'Ichwan',
      alamat: 'Medono',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Dosens', null, {})
  }
};
