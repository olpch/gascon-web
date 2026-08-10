"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAdminContext } from "../providers/admin-context";

export default function AdminGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const { currentUser, isLoading } = useAdminContext();

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (isLoading) return;

    // Login no necesita autenticación
    if (pathname === "/login") {
      return;
    }

    if (!currentUser) {
      router.replace("/login");
    }
  }, [currentUser, isLoading, pathname, router]);

  if (isLoading) {
    return null;
  }

  if (!currentUser && pathname !== "/login") {
    return null;
  }

  return <>{children}</>;
}