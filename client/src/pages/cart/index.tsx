import { useNavigate } from 'react-router'
import { ShoppingCart } from '@gravity-ui/icons'
import Main from '../../components/Main'
import EmptyState from '../../components/EmptyState'
import { useCart } from '../../hooks/useCart.ts'

const Cart = () => {
  const navigate = useNavigate()
  const { isEmpty } = useCart()

  if (isEmpty) {
    return (
      <EmptyState
        icon={<ShoppingCart width={24} height={24} className="text-(--accent)" />}
        title="Tu carrito está vacío"
        description="Explorá nuestros productos y agregá lo que más te guste."
        action={{ label: 'Ver productos', onClick: () => navigate('/list') }}
      />
    )
  }

  return <Main>Cart Page</Main>
}

export default Cart
