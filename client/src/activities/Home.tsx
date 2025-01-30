import { AppScreen } from '@stackflow/plugin-basic-ui';
import Articles from '../components/home/Articles';
import { graphql, useLazyLoadQuery } from 'react-relay';
import { HomeQuery as HomeQueryType } from './__generated__/HomeQuery.graphql';
import Profile from '../components/home/Profile';

const HomeQuery = graphql`
  query HomeQuery {
    articles {
      id
      ...ArticleFragment
    }
    getUser(id: "0") {
      ...ProfileFragment
    }
  }
`;

export default function Home() {
  const { articles, getUser } = useLazyLoadQuery<HomeQueryType>(HomeQuery, {});

  return (
    <AppScreen
      appBar={{
        title: '커뮤니티',
        renderRight: () => <Profile profile={getUser} />,
        overflow: 'visible',
      }}
    >
      <Articles articles={articles} />
    </AppScreen>
  );
}
