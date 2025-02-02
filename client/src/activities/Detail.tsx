import { AppScreen } from '@stackflow/plugin-basic-ui';
import DetailMain from '../pages/DetailMain';

type DetailParams = {
  params: {
    id: string;
  };
};

export default function Detail({ params: { id } }: DetailParams) {
  return (
    <AppScreen
      appBar={{
        title: '글 보기',
      }}
    >
      <DetailMain id={id} />
    </AppScreen>
  );
}
