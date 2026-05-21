import { createBrowserRouter } from 'react-router'
import AppLayout from './layouts/AppLayout'
import Demo from './pages/Demo'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Products from './pages/Products'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'demo', element: <Demo /> },
      { path: 'cart', element: <Cart /> },
      { path: 'contact', element: <Contact /> },
      { path: 'products', element: <Products /> },
    ],
  },
])
