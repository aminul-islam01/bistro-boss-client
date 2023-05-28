import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes'
import { HelmetProvider } from 'react-helmet-async';
import AuthProviders from './Provider/AuthProviders'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProviders>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </AuthProviders>
    </QueryClientProvider>
  </React.StrictMode>,
)
