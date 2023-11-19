import React, { lazy } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: true,
      refetchOnReconnect: false,
    },
  },
});

const DefaultRoutes = lazy(() => import('./routes'));

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DefaultRoutes />
    </QueryClientProvider>
  );
}

export default App;
