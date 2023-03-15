import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <ul>
        <li>
          <Link href="..">Spotlight</Link>
        </li>
        <li>
          <Link href="../pieces">Pieces</Link>
        </li>
        <li>
          <Link href="../favorite">Favorite Pieces</Link>
        </li>
      </ul>
    </>
  );
}
