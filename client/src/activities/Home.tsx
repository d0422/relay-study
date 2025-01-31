import { AppScreen } from '@stackflow/plugin-basic-ui';
import Articles from '../components/home/Articles';
import { graphql, useLazyLoadQuery } from 'react-relay';
import { HomeQuery as HomeQueryType } from './__generated__/HomeQuery.graphql';
import Profile from '../components/home/Profile';
import PlusButton from '../components/home/PlusButton';

const HomeQuery = graphql`
  query HomeQuery {
    ...ArticlesFragment
    getUser(id: "0") {
      ...ProfileFragment
    }
  }
`;

export default function Home() {
  const queryData = useLazyLoadQuery<HomeQueryType>(HomeQuery, {});

  return (
    <AppScreen
      appBar={{
        title: '커뮤니티',
        renderRight: () => <Profile profile={queryData.getUser} />,
        overflow: 'visible',
      }}
    >
      <Articles queryData={queryData} />
      <PlusButton />
    </AppScreen>
  );
}
