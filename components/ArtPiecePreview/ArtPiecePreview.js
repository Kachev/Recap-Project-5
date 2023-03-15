import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

const StyleList = styled.li`
  list-style-type: none;
`;

export default function ArtPiecePreview({
  image,
  title,
  artist,
  slug,
  onToggleFavorite,
  artPiecesInfo,
  data,
}) {
  return (
    <StyleList key={slug}>
      <div>
        <Link href={`/pieces/${slug}`}>
          <Image src={image} alt={slug} width={200} height={200} />
        </Link>
        <FavoriteButton
          slug={slug}
          onToggleFavorite={onToggleFavorite}
          artPiecesInfo={artPiecesInfo}
          data={data}
        />
        <p>
          "{title}" by {artist}
        </p>
      </div>
    </StyleList>
  );
}

{
}
//<FavoriteButton slug={slug} />
