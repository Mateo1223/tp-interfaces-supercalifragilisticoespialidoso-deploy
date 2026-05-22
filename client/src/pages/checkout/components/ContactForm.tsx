import { Input, Label, TextField } from '@heroui/react'
import SectionCard from '../../../components/SectionCard'

const ContactForm = () => (
  <SectionCard n="1" title="Datos de contacto">
    <div className="grid grid-cols-2 gap-3.5">
      <TextField name="email" fullWidth>
        <Label>Email</Label>
        <Input placeholder="marcos@example.com" defaultValue="marcos@example.com" />
      </TextField>
      <TextField name="phone" fullWidth>
        <Label>Teléfono</Label>
        <Input placeholder="+54 11 5555 0000" defaultValue="+54 11 5555 0000" />
      </TextField>
    </div>
  </SectionCard>
)

export default ContactForm
