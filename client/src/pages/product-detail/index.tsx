import { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { Button } from '@heroui/react'
import { ArrowRotateLeft, ShoppingCart } from '@gravity-ui/icons'
import InfoCard from '../../components/InfoCard'
import CollectionBanner from '../../components/CollectionBanner'
import { formatPrice } from '../../utils/format.ts'
import Main from '../../components/Main'
import TwoColumnLayout from '../../components/TwoColumnLayout'
import { useProduct } from '../../hooks/useProduct'
import { usePageTitle } from '../../hooks/usePageTitle'
import { useCart } from '../../hooks/useCart'
import EmptyState from '../../components/EmptyState'
import { ROUTES } from '../../config/routes'

const formatSales = (count: number) =>
  count >= 1000 ? `+${Math.floor(count / 1000)}k` : `+${count}`

const ProductDetail = () => {
  const navigate = useNavigate()
  const { slug } = useParams<{ slug: string }>()
  const { data: product, isLoading } = useProduct(slug ?? '')
  usePageTitle(product?.name)
  const { addItem } = useCart()
  const [selectedImage, setSelectedImage] = useState(0)
  const [added, setAdded] = useState(false)

  if (isLoading) return <Main>Cargando...</Main>
  if (!product)
    return (
      <EmptyState
        icon={<ShoppingCart width={24} height={24} className="text-(--accent)" />}
        title="Producto no encontrado"
        description="El producto que buscás no existe o fue removido."
        action={{ label: 'Ver productos', onClick: () => navigate(ROUTES.LIST) }}
      />
    )

  const handleAddToCart = () => {
    addItem(product.id)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <Main contentClassName="flex flex-col gap-y-12">
      <CollectionBanner
        eyebrow="Cápsula Denim 2.0 — Edición limitada"
        title="Para los que vuelven cuando amanece"
        description="Diez piezas. Una sola noche para conseguirlas."
        image="https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=2000&q=100"
        action={{
          label: 'Conseguí la tuya',
          onClick: () => navigate(`${ROUTES.LIST}?badge=capsula`),
        }}
      />
      <TwoColumnLayout gap="xl">
        <TwoColumnLayout.Main>
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
        </TwoColumnLayout.Main>

        <TwoColumnLayout.Sidebar>
          <div className="flex flex-col gap-7.5 lg:py-10">
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-[1.3]">
                {product.name}
              </h1>

              <div className="flex items-center gap-2">
                <span className="text-amber-400 font-bold text-sm">★★★★★</span>
                <span className="font-bold text-sm">{product.rating.average}</span>
                <span className="size-0.75 rounded-full bg-muted shrink-0" />
                <span className="text-muted text-sm">
                  {formatSales(product.salesCount)} vendidos
                </span>
                <span className="size-0.75 rounded-full bg-muted shrink-0" />
                <span className="text-muted text-sm">{product.totalStock} en stock</span>
              </div>

              <p className="text-base leading-[1.8]">{product.description}</p>
            </div>

            <p className="text-xl lg:text-2xl font-bold">{formatPrice(product.price)}</p>

            <Button
              variant={added ? 'outline' : 'primary'}
              fullWidth
              className="rounded-full"
              onPress={handleAddToCart}
              isDisabled={added}
            >
              <ShoppingCart width={16} height={16} />
              {added ? 'Agregado al carrito' : 'Agregar al carrito'}
            </Button>

            <InfoCard
              icon={<ArrowRotateLeft width={18} height={18} className="text-(--accent)" />}
              title="Cambios gratis 30 días"
              description="Cambios y devoluciones a domicilio sin costo"
              onClick={() => navigate(ROUTES.CONTACT)}
            />
          </div>
        </TwoColumnLayout.Sidebar>
      </TwoColumnLayout>
    </Main>
  )
}

export default ProductDetail
