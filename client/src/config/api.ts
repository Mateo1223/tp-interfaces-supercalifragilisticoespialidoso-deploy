export const API = {
  PRODUCTS: '/api/products',
  PRODUCT: (id: string) => `/api/products/${id}`,
  ORDERS: '/api/orders',
  ORDER_BY_NUMBER: (orderNumber: string) => `/api/orders?orderNumber=${orderNumber}`,
} as const
