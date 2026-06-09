import { Button, Link } from '@heroui/react'
import CategoryCard from './components/CategoryCard'
import ShowcaseSection from '../../components/ShowcaseSection'
import { categories } from './constants/categories'
import ProductCard from '../list/components/ProductCard.tsx'
import { useProducts } from '../../hooks/useProducts.ts'
import CapsuleBanner from './components/CapsuleBanner.tsx'

const Home = () => {
  const { products } = useProducts({ limit: 4 })
  return (
    <main className="bg-background">
      <div className="container flex flex-col px-4 py-10 sm:px-6 lg:px-10 lg:py-15">
        <ShowcaseSection>
          <ShowcaseSection.Header>
            <ShowcaseSection.Title eyebrow="CATEGORÍAS" title="Comprá por categoría" />

            <ShowcaseSection.Action>
              <Link className="underline underline-offset-2 text-foreground decoration-black">
                Ver todas
                <Link.Icon />
              </Link>
            </ShowcaseSection.Action>
          </ShowcaseSection.Header>

          <ShowcaseSection.Content>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
              {categories.map((category) => (
                <CategoryCard key={category.slug} {...category} />
              ))}
            </div>
          </ShowcaseSection.Content>
        </ShowcaseSection>

        <ShowcaseSection>
          <ShowcaseSection.Header>
            <ShowcaseSection.Title eyebrow="MÁS POPULARES" title="Lo más vendido esta semana" />

            <ShowcaseSection.Action>
              <Link className="underline underline-offset-2 text-foreground decoration-black">
                Ver todo
                <Link.Icon />
              </Link>
            </ShowcaseSection.Action>
          </ShowcaseSection.Header>

          <ShowcaseSection.Content>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </ShowcaseSection.Content>
        </ShowcaseSection>
        <CapsuleBanner>
          <CapsuleBanner.Content>
            <CapsuleBanner.Eyebrow>EDICIÓN LIMITADA</CapsuleBanner.Eyebrow>

            <CapsuleBanner.Title>La cápsula Denim 2.0</CapsuleBanner.Title>

            <CapsuleBanner.Description>
              Diez piezas únicas en denim reciclado. Diseños limpios, calce relajado y detalles
              utilitarios.
            </CapsuleBanner.Description>

            <CapsuleBanner.Action>
              <Button>Descubrir cápsula</Button>
            </CapsuleBanner.Action>
          </CapsuleBanner.Content>

          <CapsuleBanner.Visual>
            <CapsuleBanner.Number>02</CapsuleBanner.Number>
          </CapsuleBanner.Visual>
        </CapsuleBanner>
      </div>
    </main>
  )
}

export default Home
