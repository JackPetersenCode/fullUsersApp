const faker = require('faker');
const createFakeUser = () => ({
  name: faker.name.lastName(),
  email: faker.internet.email()
});
exports.seed = async function(knex) {
  const fakeUsers = [];
  const desiredFakeUsers = 1000;
  for(let i=0; i<desiredFakeUsers; i++) {
    fakeUsers.push(createFakeUser());
  }
  await knex('users').insert(fakeUsers);
};
