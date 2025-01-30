import Article from './Article';
import { HomeQuery$data } from '../../activities/__generated__/HomeQuery.graphql';

export default function Articles({
  articles,
}: {
  articles: HomeQuery$data['articles'];
}) {
  if (!articles || articles.length === 0) {
    return <div>아직 작성된 글이 없어요!</div>;
  }

  return articles.map((article) =>
    article ? <Article key={article.id} article={article} /> : null
  );
}
