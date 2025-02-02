import { AppScreen } from '@stackflow/plugin-basic-ui';
import Profile from '../components/home/Profile';
import HomeMain from '../pages/HomeMain';

export default function Home() {
  return (
    <AppScreen
      appBar={{
        title: '커뮤니티',
        renderRight: () => <Profile />,
        overflow: 'visible',
      }}
    >
      <HomeMain />
    </AppScreen>
  );
}
