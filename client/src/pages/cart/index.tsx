import { useNavigate } from 'react-router'
import { usePageTitle } from '../../hooks/usePageTitle'
import { ShoppingCart } from '@gravity-ui/icons'
import Main from '../../components/Main'
import EmptyState from '../../components/EmptyState'
import { useCart } from '../../hooks/useCart.ts'
import { ROUTES } from '../../config/routes'

const Cart = () => {
  usePageTitle('Mi carrito')
  const navigate = useNavigate()
  const { isEmpty } = useCart()

  if (isEmpty) {
    return (
      <EmptyState
        icon={<ShoppingCart width={24} height={24} className="text-(--accent)" />}
        title="Tu carrito está vacío"
        description="Explorá nuestros productos y agregá lo que más te guste."
        action={{ label: 'Ver productos', onClick: () => navigate(ROUTES.LIST) }}
      />
    )
  }

  return <Main>Cart Page</Main>
}

export default Cart
