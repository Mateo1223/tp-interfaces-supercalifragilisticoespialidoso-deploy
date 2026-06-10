import { Navigate } from 'react-router'
import { Form } from '@heroui/react'
import ContactForm from './components/ContactForm.tsx'
import ItemsCard from '../../components/ItemsCard'
import PaymentSummary from '../../components/PaymentSummary'
import PaymentForm from './components/PaymentForm'
import ShippingForm from './components/ShippingForm.tsx'
import Stepper, { type Step } from '../../components/Stepper'
import Main from '../../components/Main'
import TwoColumnLayout from '../../components/TwoColumnLayout'
import { type CheckoutFormData, usePlaceOrder } from '../../hooks/usePlaceOrder'
import { usePageTitle } from '../../hooks/usePageTitle'
import { ROUTES } from '../../config/routes'

const STEPS: Step[] = [
  { label: 'Carrito', status: 'completed' },
  { label: 'Pago', status: 'current' },
  { label: 'Confirmación', status: 'pending' },
]

const Checkout = () => {
  usePageTitle('Finalizar compra')
  const { placeOrder, isLoading, items, subtotal, isEmpty, submitted } = usePlaceOrder()

  if (isEmpty && !submitted.current) return <Navigate to={ROUTES.LIST} replace />

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const get = (k: string) => (fd.get(k) as string) ?? ''
    placeOrder({
      email: get('email'),
      phone: get('phone'),
      firstName: get('firstName'),
      lastName: get('lastName'),
      address: get('address'),
      city: get('city'),
      province: get('province'),
      postalCode: get('postalCode'),
      cardNumber: get('cardNumber'),
      expiry: get('expiry'),
      cvv: get('cvv'),
      cardHolder: get('cardHolder'),
    } satisfies CheckoutFormData)
  }

  return (
    <Main>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium">Finalizar compra</h1>
        <div className="hidden sm:block">
          <Stepper steps={STEPS} />
        </div>
      </div>

      <Form onSubmit={handleSubmit} validationBehavior="aria">
        <TwoColumnLayout>
          <TwoColumnLayout.Main>
            <ContactForm />
            <ShippingForm />
            <PaymentForm />
          </TwoColumnLayout.Main>

          <TwoColumnLayout.Sidebar>
            <ItemsCard title="Tu pedido" items={items} />
            <PaymentSummary
              subtotal={subtotal}
              shipping={0}
              total={subtotal}
              showAction
              isLoading={isLoading}
            />
          </TwoColumnLayout.Sidebar>
        </TwoColumnLayout>
      </Form>
    </Main>
  )
}

export default Checkout
