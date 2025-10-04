// app/admin/layout.tsx
"use client";

import { useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        router.push("/login");
      } else {
        setSession(session);
      }
    });
  }, [router]);

  if (!session) {
    return <div>Loading admin...</div>;
  }

  return <div className="admin-container">{children}</div>;
}
