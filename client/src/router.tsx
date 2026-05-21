import { createBrowserRouter } from 'react-router'
import AppLayout from './layouts/AppLayout'
import Demo from './pages/Demo'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Demo /> },
      { path: 'demo', element: <Demo /> },
    ],
  },
])
