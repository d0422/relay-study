import { AppScreen } from '@stackflow/plugin-basic-ui';
import Articles from '../components/home/Articles';

export default function Home() {
  return (
    <AppScreen
      appBar={{
        title: '커뮤니티',
      }}
    >
      <Articles />
    </AppScreen>
  );
}
