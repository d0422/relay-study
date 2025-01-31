class User {
  constructor(id, { name }) {
    this.id = String('user' + id);
    this.name = name;
  }
}

module.exports = User;
