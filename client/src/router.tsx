import { createBrowserRouter } from 'react-router'
import AppLayout from './layouts/AppLayout'
import Checkout from './pages/Checkout'
import Demo from './pages/Demo'
import Home from './pages/Home'
import OrderSearch from './pages/OrderSearch'
import OrderTracking from './pages/OrderTracking'
import ProductDetail from './pages/ProductDetail'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Demo /> },
      { path: 'demo', element: <Demo /> },
      { path: 'home', element: <Home /> },
      { path: 'product/:slug', element: <ProductDetail /> },
      { path: 'checkout', element: <Checkout /> },
      { path: 'order', element: <OrderSearch /> },
      { path: 'order/:orderNumber', element: <OrderTracking /> },
    ],
  },
])
