import useSWR from 'swr'
import { API } from '../config/api'
import { fetcher } from '../lib/fetcher'
import type { Product } from '../types/product'
import { useSearchParams } from 'react-router'

export const PRODUCTS_PER_PAGE = 3

type ProductsResponse = {
  data: Product[]
  totalItems: number
}

export const useProducts = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const category = searchParams.get('category')

  const search = searchParams.get('search')

  const sort = searchParams.get('sort')

  const page = Number(searchParams.get('page') ?? '1')

  const params = new URLSearchParams()

  if (category) {
    params.set('category', category)
  }

  if (search) {
    params.set('name_like', search)
  }

  if (sort === 'price-asc') {
    params.set('_sort', 'price')
    params.set('_order', 'asc')
  }

  if (sort === 'price-desc') {
    params.set('_sort', 'price')
    params.set('_order', 'desc')
  }

  params.set('_page', String(page))

  params.set('_limit', String(PRODUCTS_PER_PAGE))

  const endpoint = `${API.PRODUCTS}?${params}`

  const { data, error, isLoading } = useSWR<ProductsResponse>(endpoint, fetcher)

  const setPage = (page: number) => {
    const params = new URLSearchParams(searchParams)

    params.set('page', String(page))

    setSearchParams(params)
  }

  const totalItems = data?.totalItems ?? 0

  return {
    products: data?.data ?? [],
    totalItems,
    totalPages: Math.ceil(totalItems / PRODUCTS_PER_PAGE),
    page,
    setPage,
    isLoading,
    error,
    filters: {
      category,
      search,
      sort,
    },
  }
}
