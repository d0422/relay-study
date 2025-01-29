const defaultUser = { id: 0, name: 'Gildong' };
const MockDatabase = {
  users: [defaultUser],
  articles: [
    {
      id: 0,
      title: '글을 써보았어요',
      content: 'GraphQL+Relay를 처음 써보아요. 좋은 것 같아요~',
      author: defaultUser,
      likeNum: 0,
      isLiked: false,
    },
  ],
};

module.exports = MockDatabase;
