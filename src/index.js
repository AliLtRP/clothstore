import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ErrorBoundary } from 'react-error-boundary';
import Error from './components/error/Error';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * (60 * 1000),
      cacheTime: 15 * (60 * 1000),
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary fallback={<Error />}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </ErrorBoundary>
);


reportWebVitals();
