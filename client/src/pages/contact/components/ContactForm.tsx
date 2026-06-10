import { Button, FieldError, Input, Label, TextArea, TextField } from '@heroui/react'
import SectionCard from '../../../components/SectionCard'

const ContactForm = () => (
  <SectionCard title="Escribinos un mensaje">
    <div className="flex gap-6 flex-col">
      <p className="">Te respondemos en menos de 24hs hábiles</p>
      <TextField name="firstName" fullWidth isRequired>
        <Label>Nombre</Label>
        <Input placeholder="Nombre" />
        <FieldError />
      </TextField>
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

      <div className="flex flex-col gap-1 w-full">
        <Label htmlFor="textarea-rows-3" isRequired>
          Mensaje
        </Label>
        <TextArea
          className="h-32"
          placeholder="Contanos en que te podemos ayudar..."
          fullWidth
        ></TextArea>
      </div>
      <Button variant="primary" fullWidth className="rounded-full" type="submit">
        Enviar Mensaje
      </Button>
    </div>
  </SectionCard>
)

export default ContactForm
