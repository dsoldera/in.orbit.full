//import { StrictMode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRoot } from 'react-dom/client';
import { App } from './app.tsx';

import { Toaster } from 'sonner';
import './index.css';
const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <QueryClientProvider client={queryClient}>
    <Toaster richColors />
    <App />
  </QueryClientProvider>
  // </StrictMode>,
)
