import ProductCard from './components/ProductCard'
import { PRODUCTS_PER_PAGE, useProducts } from '../../hooks/useProducts'
import SortDropdown from './components/SortDropdown'
import Paginator from './components/Paginator'

const List = () => {
  const { products, page, setPage, totalPages, totalItems, filters } = useProducts()

  return (
    <main className="bg-background">
      <div className="flex flex-col container px-4 sm:px-6 lg:px-10 py-10 lg:py-15 gap-y-8">
        {!filters.search && (
          <h1 className="text-3xl font-bold capitalize">
            {filters.category || 'Todos los productos'}
          </h1>
        )}
        <div className="flex items-center">
          <p>Ordenar por:</p>
          <SortDropdown />
        </div>

        <div className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <Paginator
          page={page}
          totalPages={totalPages}
          totalItems={totalItems}
          itemsPerPage={PRODUCTS_PER_PAGE}
          onPageChange={setPage}
        />
      </div>
    </main>
  )
}

export default List
