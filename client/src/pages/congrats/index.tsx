import Main from '../../components/Main'
import { usePageTitle } from '../../hooks/usePageTitle'
import Stepper, { type Step } from '../../components/Stepper'
import { useParams } from 'react-router'
import { useOrder } from '../../hooks/useOrder'
import { useSearchParams } from 'react-router'



const STEPS: Step[] = [
  { label: 'Carrito', status: 'completed' },
  { label: 'Pago', status: 'completed' },
  { label: 'Confirmación', status: 'completed' },
]

const Success = () => {

    const { orderNumber } = useSearchParams<{ orderNumber: string }>()
    const { order } = useOrder(orderNumber ?? '')

    const nombre = order?.customer.firstName ?? 'Cliente'
    const idPedido = order?.orderNumber ?? 'Desconocido'
    
    usePageTitle('Felicitaciones')
    return (
        <Main>
        <div className="hidden sm:block">
          <Stepper steps={STEPS} />
        </div>
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-4xl font-bold">¡Gracias por tu compra!</h1>
                <p className="text-lg text-muted">Tu pedido ha sido recibido y está siendo procesado.</p>
            </div>
        </Main>
    )
}

export default Success