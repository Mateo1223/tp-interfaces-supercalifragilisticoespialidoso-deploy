import { Input, Label, TextField } from '@heroui/react'
import SectionCard from '../../../components/SectionCard'

const ShippingForm = () => (
  <SectionCard n="2" title="Dirección de envío">
    <div className="grid grid-cols-2 gap-3.5">
      <TextField name="firstName" fullWidth>
        <Label>Nombre</Label>
        <Input placeholder="Marcos" defaultValue="Marcos" />
      </TextField>
      <TextField name="lastName" fullWidth>
        <Label>Apellido</Label>
        <Input placeholder="García" defaultValue="García" />
      </TextField>
    </div>
    <TextField name="address" fullWidth>
      <Label>Dirección</Label>
      <Input placeholder="Dirección" defaultValue="Av. Corrientes 1234, 5° B" />
    </TextField>
    <div className="grid grid-cols-3 gap-3.5">
      <TextField name="city" fullWidth>
        <Label>Ciudad</Label>
        <Input placeholder="Ciudad" defaultValue="Caseros" />
      </TextField>
      <TextField name="province" fullWidth>
        <Label>Provincia</Label>
        <Input placeholder="Provincia" defaultValue="Buenos Aires" />
      </TextField>
      <TextField name="postalCode" fullWidth>
        <Label>Código postal</Label>
        <Input placeholder="Cód. postal" defaultValue="1678" />
      </TextField>
    </div>
  </SectionCard>
)

export default ShippingForm
