"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navClass = (path: string) =>
    pathname === path
      ? "border-b-2 border-blue-600 pb-1 font-semibold text-blue-600"
      : "pb-1 text-gray-600 hover:text-blue-600";

  return (
    <nav className="flex gap-8 border-b p-4">
      <Link href="/" className={navClass("/")}>
        Home
      </Link>

      <Link href="/tab1" className={navClass("/tab1")}>
        Tab 1
      </Link>

      <Link href="/tab2" className={navClass("/tab2")}>
        Tab 2
      </Link>

      <Link href="/tab3" className={navClass("/tab3")}>
        Tab 3
      </Link>
    </nav>
  );
}