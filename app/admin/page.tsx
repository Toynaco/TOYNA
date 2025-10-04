import { prisma } from '@/lib/prisma'
import Link from 'next/link'

export default async function AdminPage() {
  const products = await prisma.product.findMany({ orderBy: { createdAt: 'desc' } })
  return (
    <div>
      <Link href="/admin/add" className="bg-blue-600 text-white px-4 py-2 rounded">إضافة منتج</Link>
      <ul className="mt-4 space-y-2">
        {products.map(p => (
          <li key={p.id} className="flex justify-between items-center border p-2">
            <span>{p.name}</span>
            <div className="space-x-2">
              <Link href={`/admin/edit/${p.id}`} className="text-green-600">تعديل</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
