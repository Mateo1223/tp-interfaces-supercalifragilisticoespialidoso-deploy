import useSWR from 'swr'
import axios from 'axios'
import { Button, Card, Chip } from '@heroui/react'

interface User {
  id: number
  name: string
  email: string
}

const fetcher = (url: string) => axios.get<User[]>(url).then((res) => res.data)

const App = () => {
  const { data: users, error, isLoading, mutate } = useSWR('http://localhost:3008/users', fetcher)

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-8 p-8">
      <h1 className="text-4xl font-bold text-gray-900">Usuarios desde API</h1>

      <Button variant="outline" onClick={() => mutate()}>
        Recargar
      </Button>

      {isLoading && <p className="text-gray-500">Cargando...</p>}

      {error && <Chip color="danger">{error.message}</Chip>}

      {users && (
        <div className="flex flex-col gap-3 w-full max-w-md">
          {users.map((user) => (
            <Card key={user.id}>
              <Card.Content className="flex flex-col gap-1">
                <p className="font-semibold text-gray-900">{user.name}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </Card.Content>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

export default App
