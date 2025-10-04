interface Product {
  id: string
  name: string
  price: number
  imageUrl: string
  slug: string
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded p-4 hover:shadow-lg transition">
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
      <h3 className="mt-2 font-semibold">{product.name}</h3>
      <p className="text-red-500">${product.price}</p>
    </div>
  )
}
