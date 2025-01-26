const express = require('express');
const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql');
const {
  schema: userSchema,
  resolver: userResolver,
} = require('./entities/user');
const {
  schema: articleSchema,
  resolver: articleResolver,
} = require('./entities/article');

const gql = String.raw;

const schema = buildSchema(gql`
  ${userSchema}
  ${articleSchema}

  type Query {
    users: [User]
    getUser(id: ID!): User
    articles: [Article]
    getArticle(id: ID!): Article
  }

  type Mutation {
    createUser(input: UserInput): User
    createArticle(input: ArticleInput): Article
    modifyArticle(input: ArticleModifyInput): Article
  }
`);

const root = {
  ...userResolver,
  ...articleResolver,
};

const app = express();

app.use(
  '/',
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(8080);
