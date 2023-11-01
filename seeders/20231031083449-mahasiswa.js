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

    return queryInterface.bulkInsert('Mahasiswas', [{
      nim: '23.230.0001',
      nama: 'Riko Ardianto',
      alamat: 'Sapuro',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nim: '23.230.0002',
      nama: 'Baki Alhaqi',
      alamat: 'Samborejo',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nim: '23.230.0003',
      nama: 'Ixia',
      alamat: 'Perum. GTA',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nim: '23.230.0004',
      nama: 'Adi Tai',
      alamat: 'Bandar',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nim: '23.230.0005',
      nama: 'Gaykar',
      alamat: 'Tirto',
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
    return queryInterface.bulkDelete('Mahasiswas', null, {})
  }
};
