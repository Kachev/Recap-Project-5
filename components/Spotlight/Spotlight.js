import useSWR from "swr";
import Image from "next/image";
import { createGlobalStyle } from "styled-components";

export default function Spotlight() {
  const { data, error, isLoading, mutate } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );

  const randomPiece = data[Math.floor(Math.random() * data.length)];

  if (error) {
    console.log(error);
    return <div>Something is wrong!</div>;
  }
  if (isLoading) return <h1>Loading...</h1>;
  console.log(data);

  return (
    <>
      <h2>Spotlight of the day</h2>

      <Image
        key={randomPiece.slug}
        src={randomPiece.imageSource}
        alt={randomPiece.slug}
        width={400}
        height={400}
      />
      <p>
        <b>{randomPiece.artist}</b> – {randomPiece.name}
      </p>
    </>
  );
}
