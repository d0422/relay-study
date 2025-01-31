import Article from './Article';
import { graphql, useFragment } from 'react-relay';
import { ArticlesFragment$key } from './__generated__/ArticlesFragment.graphql';

export default function Articles({
  queryData,
}: {
  queryData: ArticlesFragment$key;
}) {
  const {
    articles: { edges },
  } = useFragment(
    graphql`
      fragment ArticlesFragment on Query
      @argumentDefinitions(
        cursor: { type: "String" }
        count: { type: "Int", defaultValue: 1 }
      )
      @refetchable(queryName: "ArticlesRefetchQuery") {
        articles(first: $count, after: $cursor)
          @connection(key: "ArticlesFragment_articles") {
          edges {
            node {
              id
              ...ArticleFragment
            }
          }
        }
      }
    `,
    queryData
  );

  if (!edges || edges.length === 0) {
    return <div>아직 작성된 글이 없어요!</div>;
  }

  return edges.map((article) =>
    article.node ? (
      <Article key={article.node.id} article={article.node} />
    ) : null
  );
}
