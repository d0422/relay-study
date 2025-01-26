const Article = require('./Article.js');
const MockDatabase = require('../../model/MockDatabase');
const { getUser } = require('../user/resolver.js');
let articleId = 0;

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
    id: articleId++,
    title: input.title,
    content: input.content,
    author: author,
  });
  return article;
};

const articles = () => {
  return MockDatabase.articles;
};

const modifyArticle = ({ input }) => {
  const article = MockDatabase.articles.find((element) => element.id);
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

module.exports = {
  createArticle,
  articles,
  getArticle,
  modifyArticle,
};
