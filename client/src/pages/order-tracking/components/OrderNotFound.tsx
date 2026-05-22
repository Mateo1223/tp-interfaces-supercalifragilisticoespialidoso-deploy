import { useNavigate } from 'react-router'
import { Button } from '@heroui/react'
import { CircleXmark } from '@gravity-ui/icons'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

const OrderNotFound = ({ orderNumber }: { orderNumber: string }) => {
  const navigate = useNavigate()
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="bg-background flex-1 flex flex-col items-center justify-center px-4 py-10 text-center">
        <div className="bg-(--accent)/10 rounded-full size-16 flex items-center justify-center mb-5">
          <CircleXmark width={28} height={28} className="text-(--accent)" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Pedido no encontrado</h2>
        <p className="text-sm text-muted mb-1">No encontramos el pedido</p>
        <p className="text-sm font-medium text-(--accent) mb-6">{orderNumber}</p>
        <Button variant="primary" className="rounded-full" onClick={() => navigate('/order')}>
          Buscar otro pedido
        </Button>
      </div>
      <Footer />
    </main>
  )
}

export default OrderNotFound
