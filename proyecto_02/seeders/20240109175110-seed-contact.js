'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   return queryInterface.bulkInsert("Contacts", [
    {
      firstname:"Angie",
      lastname:"Cohen Ramirez",
      phone:"212121212",
      email:"angie@gmail.com",
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    },
    {
      firstname:"Tanjio",
      lastname:"Kamado",
      phone:"00000001",
      email:"tanjiro@gmail.com",
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    },
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
