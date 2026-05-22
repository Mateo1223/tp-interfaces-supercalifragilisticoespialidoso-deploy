import { useState } from 'react'
import { Button } from '@heroui/react'
import { ArrowRotateLeft, ShoppingCart } from '@gravity-ui/icons'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { mockProduct } from '../mocks/product'
import type { Product } from '../types/product'
import { formatPrice } from '../utils/format'

const formatSales = (count: number) =>
  count >= 1000 ? `+${Math.floor(count / 1000)}k` : `+${count}`

const ProductDetail = () => {
  const product: Product = mockProduct
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <main className="min-h-screen">
      <Header />
      <section className="container max-w-5xl px-4 sm:px-6 lg:px-10 pt-8 pb-10 lg:pt-10 lg:pb-15 grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6 lg:gap-15 items-start">
        <div className="flex flex-col gap-3 lg:gap-7.5">
          <div className="rounded-2xl overflow-hidden aspect-17/18 w-full">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover dark:brightness-90 transition-[filter]"
            />
          </div>
          <div className="flex gap-3 lg:gap-7.5">
            {product.images.slice(0, 3).map((img, i) => (
              <button
                key={img}
                onClick={() => setSelectedImage(i)}
                className={`flex-1 aspect-square rounded-xl overflow-hidden border-2 transition-colors ${
                  selectedImage === i ? 'border-(--accent)' : 'border-transparent'
                }`}
              >
                <img
                  src={img}
                  alt={`${product.name} ${i + 1}`}
                  className="w-full h-full object-cover dark:brightness-90 transition-[filter]"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-7.5 lg:py-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-[1.3]">
              {product.name}
            </h1>

            <div className="flex items-center gap-2">
              <span className="text-amber-400 font-bold text-sm">★★★★★</span>
              <span className="font-bold text-sm">{product.rating.average}</span>
              <span className="size-0.75 rounded-full bg-muted shrink-0" />
              <span className="text-muted text-sm">{formatSales(product.salesCount)} vendidos</span>
              <span className="size-0.75 rounded-full bg-muted shrink-0" />
              <span className="text-muted text-sm">{product.totalStock} en stock</span>
            </div>

            <p className="text-base leading-[1.8]">{product.description}</p>
          </div>

          <p className="text-xl lg:text-2xl font-bold">{formatPrice(product.price)}</p>

          <div className="flex flex-col gap-4">
            <Button variant="primary" fullWidth className="rounded-full">
              <ShoppingCart width={16} height={16} />
              Agregar al carrito
            </Button>
            <Button variant="outline" fullWidth className="rounded-full">
              Comprar ahora
            </Button>
          </div>

          <div className="flex items-center gap-3.5 bg-surface-secondary rounded-2xl p-5">
            <div className="bg-white dark:bg-white/20 rounded-lg flex items-center justify-center shrink-0 size-8">
              <ArrowRotateLeft width={14} height={14} className="text-foreground" />
            </div>
            <div>
              <p className="text-sm font-bold">Cambios gratis 30 días</p>
              <p className="text-xs text-muted">Cambios y devoluciones a domicilio sin costo</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default ProductDetail
