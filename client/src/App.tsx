import { Button, Card, Chip, Label, TextField, Input } from '@heroui/react'

const App = () => (
  <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-8 p-8">
    <h1 className="text-4xl font-bold text-gray-900">HeroUI + Tailwind</h1>

    <div className="flex gap-4 flex-wrap justify-center">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="danger">Danger</Button>
    </div>

    <div className="flex gap-3 flex-wrap justify-center">
      <Chip color="default">React 19</Chip>
      <Chip color="accent">Vite 5</Chip>
      <Chip color="success">HeroUI 3</Chip>
      <Chip color="warning">Tailwind 4</Chip>
      <Chip color="danger">TypeScript</Chip>
    </div>

    <Card className="w-full max-w-sm">
      <Card.Header>
        <Card.Title>Login</Card.Title>
        <Card.Description>Ingresá tus credenciales</Card.Description>
      </Card.Header>
      <Card.Content className="flex flex-col gap-4">
        <TextField>
          <Label>Email</Label>
          <Input placeholder="tu@email.com" type="email" />
        </TextField>
        <TextField>
          <Label>Password</Label>
          <Input placeholder="••••••••" type="password" />
        </TextField>
        <Button variant="primary" className="w-full">
          Ingresar
        </Button>
      </Card.Content>
    </Card>
  </div>
)

export default App
