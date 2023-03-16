import { useRouter } from "next/router";
import ArtPieceDetails from "../../components/ArtPieceDetails/ArtPieceDetails";
import FavoriteButton from "../../components/FavoriteButton/FavoriteButton";

export default function DetailsPage({
  data,
  onToggleFavorite,
  artPiecesInfo,
  onSubmitComment,
}) {
  const router = useRouter();
  const { slug } = router.query;

  const index = data.findIndex((piece) => piece.slug === slug);
  const piece = data[index];

  return (
    <>
      <FavoriteButton
        slug={slug}
        onToggleFavorite={onToggleFavorite}
        artPiecesInfo={artPiecesInfo}
        data={data}
      />
      <ArtPieceDetails
        {...piece}
        artPiecesInfo={artPiecesInfo}
        onSubmitComment={onSubmitComment}
      />
    </>
  );
}
