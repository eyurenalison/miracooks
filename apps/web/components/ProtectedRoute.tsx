import { useRouter } from "next/router";
import { useAuth } from "../hooks/useAuth";
import React, { JSX, useEffect, useState } from "react";

export default function ProtectedRoute({
  children,
}: {
  children: JSX.Element;
}) {
  const { authenticated } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authenticated) {
      router.replace("/login");
    } else {
      setLoading(false);
    }
  }, [authenticated, router]);

  if (!authenticated || loading) {
    return null; // Or a loading spinner
  }

  return children;
}
