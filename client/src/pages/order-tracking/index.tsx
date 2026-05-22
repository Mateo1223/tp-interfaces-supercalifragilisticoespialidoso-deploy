import { useParams } from 'react-router'
import PaymentSummary from '../../components/PaymentSummary'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import DeliveryBanner from './components/DeliveryBanner.tsx'
import HelpCard from '../../components/HelpCard'
import ItemsCard from '../../components/ItemsCard'
import OrderNotFound from './components/OrderNotFound.tsx'
import ShippingInfoCard from './components/ShippingInfoCard.tsx'
import TrackingTimeline from './components/TrackingTimeline.tsx'
import { mockOrder } from '../../mocks/order.ts'
import { formatCreatedAt } from '../../utils/format.ts'

const OrderTracking = () => {
  const { orderNumber } = useParams<{ orderNumber: string }>()
  const order = orderNumber === mockOrder.orderNumber ? mockOrder : null

  if (!order) return <OrderNotFound orderNumber={orderNumber ?? ''} />

  const currentStep = order.tracking.steps.find((s) => s.status === 'current')

  return (
    <main className="min-h-screen">
      <Header />
      <div className="bg-background">
        <div className="container max-w-6xl px-4 sm:px-6 lg:px-10 py-10 lg:py-15">
          <div className="flex mb-8">
            <div>
              <h1 className="text-4xl font-bold">Seguimiento de tu pedido</h1>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-sm text-(--accent) font-medium">
                  Pedido #{order.orderNumber}
                </span>
                <div className="size-1 rounded-full bg-muted" />
                <span className="text-sm text-muted">
                  Realizado el {formatCreatedAt(order.createdAt)}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
            <div className="w-full lg:flex-1 flex flex-col gap-8">
              <DeliveryBanner
                label={order.estimatedDelivery.label}
                currentStepDescription={currentStep?.description}
              />
              <TrackingTimeline
                steps={order.tracking.steps}
                trackingCode={order.shipping.trackingCode}
                carrier={order.shipping.carrier}
              />
              <ItemsCard
                title="Productos del pedido"
                items={order.items.map((item) => ({
                  id: item.id,
                  name: item.name,
                  image: item.image,
                  quantity: item.quantity,
                  price: item.subtotal,
                }))}
              />
            </div>

            <div className="w-full lg:w-110 lg:shrink-0 flex flex-col gap-4">
              <ShippingInfoCard shippingAddress={order.shippingAddress} customer={order.customer} />

              <PaymentSummary
                subtotal={order.summary.subtotal}
                shipping={order.summary.shipping}
                total={order.summary.total}
              />

              <HelpCard />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default OrderTracking
