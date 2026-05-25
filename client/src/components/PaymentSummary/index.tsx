import { Button, Separator } from '@heroui/react'
import SectionCard from '../SectionCard'
import { formatPrice } from '../../utils/format.ts'

interface Props {
  subtotal: number
  shipping: number
  total: number
  showAction?: boolean
  isLoading?: boolean
}

const PaymentSummary = ({ subtotal, shipping, total, showAction, isLoading }: Props) => (
  <SectionCard title="Resumen del pago">
    <div className="flex flex-col gap-3">
      <div className="flex justify-between text-sm">
        <span>Subtotal</span>
        <span className="font-medium">{formatPrice(subtotal)}</span>
      </div>
      <div className="flex justify-between text-sm">
        <span>Envío</span>
        <span className="font-medium text-success">
          {shipping === 0 ? 'Gratis' : formatPrice(shipping)}
        </span>
      </div>
      <Separator />
      <div className="flex items-baseline justify-between">
        <span className="font-bold text-2xl">Total</span>
        <span className="font-bold text-2xl">{formatPrice(total)}</span>
      </div>
      {showAction && (
        <Button
          type="submit"
          variant="primary"
          fullWidth
          className="rounded-full mt-2"
          size="lg"
          isPending={isLoading}
        >
          Pagar ahora
        </Button>
      )}
    </div>
  </SectionCard>
)

export default PaymentSummary
