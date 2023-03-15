import ArtPieces from "../components/ArtPieces/ArtPieces";

export default function Favorites({ artPiecesInfo, onToggleFavorite, data }) {
  const favoritePieces = artPiecesInfo.filter(
    (piece) => piece.isFavorite === true
  );
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
