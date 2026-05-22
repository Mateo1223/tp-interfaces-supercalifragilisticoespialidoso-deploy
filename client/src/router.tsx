import { createBrowserRouter } from 'react-router'
import AppLayout from './layouts/AppLayout'
import Checkout from './pages/checkout'
import Demo from './pages/demo'
import Home from './pages/home'
import OrderSearch from './pages/order-search'
import OrderTracking from './pages/order-tracking'
import ProductDetail from './pages/product-detail'

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
