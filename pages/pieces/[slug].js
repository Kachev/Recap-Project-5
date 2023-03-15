import useSWR from "swr";
import { useRouter } from "next/router";
import ArtPieceDetails from "../../components/ArtPieceDetails/ArtPieceDetails";
import { useState } from "react";
import FavoriteButton from "../../components/Button/Favorite-button";
export default function DetailsPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [favorites, setFavorites] = useState([]);
  

  const info = favorites.find((favorites) => favorites.slug === slug) ?? {
    isLiked: false,
  };
  const { isLiked } = info;
  function handleFavorite(slug) {
    setFavorites((favorites) => {
      const info = favorites.find((info) => info.slug === slug);
      
      if (info) {
        return favorites.map((info) =>
          info.slug === slug ? { ...info, isLiked: !info.isLiked } : info
        );
      }
      return [...favorites, { slug, isLiked: true }];
    });
  }

  
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );
  if (error) {
    console.log(error);
    return <div>Something is wrong!</div>;
  }
  if (isLoading) return <h1>Loading...</h1>;
  //console.log(data);

  const index = data.findIndex((piece) => piece.slug === slug);
  const piece = data[index];

  //console.log(piece);
  return (
    <main>
      <ArtPieceDetails {...piece} />
      <FavoriteButton slug={slug} handleFavorite={handleFavorite} isLiked={isLiked}/>
    </main>
  );
}
