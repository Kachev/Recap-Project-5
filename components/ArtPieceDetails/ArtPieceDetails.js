import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";

import Comments from "../Comments/Comments";
import CommentForm from "../CommentForm/CommentForm";

const StyleList = styled.li`
  list-style-type: none;
`;

export default function ArtPieceDetails({
  colors,
  name,
  artist,
  slug,
  imageSource,
  artPiecesInfo,
  onSubmitComment,
}) {
  const info = artPiecesInfo.find((piece) => piece.slug === slug);
  const artPiece = info ? info : { comments: [] };

  return (
    <>
      <Link href="/pieces">back</Link>
      <Image priority src={imageSource} alt={slug} width={400} height={400} />
      <p>
        {artist} : {name}
      </p>
      <Comments artPiece={artPiece} />
      <CommentForm onSubmitComment={onSubmitComment} slug={slug} />
    </>
  );
}
