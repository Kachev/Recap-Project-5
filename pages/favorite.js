import ArtPieces from "../components/ArtPieces/ArtPieces";

export default function Favorites({ artPiecesInfo, onToggleFavorite, data }) {
  const favorites = artPiecesInfo.filter(
    (favorite) => favorite.isFavorite === true
  );
  const favoritePieces = data.filter((piece) =>
    favorites.find((favorite) => favorite.slug === piece.slug)
  );
  console.log(favoritePieces);

  return (
    <>
      <h1>Favorites Pagge</h1>
      <ArtPieces
        pieces={favoritePieces}
        onToggleFavorite={onToggleFavorite}
        artPiecesInfo={artPiecesInfo}
        data={data}
      />
    </>
  );
}
