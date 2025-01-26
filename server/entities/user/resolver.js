const User = require('./User');
const MockDatabase = require('../../model/MockDatabase');

let userId = 0;

const getUser = ({ id }) => {
  const user = MockDatabase.users.find((element) => element.id === id);
  if (!user) {
    throw new Error('no user with' + id);
  }
  return user;
};

const createUser = ({ input }) => {
  const newUser = new User(userId++, input);
  MockDatabase.users = [...MockDatabase.users, newUser];
  return newUser;
};

module.exports = {
  getUser,
  createUser,
};
