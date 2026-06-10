import type { Product } from '../../types/product'
import { Chip, Link } from '@heroui/react'
import { ROUTES } from '../../config/routes'

const ProductCard = ({ product }: { product: Product }) => {
  const formattedPrice = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
    .format(product.price)
    .replace(/\s/g, '')

  return (
    <Link href={ROUTES.PRODUCT(product.slug)} className="no-underline">
      <div className="flex flex-col gap-2">
        <div className="relative">
          {product.badge && (
            <Chip
              color="accent"
              variant="primary"
              className="uppercase font-bold absolute top-3 left-3"
            >
              {product.badge}
            </Chip>
          )}
          <img
            alt={product.name}
            className="h-full w-full object-cover rounded-2xl aspect-3/4 dark:brightness-90"
            loading="lazy"
            src={product.images[0]}
          />
        </div>
        <div className="py-3 gap-1">
          <p className="text-muted uppercase font-bold">{product.category}</p>
          <p className="font-medium">{product.name}</p>
          <p className="font-bold">{formattedPrice}</p>
        </div>
      </div>
    </Link>
  )
}
export default ProductCard
