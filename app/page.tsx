```tsx
// app/page.tsx

export const dynamic = 'force-dynamic';

import { prisma } from '@/lib/prisma';

export default async function HomePage() {
  const products = await prisma.product.findMany();

  return (
    <main>
      {products.map((p) => (
        <div key={p.id}>{p.name}</div>
      ))}
    </main>
  );
}
