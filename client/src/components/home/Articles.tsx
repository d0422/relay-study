import { graphql, useLazyLoadQuery } from 'react-relay';
import Article from './Article';
import { ArticlesQuery as ArticlesQueryType } from './__generated__/ArticlesQuery.graphql';

const ArticlesQuery = graphql`
  query ArticlesQuery {
    articles {
      id
      ...ArticleFragment
    }
  }
`;

export default function Articles() {
  const { articles } = useLazyLoadQuery<ArticlesQueryType>(ArticlesQuery, {});

  if (!articles || articles.length === 0) {
    return <div>아직 작성된 글이 없어요!</div>;
  }

  return articles.map((article) =>
    article ? <Article key={article.id} article={article} /> : null
  );
}
