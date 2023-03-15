import useSWR from "swr";
import ArtPieces from "../../components/ArtPieces/ArtPieces";

export default function ListOfAll({ data, onToggleFavorite, artPiecesInfo }) {
  return (
    <>
      <h1>List of all Art Pieces</h1>
      <ArtPieces
        pieces={data}
        onToggleFavorite={onToggleFavorite}
        artPiecesInfo={artPiecesInfo}
        data={data}
      />
    </>
  );
}
