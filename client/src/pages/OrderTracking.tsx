import { useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import { Button, Card } from '@heroui/react'
import { Check, Copy, ArrowRight, Comment, Trolley, CircleXmark } from '@gravity-ui/icons'
import PaymentSummary from '../components/commerce/PaymentSummary'
import ProductItemRow from '../components/commerce/ProductItemRow'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { mockOrder } from '../mocks/order'
import type { Order, TrackingStep } from '../types/order'
import { formatCreatedAt, formatDate } from '../utils/format'

const StepCircle = ({ step }: { step: TrackingStep }) => {
  if (step.status === 'completed') {
    return (
      <div className="size-7 rounded-full bg-success flex items-center justify-center shrink-0">
        <Check width={13} height={13} className="text-white" />
      </div>
    )
  }
  if (step.status === 'current') {
    return (
      <div className="size-7 rounded-full bg-(--accent) flex items-center justify-center shrink-0">
        <div className="size-2 rounded-full bg-white" />
      </div>
    )
  }
  return <div className="size-7 rounded-full bg-surface border-2 border-border shrink-0" />
}

const StepContent = ({ step, isLast }: { step: TrackingStep; isLast: boolean }) => (
  <div className={`flex-1 ${isLast ? '' : 'pb-6'}`}>
    {step.status === 'pending' ? (
      <>
        <p className="text-sm text-muted">{step.title}</p>
        <p className="text-sm text-muted/60 mt-0.5">{step.description}</p>
      </>
    ) : (
      <>
        <div className="flex justify-between items-baseline">
          <span
            className={`text-sm text-foreground ${step.status === 'current' ? 'font-bold' : 'font-medium'}`}
          >
            {step.title}
          </span>
          {step.date && <span className="text-xs text-muted">{formatDate(step.date)}</span>}
        </div>
        <p className="text-sm text-muted mt-0.5">{step.description}</p>
      </>
    )}
  </div>
)

const ShippingInfoCard = ({ order }: { order: Order }) => (
  <Card className="p-6">
    <Card.Content className="gap-0">
      <h2 className="text-base font-bold mb-3">Información de envío</h2>
      <p className="text-xs font-medium text-muted uppercase tracking-wider mb-1.5">Dirección</p>
      <p className="text-sm text-foreground">
        {order.shippingAddress.firstName} {order.shippingAddress.lastName}
      </p>
      <p className="text-sm text-foreground">{order.shippingAddress.address}</p>
      <p className="text-sm text-foreground">
        {order.shippingAddress.city}, {order.shippingAddress.province}{' '}
        {order.shippingAddress.postalCode}
      </p>
      <div className="h-px bg-separator my-4" />
      <p className="text-xs font-medium text-muted uppercase tracking-wider mb-1.5">Contacto</p>
      <p className="text-sm text-foreground">{order.customer.email}</p>
      <p className="text-sm text-foreground">{order.customer.phone}</p>
    </Card.Content>
  </Card>
)

const OrderNotFound = ({ orderNumber }: { orderNumber: string }) => {
  const navigate = useNavigate()
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="bg-background flex-1 flex items-center justify-center px-4 py-10 text-center">
        <div className="bg-danger/10 rounded-full size-16 flex items-center justify-center mb-5">
          <CircleXmark width={28} height={28} className="text-danger" />
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

const OrderTracking = () => {
  const { orderNumber } = useParams<{ orderNumber: string }>()
  const [copied, setCopied] = useState(false)

  const order = orderNumber === mockOrder.orderNumber ? mockOrder : null

  if (!order) return <OrderNotFound orderNumber={orderNumber ?? ''} />

  const currentStep = order.tracking.steps.find((s) => s.status === 'current')
  const lastStepIndex = order.tracking.steps.length - 1

  const handleCopy = () => {
    void navigator.clipboard.writeText(order.shipping.trackingCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main className="min-h-screen">
      <Header />
      <div className="bg-background">
        <div className="container max-w-6xl px-4 sm:px-6 lg:px-10 py-10 lg:py-15">
          <div className="flex items-end justify-between mb-8">
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
            <div className="flex items-center gap-2 bg-success/25 text-success pl-3.5 pr-4 py-2 rounded-full text-sm font-bold">
              <div className="size-2 rounded-full bg-success" />
              {order.shipping.currentStatus}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
            <div className="w-full lg:flex-1 flex flex-col gap-8">
              {/* Hero delivery banner */}
              <div className="bg-zinc-900 dark:bg-zinc-800 rounded-2xl p-7 flex items-center gap-6">
                <div className="bg-white/10 rounded-[36px] size-18 flex items-center justify-center shrink-0">
                  <Trolley width={32} height={32} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-lg font-bold text-white leading-tight">
                    {order.estimatedDelivery.label}
                  </p>
                  <p className="text-sm text-white/70 mt-1.5">{currentStep?.description}</p>
                </div>
              </div>

              {/* Timeline card */}
              <Card className="p-7">
                <h2 className="text-xl font-bold mb-5">Estado del envío</h2>
                {order.tracking.steps.map((step, index) => (
                  <div key={step.id} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <StepCircle step={step} />
                      {index < lastStepIndex && (
                        <div
                          className={`w-0.5 h-13 mx-auto ${step.status === 'completed' ? 'bg-success' : 'bg-border'}`}
                        />
                      )}
                    </div>
                    <StepContent step={step} isLast={index === lastStepIndex} />
                  </div>
                ))}

                {/* Tracking code bar */}
                <div className="bg-(--accent)/5 rounded-xl px-5 py-3.5 flex items-center justify-between mt-7">
                  <div>
                    <p className="text-xs text-(--accent)/60 font-medium">Código de seguimiento</p>
                    <p className="text-sm font-bold text-(--accent)">
                      {order.shipping.trackingCode} · {order.shipping.carrier}
                    </p>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="bg-surface border border-(--accent)/20 text-(--accent) flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-medium"
                  >
                    <Copy width={13} height={13} />
                    {copied ? 'Copiado' : 'Copiar'}
                  </button>
                </div>
              </Card>

              {/* Products card */}
              <Card className="p-7">
                <h2 className="text-xl font-bold mb-2">Productos del pedido</h2>
                <div className="flex flex-col gap-4 mt-4">
                  {order.items.map((item) => (
                    <ProductItemRow
                      key={item.id}
                      image={item.image}
                      name={item.name}
                      subtitle={`${item.category} · Cant. ${item.quantity}`}
                      price={item.subtotal}
                      size="lg"
                    />
                  ))}
                </div>
              </Card>
            </div>

            {/* Right column */}
            <div className="w-full lg:w-110 lg:shrink-0 flex flex-col gap-4">
              <ShippingInfoCard order={order} />

              <Card className="p-6">
                <Card.Content className="gap-3">
                  <h2 className="text-base font-bold">Resumen del pago</h2>
                  <PaymentSummary
                    subtotal={order.summary.subtotal}
                    shipping={order.summary.shipping}
                    total={order.summary.total}
                  />
                </Card.Content>
              </Card>

              <Card className="px-5 py-4.5">
                <Card.Content className="flex-row items-center gap-3.5">
                  <div className="bg-(--accent)/10 rounded-[20px] size-10 flex items-center justify-center shrink-0">
                    <Comment width={18} height={18} className="text-(--accent)" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold">Necesito ayuda</p>
                    <p className="text-xs text-muted">Hablá con nuestro equipo</p>
                  </div>
                  <ArrowRight width={16} height={16} className="text-muted shrink-0" />
                </Card.Content>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default OrderTracking
