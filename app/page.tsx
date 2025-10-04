import { prisma } from '@/lib/prisma'
import ProductCard from '@/components/ProductCard'

export default async function Home() {
  const products = await prisma.product.findMany({ orderBy: { createdAt: 'desc' } })
  return (
    <main className="container mx-auto py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(p => <ProductCard key={p.id} product={p} />)}
    </main>
  )
}
