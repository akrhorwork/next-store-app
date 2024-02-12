import Link from "next/link";

function Navbar() {
  return (
    <nav className="max-w-4xl mx-auto flex items-center justify-between py-10">
      <h2 className="font-bold text-4xl">Tickets</h2>
      <ul className="flex items-center gap-5">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
