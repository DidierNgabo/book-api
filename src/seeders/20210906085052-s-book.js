module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Books', [
      {
        title: 'The richest man in babylon',
        author: 'Samuel george',
        publisher: 'Napeleon hill',
        publicationDate: new Date(1962, 11, 17),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'The 7 habits of highly effective people',
        author: 'Dale carnegie',
        publisher: 'Napeleon hill',
        publicationDate: new Date(1998, 12, 17),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Books', null, {});
  },
};
