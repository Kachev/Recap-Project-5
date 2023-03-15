import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <ul>
        <li>
          <Link href="../ArtPieces/ArtPieces">ArtPieces</Link>
        </li>
        <li>
          <Link href="../Spotlight">Spotlight</Link>
        </li>
        <li>
          <Link href="../pieces/">List of all Art Pieces</Link>
        </li>
      </ul>
    </>
  );
}
