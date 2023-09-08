import Link from "next/link";

export default function Navbar() {
  return (
    <header className="px-[5%] md:px-[7vw]">
      <nav className="my-8 flex w-full justify-between">
        <Link href="/" className="text-2xl">
          ConnexusLink
        </Link>
      </nav>
    </header>
  );
}
