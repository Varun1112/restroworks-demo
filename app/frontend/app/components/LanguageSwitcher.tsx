"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const currentLocale = segments[0] || "en";
  const restPath = segments.slice(1).join("/");

  const otherLocale = currentLocale === "en" ? "es" : "en";

  const href = restPath
    ? `/${otherLocale}/${restPath}`
    : `/${otherLocale}`;

  return (
    <Link href={href} className="text-sm underline">
      {otherLocale.toUpperCase()}
    </Link>
  );
}
