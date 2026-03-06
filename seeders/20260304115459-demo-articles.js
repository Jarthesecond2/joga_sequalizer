'use strict';

module.exports = {
  up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bulkInsert('Articles', [{
        name: 'Introduction to Ashtanga',
        slug: 'Introduction-to-Ashtanga',
        image: 'ashtanga.jpg',
        body: '<p>This is the body of the first article.</p>',
        published: "2020-01-08 15:02:30",
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
      queryInterface.bulkInsert('Articles', [{
        name: "Morning vinyasa flow routine",
        slug: "Morning-vinyasa-flow-routine",
        image: "morning.jpg",
        body: "<p>This is the body of the second article.</p>",
        published: "2020-04-14 15:02:41",
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
      queryInterface.bulkInsert('Articles', [{
        name: "Secrets of a yoga teacher",
        slug: "Secrets-of-a-yoga-teacher",
        image: "yoga-teacher.jpg",
        body: "<p>This is the body of the third article.</p>",
        published: "2060-05-28 15:02:55",
        createdAt: new Date(),
        updatedAt: new Date()
      }])
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Articles', null, {});
  }
};
