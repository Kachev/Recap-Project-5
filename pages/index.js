import Spotlight from "../components/Spotlight/Spotlight";

export default function SpotlightPage({ data }) {
  console.log(data);
  const randomPiece = data[Math.floor(Math.random() * data.length)];
  return (
    <>
      <header></header>
      <body>
        <h1>Art Gallery</h1>
        <Spotlight
          image={randomPiece.imageSource}
          artist={randomPiece.artist}
          slug={randomPiece.slug}
        />
      </body>
    </>
  );
}
