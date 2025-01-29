const gql = String.raw;

const articleSchema = gql`
  type Article {
    id: ID!
    title: String!
    content: String!
    author: User!
    likeNum: Int
    isLiked: Boolean
  }

  input ArticleInput {
    title: String!
    content: String!
    userId: String!
  }

  input ArticleModifyInput {
    title: String
    content: String
  }
`;

module.exports = articleSchema;
