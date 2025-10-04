// app/page.tsx

export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";

export default async function HomePage() {
  const products = await prisma.product.findMany();

  return (
    <main>
      <h1>Our Toys</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </main>
  );
}
