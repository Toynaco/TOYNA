'use client'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) router.replace('/admin/login')
    })
  }, [])
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-xl font-bold mb-4">لوحة التحكم</h1>
      {children}
    </div>
  )
}
