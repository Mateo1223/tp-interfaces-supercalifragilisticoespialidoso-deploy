import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ContactForm from './components/ContactForm.tsx'
import EmptyCart from './components/EmptyCart.tsx'
import ItemsCard from '../../components/ItemsCard'
import PaymentSummary from '../../components/PaymentSummary'
import PaymentForm from './components/PaymentForm'
import ShippingForm from './components/ShippingForm.tsx'
import Stepper, { type Step } from '../../components/Stepper'
import { mockCart } from '../../mocks/cart.ts'

const STEPS: Step[] = [
  { label: 'Carrito', status: 'completed' },
  { label: 'Pago', status: 'current' },
  { label: 'Confirmación', status: 'pending' },
]

const Checkout = () => {
  const cart = mockCart
  const subtotal = cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if (cart.items.length === 0) return <EmptyCart />

  return (
    <main className="min-h-screen">
      <Header />
      <div className="bg-background">
        <div className="container max-w-6xl px-4 sm:px-6 lg:px-10 py-10 lg:py-15">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium">Finalizar compra</h1>
            <div className="hidden sm:block">
              <Stepper steps={STEPS} />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
            <div className="w-full lg:flex-1 min-w-0 flex flex-col gap-8">
              <ContactForm />
              <ShippingForm />
              <PaymentForm />
            </div>

            <div className="w-full lg:w-110 lg:shrink-0 flex flex-col gap-8">
              <ItemsCard
                title="Tu pedido"
                items={cart.items.map((item) => ({
                  id: item.id,
                  name: item.name,
                  image: item.image,
                  quantity: item.quantity,
                  price: item.price * item.quantity,
                }))}
              />
              <PaymentSummary subtotal={subtotal} shipping={0} total={subtotal} showAction />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default Checkout
