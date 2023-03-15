import useSWR from "swr";
import Image from "next/image";
import { createGlobalStyle } from "styled-components";

export default function Spotlight({ image, artist, slug }) {
  // console.log(data);

  return (
    <>
      <h2>Spotlight of the day</h2>

      <Image key={slug} src={image} alt={slug} width={600} height={400} />
      <p>
        <b>{artist}</b>
      </p>
    </>
  );
}
