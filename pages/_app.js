import GlobalStyle from "../styles";
import useSWR, { SWRConfig } from "swr";
import Navigation from "../components/Navigation/Navigation";
import Layout from "../components/Layout/Layout";
import { useState } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const [artPiecesInfo, setartPiecesInfo] = useState([]);
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  if (error) {
    console.log(error);
    return <div>Something is wrong!</div>;
  }
  if (isLoading) return <h1>Loading...</h1>;
  //console.log(data);
  //state

  function handleToggleFavorite(artPiecesInfo, slug, data) {
    /*  const info = data.find((piece) => piece.slug === slug) ?? {
      isFavorite: false,
    };
    const { isFavorite } = info; */
    const piece = data.find((piece) => piece.slug === slug);
    //console.log(piece);

    setartPiecesInfo(() => {
      const info = artPiecesInfo.find((piece) => piece.slug === slug);
      //console.log(info);
      if (info) {
        return artPiecesInfo.map((piece) =>
          piece.slug === slug
            ? { ...piece, isFavorite: !piece.isFavorite }
            : piece
        );
      }
      return [...artPiecesInfo, { ...piece, isFavorite: true }];
    });
  }
  console.log(artPiecesInfo);

  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component
          {...pageProps}
          data={data}
          onToggleFavorite={handleToggleFavorite}
          artPiecesInfo={artPiecesInfo}
        />
        <Layout />
      </SWRConfig>
    </>
  );
}
