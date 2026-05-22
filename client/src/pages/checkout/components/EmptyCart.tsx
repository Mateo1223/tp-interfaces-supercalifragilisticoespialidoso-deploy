import { Button } from '@heroui/react'
import { ShoppingCart } from '@gravity-ui/icons'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

const EmptyCart = () => (
  <main className="min-h-screen">
    <Header />
    <div className="bg-background">
      <div className="container max-w-6xl px-4 sm:px-6 lg:px-10 py-15 flex flex-col items-center justify-center min-h-[55vh] text-center">
        <div className="bg-surface-secondary rounded-full size-16 flex items-center justify-center mb-5">
          <ShoppingCart width={28} height={28} className="text-muted" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Tu carrito está vacío</h2>
        <p className="text-sm text-muted mb-6 max-w-xs">
          Explorá nuestra tienda y encontrá algo que te guste.
        </p>
        <Button variant="primary" className="rounded-full">
          Ver productos
        </Button>
      </div>
    </div>
    <Footer />
  </main>
)

export default EmptyCart
