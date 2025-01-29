import { PropsWithChildren } from 'react';
import { RelayEnvironmentProvider } from 'react-relay';
import {
  Environment,
  Network,
  Observable,
  RecordSource,
  RequestParameters,
  Store,
  Variables,
} from 'relay-runtime';

function fetchFunction(params: RequestParameters, variables: Variables) {
  const response = fetch('http://localhost:8080/', {
    method: 'POST',
    headers: [['Content-Type', 'application/json']],
    body: JSON.stringify({
      query: params.text,
      variables,
    }),
  });

  return Observable.from(response.then((data) => data.json()));
}

function createEnvironment() {
  const network = Network.create(fetchFunction);
  const store = new Store(new RecordSource());
  return new Environment({ store, network });
}

const environment = createEnvironment();

export default function AppEnvironmentProvider({
  children,
}: PropsWithChildren) {
  return (
    <RelayEnvironmentProvider environment={environment}>
      {children}
    </RelayEnvironmentProvider>
  );
}
