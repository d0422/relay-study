import '@stackflow/plugin-basic-ui/index.css';
import { Stack } from './stackflow';
import AppEnvironmentProvider from './AppEnvironmentProvider';

function App() {
  return (
    <AppEnvironmentProvider>
      <Stack />
    </AppEnvironmentProvider>
  );
}

export default App;
