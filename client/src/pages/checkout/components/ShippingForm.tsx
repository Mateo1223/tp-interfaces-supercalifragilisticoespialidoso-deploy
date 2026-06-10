import { FieldError, Input, Label, TextField } from '@heroui/react'
import SectionCard from '../../../components/SectionCard'

const ShippingForm = () => (
  <SectionCard n="2" title="Dirección de envío">
    <div className="grid grid-cols-2 gap-3.5">
      <TextField name="firstName" fullWidth isRequired>
        <Label>Nombre</Label>
        <Input placeholder="Nombre" />
        <FieldError />
      </TextField>
      <TextField name="lastName" fullWidth isRequired>
        <Label>Apellido</Label>
        <Input placeholder="Apellido" />
        <FieldError />
      </TextField>
    </div>
    <TextField name="address" fullWidth isRequired>
      <Label>Dirección</Label>
      <Input placeholder="Av. Ejemplo 1234, Piso 2" />
      <FieldError />
    </TextField>
    <div className="grid grid-cols-3 gap-3.5">
      <TextField name="city" fullWidth isRequired>
        <Label>Ciudad</Label>
        <Input placeholder="Ciudad" />
        <FieldError />
      </TextField>
      <TextField name="province" fullWidth isRequired>
        <Label>Provincia</Label>
        <Input placeholder="Provincia" />
        <FieldError />
      </TextField>
      <TextField
        name="postalCode"
        fullWidth
        isRequired
        validate={(v) => (v && !/^\d{4}$/.test(v) ? 'Código postal inválido' : null)}
      >
        <Label>Código postal</Label>
        <Input placeholder="1234" />
        <FieldError />
      </TextField>
    </div>
  </SectionCard>
)

export default ShippingForm
