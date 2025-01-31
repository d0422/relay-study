class Article {
  constructor({ id, title, content, author }) {
    this.id = String('article' + id);
    this.title = title;
    this.content = content;
    this.author = author;
    this.likeNum = 0;
    this.isLiked = false;
  }
}

module.exports = Article;
