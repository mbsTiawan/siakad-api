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
    return queryInterface.bulkInsert('MataKuliahs', [{
      kode_matkul: 'MKN001',
      nama: 'Pem. Web I',
      sks: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kode_matkul: 'MKN002',
      nama: 'Pem. Web II',
      sks: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kode_matkul: 'MKN003',
      nama: 'Algoritma',
      sks: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kode_matkul: 'MKN004',
      nama: 'DBMS',
      sks: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kode_matkul: 'MKN005',
      nama: 'Pem. Mobile',
      sks: 4,
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
    return queryInterface.bulkDelete('MataKuliahs', null, {})
  }
};
