import { formatPrice } from '../../utils/format'

interface PaymentSummaryProps {
  subtotal: number
  shipping: number
  total: number
  totalSize?: 'md' | 'lg'
}

const PaymentSummary = ({ subtotal, shipping, total, totalSize = 'md' }: PaymentSummaryProps) => (
  <>
    <div className="flex flex-col gap-2">
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
    </div>
    <div className="h-px bg-separator" />
    <div className="flex items-baseline justify-between">
      <span className={`font-bold ${totalSize === 'lg' ? 'text-2xl' : 'text-base'}`}>Total</span>
      <span className="font-bold text-2xl">{formatPrice(total)}</span>
    </div>
  </>
)

export default PaymentSummary
