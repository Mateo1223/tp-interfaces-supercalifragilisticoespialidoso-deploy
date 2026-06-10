import useSWR from 'swr'
import { fetcher } from '../lib/fetcher'
import { API } from '../config/api'
import type { Product } from '../types/product'

export const useProduct = (slug: string) => {
  return useSWR<Product>(slug ? API.PRODUCT(slug) : null, fetcher)
}
