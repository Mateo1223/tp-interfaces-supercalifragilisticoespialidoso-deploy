import { Input, Label, TextField } from '@heroui/react'
import SectionCard from '../../../components/SectionCard'

const PaymentForm = () => {
  return (
    <SectionCard n="3" title="Método de pago">
      <div className="flex flex-col gap-3.5">
        <TextField name="cardNumber" fullWidth>
          <Label>Número de tarjeta</Label>
          <Input placeholder="1234 5678 9012 3456" />
        </TextField>
        <div className="grid grid-cols-2 gap-3.5">
          <TextField name="expiry" fullWidth>
            <Label>Vencimiento</Label>
            <Input placeholder="MM / AA" />
          </TextField>
          <TextField name="cvv" fullWidth>
            <Label>CVV</Label>
            <Input placeholder="123" />
          </TextField>
        </div>
        <TextField name="cardHolder" fullWidth>
          <Label>Nombre del titular</Label>
          <Input placeholder="Como figura en la tarjeta" />
        </TextField>
      </div>
    </SectionCard>
  )
}

export default PaymentForm
