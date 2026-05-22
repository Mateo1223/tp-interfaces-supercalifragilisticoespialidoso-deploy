import type { Product } from '../types/product'

export const mockProduct: Product = {
  id: 'wild-west-vest-black-denim',
  name: 'Wild West Vest Black Denim',
  slug: 'wild-west-vest-black-denim',
  category: 'camperas',
  price: 329000,
  badge: null,
  description:
    'Chaleco acolchado confeccionado en denim negro con acabado desgastado, ideal para sumar textura y personalidad a cualquier look urbano. Su diseño combina un calce cómodo con un interior abrigado, perfecto para los días frescos. Cuenta con cierre frontal y botones metálicos, además de bolsillos laterales funcionales. Una prenda versátil que se adapta tanto a outfits casuales como a combinaciones más modernas y relajadas.',
  images: [
    'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=3000&q=100',
    'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=3000&q=100',
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=3000&q=100',
    'https://images.unsplash.com/photo-1529139574466-a303027bc09b?w=3000&q=100',
  ],
  totalStock: 8,
  rating: { average: 4.8, count: 247 },
  salesCount: 9200,
}
