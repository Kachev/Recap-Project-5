import { useState } from "react";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

export default function ArtPieces({
  pieces,
  onToggleFavorite,
  artPiecesInfo,
  data,
}) {
  return (
    <>
      <ul>
        {pieces.map((piece) => (
          <ArtPiecePreview
            key={piece.slug}
            image={piece.imageSource}
            title={piece.name}
            artist={piece.artist}
            slug={piece.slug}
            onToggleFavorite={onToggleFavorite}
            artPiecesInfo={artPiecesInfo}
            data={data}
          />
        ))}
      </ul>
    </>
  );
}
