export const dynamic = 'force-dynamic';

import { prisma } from '@/lib/prisma';

export default async function HomePage() {
  const products = await prisma.product.findMany();

  return (
    <main>
      {products.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </main>
  );
}
