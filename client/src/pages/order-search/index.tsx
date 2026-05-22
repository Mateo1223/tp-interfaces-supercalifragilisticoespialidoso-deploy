import { useState } from 'react'
import { useNavigate } from 'react-router'
import { Button, Card, Input, TextField } from '@heroui/react'
import { ArrowRotateLeft, Trolley } from '@gravity-ui/icons'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

const OrderSearch = () => {
  const navigate = useNavigate()
  const [orderNumber, setOrderNumber] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = orderNumber.trim()
    if (trimmed) navigate(`/order/${trimmed}`)
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="bg-background flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-10 pt-10 pb-15 gap-8">
        <div className="w-full max-w-sm text-center">
          <div className="bg-(--accent)/10 rounded-full size-16 flex items-center justify-center mx-auto mb-6">
            <Trolley width={28} height={28} className="text-(--accent)" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Seguí tu pedido</h1>
          <p className="text-sm text-muted mb-8">
            Ingresá el número de pedido que recibiste en tu email de confirmación.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <TextField name="orderNumber" fullWidth>
              <Input
                placeholder="Ej: HR-2026-008417"
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
                autoFocus
              />
            </TextField>
            <Button variant="primary" fullWidth className="rounded-full" type="submit">
              Buscar pedido
            </Button>
          </form>
        </div>

        <Card className="w-full max-w-sm">
          <Card.Content className="flex items-start gap-4">
            <div className="bg-(--accent)/10 rounded-xl size-10 flex items-center justify-center shrink-0 mt-0.5">
              <ArrowRotateLeft width={18} height={18} className="text-(--accent)" />
            </div>
            <div>
              <Card.Title className="text-sm font-bold mb-1">
                Cambios y devoluciones gratis
              </Card.Title>
              <Card.Description>
                Tenés 30 días desde la entrega para gestionar tu cambio sin costo.
              </Card.Description>
            </div>
          </Card.Content>
        </Card>
      </div>
      <Footer />
    </main>
  )
}

export default OrderSearch
