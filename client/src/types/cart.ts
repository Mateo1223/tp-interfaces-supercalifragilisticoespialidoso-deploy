export interface CartItem {
  id: string
  productId: string
  name: string
  category: string
  price: number
  quantity: number
  image: string
}

export interface Cart {
  id: string
  total: number
  items: CartItem[]
}
