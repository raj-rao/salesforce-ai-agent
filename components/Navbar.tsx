import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b bg-white px-6 py-4">
      <div className="flex gap-6">
        <Link href="/">Home</Link>

        {/*<Link href="/dashboard">
          Dashboard
        </Link>*/}

        <Link href="/tab1">
          Tab 1
        </Link>

        <Link href="/tab2">
          Tab 2
        </Link>

        <Link href="/tab3">
          Tab 3
        </Link>
      </div>
    </nav>
  );
}