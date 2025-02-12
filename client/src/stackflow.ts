import { stackflow } from '@stackflow/react';
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { basicUIPlugin } from '@stackflow/plugin-basic-ui';
import Home from './activities/Home';
import Detail from './activities/Detail';
import Write from './activities/Write';
import Edit from './activities/Edit';

export const { Stack, useFlow } = stackflow({
  transitionDuration: 350,
  activities: {
    Home,
    Detail,
    Write,
    Edit,
  },
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: 'android',
    }),
  ],
  initialActivity: () => 'Home',
});
