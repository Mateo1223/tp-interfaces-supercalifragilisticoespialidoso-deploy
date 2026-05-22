import { createBrowserRouter } from 'react-router'
import AppLayout from './layouts/AppLayout'
import Demo from './pages/Demo'
import Home from './pages/Home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Demo /> },
      { path: 'demo', element: <Demo /> },
      { path: 'home', element: <Home /> },
    ],
  },
])
