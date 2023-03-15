import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

const StyleList = styled.li`
  list-style-type: none;
`;

export default function ArtPieceDetails({
  colors,
  name,
  artist,
  slug,
  year,
  genre,
  imageSource,
}) {
  return (
    <>
      <Link href="/pieces">back</Link>
      <Image src={imageSource} alt={slug} width={400} height={400} />

      <p>
        {artist} : {name}
      </p>
      <p>Comments:</p>
      <ul>
        <li key="1"> "I love this piece!"(01-01-2020) </li>
      </ul>
      <form>
        <legend>Add comment:</legend>
        <input type="text"></input>
        <button typle="submit">Send</button>
      </form>
    </>
  );
}
