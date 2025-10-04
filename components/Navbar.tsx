import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link href="/"><img src="/logo.svg" alt="TOYNA" className="h-8" /></Link>
        <Link href="/admin" className="text-blue-600">لوحة التحكم</Link>
      </div>
    </nav>
  )
}
