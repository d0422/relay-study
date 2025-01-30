const gql = String.raw;

const userSchema = gql`
  type User {
    id: ID!
    name: String!
  }

  input UserInput {
    name: String!
  }
`;

module.exports = userSchema;
