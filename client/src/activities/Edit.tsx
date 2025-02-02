import { AppScreen } from '@stackflow/plugin-basic-ui';
import EditMain from '../pages/EditMain';

type EditParams = {
  params: {
    id: string;
  };
};

export default function Edit({ params: { id } }: EditParams) {
  return (
    <AppScreen
      appBar={{
        title: '글 수정하기',
      }}
    >
      <EditMain id={id} />
    </AppScreen>
  );
}
