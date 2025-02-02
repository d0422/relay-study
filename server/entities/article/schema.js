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
    id: ID!
    title: String
    content: String
  }

  type ArticleEdge {
    node: Article!
    cursor: String!
  }

  type ArticleConnection {
    edges: [ArticleEdge!]!
    pageInfo: PageInfo!
  }

  type PageInfo {
    startCursor: String
    endCursor: String
    lastCursor: String
    hasNextPage: Boolean
    hasPreviousPage: Boolean
  }
`;

module.exports = articleSchema;
