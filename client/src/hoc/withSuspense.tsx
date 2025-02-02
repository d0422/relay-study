import { Suspense } from 'react';
import Loading from '../components/shared/Loading';

interface WithSuspenseOptions {
  fallback?: React.ReactNode;
}

export default function withSuspense<T extends object>(
  Component: React.ComponentType<T>,
  options: WithSuspenseOptions = { fallback: <Loading /> }
) {
  return function SuspenseComponent({ ...props }: T) {
    return (
      <Suspense fallback={options.fallback}>
        <Component {...(props as T)} />
      </Suspense>
    );
  };
}
