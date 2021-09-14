const users = [
  {
    fullname: 'Didier Ngabo Uwayo',
    username: 'diddy',
    email: 'diddy@gmail.com',
    phone: '0799990000',
    password: 'diddy',
    role: 'ADMIN',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    fullname: 'Ineza honorine',
    username: 'nene',
    email: 'nene@gmail.com',
    phone: '0799990001',
    password: 'nene',
    role: 'USER',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
module.exports = {
  up: async (queryInterface) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('Users', users);
  },

  down: async (queryInterface) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  },
};
