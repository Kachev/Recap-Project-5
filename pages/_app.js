import GlobalStyle from "../styles";
import useSWR, { SWRConfig } from "swr";
import Navigation from "../components/Navigation/Navigation";
import Layout from "../components/Layout/Layout";
import { useState } from "react";
import { uid } from "uid";
import { useImmer } from "use-immer";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const [artPiecesInfo, setArtPiecesInfo] = useState([
    {
      slug: "",
      isFavorite: false,
      comments: [{ id: 0, comment: "", date: "" }],
    },
  ]);

  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  if (error) {
    console.log(error);
    return <div>Something is wrong!</div>;
  }
  if (isLoading) return <h1>Loading...</h1>;

  //favorite state
  function handleToggleFavorite(artPiecesInfo, slug, data) {
    const piece = data.find((piece) => piece.slug === slug);

    setArtPiecesInfo(() => {
      const info = artPiecesInfo.find((piece) => piece.slug === slug);
      if (info) {
        return artPiecesInfo.map((piece) =>
          piece.slug === slug
            ? { ...piece, isFavorite: !piece.isFavorite }
            : piece
        );
      }
      return [...artPiecesInfo, { slug: slug, isFavorite: true, comments: [] }];
    });
  }
  //console.log(artPiecesInfo);
  const comments = artPiecesInfo.comments;

  //submit state
  function handleSubmitComment(slug) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    const currentDate = new Date().toDateString();
    const newComment = { ...data, id: uid(), time: currentDate };
    console.log(newComment);
    setArtPiecesInfo(() => {
      const info = artPiecesInfo.find((piece) => piece.slug === slug);
      if (info) {
        return artPiecesInfo.map((piece) =>
          piece.slug === slug
            ? { ...piece, comments: [...piece.comments, newComment] }
            : piece
        );
      }
      return [
        ...artPiecesInfo,
        { slug: slug, isFavorite: false, comments: [newComment] },
      ];
    });

    event.target.reset();
  }

  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component
          {...pageProps}
          data={data}
          onToggleFavorite={handleToggleFavorite}
          artPiecesInfo={artPiecesInfo}
          onSubmitComment={handleSubmitComment}
        />
        <Layout />
      </SWRConfig>
    </>
  );
}
