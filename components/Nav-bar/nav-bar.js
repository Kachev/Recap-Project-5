import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <ul>
        <li>
          <Link href="../pieces">All Art Pieces</Link>
        </li>
        <li>
          <Link href="..">Spotlight</Link>
        </li>
        <li>
          <Link href="../favorite-listing">Favorite Pieces</Link>
        </li>
      </ul>
    </>
  );
}
