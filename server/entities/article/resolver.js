const Article = require('./Article.js');
const MockDatabase = require('../../model/MockDatabase');
const { getUser } = require('../user/resolver.js');
let articleId = 1;

const getArticle = ({ id }) => {
  const article = MockDatabase.articles.find((element) => element.id === id);
  if (!article) {
    throw new Error('no article with' + id);
  }
  return article;
};

const createArticle = ({ input }) => {
  const author = getUser({ id: input.userId });
  const article = new Article({
    id: String(articleId++),
    title: input.title,
    content: input.content,
    author: author,
  });
  MockDatabase.articles = [...MockDatabase.articles, article];

  return {
    cursor: article.id,
    node: article,
  };
};

const articles = ({ first = 10, after }) => {
  const allArticles = MockDatabase.articles;
  const startIndex = after
    ? allArticles.findIndex((article) => article.id === after) + 1
    : 0;

  const slicedArticles = allArticles.slice(startIndex, startIndex + first);
  slicedArticles.reverse();

  return {
    edges: slicedArticles.map((article) => ({
      node: article,
      cursor: article.id,
    })),
    pageInfo: {
      hasNextPage: startIndex + first < allArticles.length,
      hasPreviousPage: startIndex > 0,
      startCursor: slicedArticles.length > 0 ? slicedArticles[0].id : null, // 추가
      endCursor:
        slicedArticles.length > 0
          ? slicedArticles[slicedArticles.length - 1].id
          : null,
    },
  };
};

const modifyArticle = ({ input }) => {
  const article = MockDatabase.articles.find(
    (element) => element.id === input.id
  );
  if (!article) {
    throw new Error('해당 글을 조회할 수 없어요!');
  }
  const modifiedArticle = { ...article };
  modifiedArticle.content = input.content;
  modifiedArticle.title = input.title;
  MockDatabase.articles = [
    ...MockDatabase.articles.filter((element) => element.id !== input.id),
    modifiedArticle,
  ];

  return modifiedArticle;
};

const likeArticle = ({ articleID }) => {
  // User에 관계없이 좋아요 구현
  const article = MockDatabase.articles.find(
    (element) => element.id === articleID
  );
  console.log(article);

  if (!article) {
    throw new Error('해당 글을 조회할 수 없어요!');
  }
  const modifiedArticle = { ...article };
  const isAlreadyLike = modifiedArticle.isLiked;
  if (isAlreadyLike) {
    modifiedArticle.likeNum -= 1;
  } else {
    modifiedArticle.likeNum += 1;
  }

  modifiedArticle.isLiked = !modifiedArticle.isLiked;

  MockDatabase.articles = [
    ...MockDatabase.articles.filter((element) => element.id !== articleID),
    modifiedArticle,
  ];

  return modifiedArticle;
};

module.exports = {
  createArticle,
  articles,
  getArticle,
  modifyArticle,
  likeArticle,
};
