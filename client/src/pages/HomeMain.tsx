import { graphql, useLazyLoadQuery, usePaginationFragment } from 'react-relay';
import Article from '../components/home/Article';
import withSuspense from '../hoc/withSuspense';
import { HomeMainQuery as HomeMainQueryType } from './__generated__/HomeMainQuery.graphql';
import { HomeMainFragment$key } from './__generated__/HomeMainFragment.graphql';
import { useFlow } from '../stackflow';
import PlusButton from '../components/home/PlusButton';

const HomeMainQuery = graphql`
  query HomeMainQuery {
    ...HomeMainFragment
  }
`;

const HomeMainFragment = graphql`
  fragment HomeMainFragment on Query
  @argumentDefinitions(
    cursor: { type: "String" }
    count: { type: "Int", defaultValue: 3 }
  )
  @refetchable(queryName: "HomeMainPaginationQuery") {
    articles(first: $count, after: $cursor)
      @connection(key: "HomeMainFragment_articles") {
      __id
      edges {
        node {
          id
          ...ArticleFragment
        }
      }
    }
  }
`;

const HomeMain = withSuspense(() => {
  const { push } = useFlow();

  const queryData = useLazyLoadQuery<HomeMainQueryType>(HomeMainQuery, {});
  const { data } = usePaginationFragment<
    HomeMainQueryType,
    HomeMainFragment$key
  >(HomeMainFragment, queryData);

  const edges = data.articles.edges;

  const onClick = () =>
    push('Write', {
      articlesConnectionID: data.articles.__id,
    });

  return (
    <>
      {(!edges || edges.length === 0) && <div>아직 작성된 글이 없어요!</div>}
      {edges.map((article) =>
        article.node ? (
          <Article key={article.node.id} article={article.node} />
        ) : null
      )}
      <PlusButton onClick={onClick} />
    </>
  );
});

export default HomeMain;
