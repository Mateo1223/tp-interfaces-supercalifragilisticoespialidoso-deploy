import type { Cart } from '../types/cart'

export const mockCart: Cart = {
  id: 'cart-1',
  total: 503900,
  items: [
    {
      id: 'cart-item-1',
      productId: 'wild-west-vest-black-denim',
      name: 'Wild West Vest Black Denim',
      category: 'camperas',
      price: 329000,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=200&q=80',
    },
    {
      id: 'cart-item-2',
      productId: 'urban-wave-tee-off-white',
      name: 'Urban Wave Tee Off-White',
      category: 'remeras',
      price: 42500,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=200&q=80',
    },
    {
      id: 'cart-item-3',
      productId: 'cargo-pant-olive-drab',
      name: 'Cargo Pant Olive Drab',
      category: 'pantalones',
      price: 89900,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=200&q=80',
    },
  ],
}
