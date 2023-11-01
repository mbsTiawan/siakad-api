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
    return queryInterface.bulkInsert('DosenMatkuls', [{
      id_dosen: 2,
      id_maktul: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id_dosen: 2,
      id_maktul: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id_dosen: 3,
      id_maktul: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id_dosen: 4,
      id_maktul: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id_dosen: 6,
      id_maktul: 7,
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
