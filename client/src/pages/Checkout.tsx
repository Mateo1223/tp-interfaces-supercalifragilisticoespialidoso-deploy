import { useState } from 'react'
import { Button, Card } from '@heroui/react'
import { Check, Lock, ShoppingCart, Sparkles } from '@gravity-ui/icons'
import PaymentSummary from '../components/commerce/PaymentSummary'
import ProductItemRow from '../components/commerce/ProductItemRow'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { mockCart } from '../mocks/cart'
import { formatPrice } from '../utils/format'

type PaymentMethod = 'card' | 'mp'

const inputCls =
  'bg-field-background border border-border rounded-xl px-3.5 py-[11px] text-sm text-foreground placeholder:text-muted w-full outline-none focus:border-(--focus) transition-colors'

const SectionBadge = ({ n }: { n: string }) => (
  <div className="size-7 rounded-full bg-foreground text-background flex items-center justify-center text-sm font-bold shrink-0">
    {n}
  </div>
)

const SectionCard = ({
  n,
  title,
  children,
}: {
  n: string
  title: string
  children: React.ReactNode
}) => (
  <Card className="p-7">
    <Card.Content className="gap-5">
      <div className="flex items-center gap-3.5">
        <SectionBadge n={n} />
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      {children}
    </Card.Content>
  </Card>
)

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-sm font-medium">{label}</label>
    {children}
  </div>
)

const Stepper = () => (
  <div className="flex items-center gap-4">
    <div className="flex items-center gap-2.5">
      <div className="size-7 rounded-full bg-success flex items-center justify-center shrink-0">
        <Check width={14} height={14} className="text-white" />
      </div>
      <span className="text-sm font-medium">Carrito</span>
    </div>
    <div className="w-6 h-px bg-border" />
    <div className="flex items-center gap-2.5">
      <div className="size-7 rounded-full bg-(--accent) flex items-center justify-center text-sm font-bold text-white shrink-0">
        2
      </div>
      <span className="text-sm font-bold">Pago</span>
    </div>
    <div className="w-6 h-px bg-border" />
    <div className="flex items-center gap-2.5">
      <div className="size-7 rounded-full bg-surface border border-border flex items-center justify-center text-sm font-bold text-muted shrink-0">
        3
      </div>
      <span className="text-sm font-medium text-muted">Confirmación</span>
    </div>
  </div>
)

interface PaymentMethodOptionProps {
  id: PaymentMethod
  selected: PaymentMethod
  onSelect: (id: PaymentMethod) => void
  label: string
  description: string
  badge: string
  badgeAccent?: boolean
}

const PaymentMethodOption = ({
  id,
  selected,
  onSelect,
  label,
  description,
  badge,
  badgeAccent = false,
}: PaymentMethodOptionProps) => {
  const isSelected = selected === id
  return (
    <button
      onClick={() => onSelect(id)}
      className={`flex items-center gap-3.5 p-[18px] rounded-[14px] border-2 w-full text-left transition-colors ${
        isSelected ? 'border-(--accent) bg-(--accent)/5' : 'border-border bg-surface'
      }`}
    >
      <div
        className={`size-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
          isSelected ? 'border-(--accent)' : 'border-muted'
        }`}
      >
        {isSelected && <div className="size-2.5 rounded-full bg-(--accent)" />}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium">{label}</p>
        <p className="text-xs text-muted">{description}</p>
      </div>
      <div
        className={`text-xs font-bold px-2 py-1 rounded-lg shrink-0 ${
          badgeAccent ? 'bg-(--accent)/10 text-(--accent)' : 'bg-surface-secondary text-muted'
        }`}
      >
        {badge}
      </div>
    </button>
  )
}

const EmptyCart = () => (
  <main className="min-h-screen">
    <Header />
    <div className="bg-background">
      <div className="container max-w-6xl px-4 sm:px-6 lg:px-10 py-15 flex flex-col items-center justify-center min-h-[55vh] text-center">
        <div className="bg-surface-secondary rounded-full size-16 flex items-center justify-center mb-5">
          <ShoppingCart width={28} height={28} className="text-muted" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Tu carrito está vacío</h2>
        <p className="text-sm text-muted mb-6 max-w-xs">
          Explorá nuestra tienda y encontrá algo que te guste.
        </p>
        <Button variant="primary" className="rounded-full">
          Ver productos
        </Button>
      </div>
    </div>
    <Footer />
  </main>
)

const Checkout = () => {
  const cart = mockCart
  const [payment, setPayment] = useState<PaymentMethod>('card')

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
              <Stepper />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
            {/* Left col */}
            <div className="w-full lg:flex-1 min-w-0 flex flex-col gap-4">
              {/* Datos de contacto */}
              <SectionCard n="1" title="Datos de contacto">
                <div className="grid grid-cols-2 gap-3.5">
                  <Field label="Email">
                    <input
                      className={inputCls}
                      defaultValue="marcos@example.com"
                      placeholder="marcos@example.com"
                    />
                  </Field>
                  <Field label="Teléfono">
                    <input
                      className={inputCls}
                      defaultValue="+54 11 5555 0000"
                      placeholder="+54 11 5555 0000"
                    />
                  </Field>
                </div>
              </SectionCard>

              {/* Dirección de envío */}
              <SectionCard n="2" title="Dirección de envío">
                <div className="grid grid-cols-2 gap-3.5">
                  <Field label="Nombre">
                    <input className={inputCls} defaultValue="Marcos" placeholder="Marcos" />
                  </Field>
                  <Field label="Apellido">
                    <input className={inputCls} defaultValue="García" placeholder="García" />
                  </Field>
                </div>
                <Field label="Dirección">
                  <input
                    className={inputCls}
                    defaultValue="Av. Corrientes 1234, 5° B"
                    placeholder="Dirección"
                  />
                </Field>
                <div className="grid grid-cols-3 gap-3.5">
                  <Field label="Ciudad">
                    <input className={inputCls} defaultValue="Caseros" placeholder="Ciudad" />
                  </Field>
                  <Field label="Provincia">
                    <input
                      className={inputCls}
                      defaultValue="Buenos Aires"
                      placeholder="Provincia"
                    />
                  </Field>
                  <Field label="Código postal">
                    <input className={inputCls} defaultValue="1678" placeholder="Cód. postal" />
                  </Field>
                </div>
              </SectionCard>

              {/* Método de pago */}
              <SectionCard n="3" title="Método de pago">
                <PaymentMethodOption
                  id="card"
                  selected={payment}
                  onSelect={setPayment}
                  label="Tarjeta de crédito o débito"
                  description="Visa, Mastercard, Amex"
                  badge="VISA"
                  badgeAccent
                />

                {payment === 'card' && (
                  <div className="flex flex-col gap-3.5">
                    <Field label="Número de tarjeta">
                      <input className={inputCls} placeholder="1234 5678 9012 3456" />
                    </Field>
                    <div className="grid grid-cols-2 gap-3.5">
                      <Field label="Vencimiento">
                        <input className={inputCls} placeholder="MM / AA" />
                      </Field>
                      <Field label="CVV">
                        <input className={inputCls} placeholder="123" />
                      </Field>
                    </div>
                    <Field label="Nombre del titular">
                      <input className={inputCls} placeholder="Como figura en la tarjeta" />
                    </Field>
                    <div className="flex items-center gap-2.5 bg-(--accent)/5 text-(--accent) px-3.5 py-3 rounded-[10px]">
                      <Sparkles width={14} height={14} className="shrink-0" />
                      <span className="text-sm font-medium">
                        Hasta 6 cuotas sin interés con bancos seleccionados
                      </span>
                    </div>
                  </div>
                )}

                <PaymentMethodOption
                  id="mp"
                  selected={payment}
                  onSelect={setPayment}
                  label="Mercado Pago"
                  description="Pagá con tu cuenta o saldo"
                  badge="MP"
                />
              </SectionCard>
            </div>

            {/* Right col — order summary */}
            <div className="w-full lg:w-[440px] lg:shrink-0">
              <Card className="p-7">
                <Card.Content className="gap-4.5">
                  <h2 className="text-xl font-bold">Tu pedido</h2>

                  {cart.items.map((item) => (
                    <ProductItemRow
                      key={item.id}
                      image={item.image}
                      name={item.name}
                      subtitle={`Cant. ${item.quantity}`}
                      price={item.price * item.quantity}
                    />
                  ))}

                  <PaymentSummary
                    subtotal={subtotal}
                    shipping={0}
                    total={subtotal}
                    totalSize="lg"
                  />

                  <Button variant="primary" fullWidth className="rounded-full">
                    <Lock width={14} height={14} />
                    Pagar {formatPrice(subtotal)}
                  </Button>
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

export default Checkout
