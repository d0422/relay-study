import { AppScreen } from '@stackflow/plugin-basic-ui';
import { graphql, useLazyLoadQuery, usePaginationFragment } from 'react-relay';
import { HomeQuery as HomeQueryType } from './__generated__/HomeQuery.graphql';
import Profile from '../components/home/Profile';
import PlusButton from '../components/home/PlusButton';
import { useFlow } from '../stackflow';
import { HomeFragment$key } from './__generated__/HomeFragment.graphql';
import Article from '../components/home/Article';

const HomeQuery = graphql`
  query HomeQuery {
    ...HomeFragment
    getUser(id: "user0") {
      ...ProfileFragment
    }
  }
`;

const HomeFragment = graphql`
  fragment HomeFragment on Query
  @argumentDefinitions(
    cursor: { type: "String" }
    count: { type: "Int", defaultValue: 3 }
  )
  @refetchable(queryName: "HomePaginationQuery") {
    articles(first: $count, after: $cursor)
      @connection(key: "HomeFragmentFragment_articles") {
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

export default function Home() {
  const { push } = useFlow();
  const queryData = useLazyLoadQuery<HomeQueryType>(HomeQuery, {});
  const { data } = usePaginationFragment<HomeQueryType, HomeFragment$key>(
    HomeFragment,
    queryData
  );

  const edges = data.articles.edges;

  const onClick = () =>
    push('Write', {
      articlesConnectionID: data.articles.__id,
    });

  return (
    <AppScreen
      appBar={{
        title: '커뮤니티',
        renderRight: () => <Profile profile={queryData.getUser} />,
        overflow: 'visible',
      }}
    >
      {(!edges || edges.length === 0) && <div>아직 작성된 글이 없어요!</div>}
      {edges.map((article) =>
        article.node ? (
          <Article key={article.node.id} article={article.node} />
        ) : null
      )}
      <PlusButton onClick={onClick} />
    </AppScreen>
  );
}
