import { useCart } from './useCart'
import { useProductsByIds } from './useProductsByIds'

export const useEnrichedCart = () => {
  const { cart, clearCart, isEmpty } = useCart()
  const productIds = (cart?.items ?? []).map((item) => item.productId)
  const { data: products, isLoading } = useProductsByIds(productIds)

  const items = (cart?.items ?? []).map((item) => {
    const product = products?.find((p) => p.id === item.productId)
    return {
      id: item.id,
      productId: item.productId,
      name: product?.name ?? '',
      image: product?.images[0] ?? '',
      quantity: item.quantity,
      unitPrice: product?.price ?? 0,
      price: (product?.price ?? 0) * item.quantity,
    }
  })

  const subtotal = items.reduce((sum, item) => sum + item.price, 0)

  return { items, subtotal, isEmpty, isLoading, cart, clearCart }
}
