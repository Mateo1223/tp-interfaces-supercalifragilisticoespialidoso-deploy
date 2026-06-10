import { FieldError, Input, Label, TextField } from '@heroui/react'
import SectionCard from '../../../components/SectionCard'

const ContactForm = () => (
  <SectionCard n="1" title="Datos de contacto">
    <div className="grid grid-cols-2 gap-3.5">
      <TextField
        name="email"
        type="email"
        fullWidth
        isRequired
        validate={(v) =>
          v && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? 'Ingresá un email válido' : null
        }
      >
        <Label>Email</Label>
        <Input placeholder="tu@email.com" />
        <FieldError />
      </TextField>
      <TextField name="phone" fullWidth isRequired>
        <Label>Teléfono</Label>
        <Input placeholder="+54 11 0000 0000" />
        <FieldError />
      </TextField>
    </div>
  </SectionCard>
)

export default ContactForm
