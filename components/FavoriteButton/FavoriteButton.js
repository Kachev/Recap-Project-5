import Heart from "../../resources/assets/heart.svg";
import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 45%;
`;
/*  ${({ isFavorite }) =>
     isFavorite === "right" &&
     css`
       background-color: red;
     `} */

export default function FavoriteButton({
  onToggleFavorite,
  data,
  slug,
  artPiecesInfo,
}) {
  //console.log(data);
  return (
    <StyledButton
      type="button"
      key={slug}
      onClick={() => {
        onToggleFavorite(artPiecesInfo, slug, data);
      }}
    >
      <Heart width="20" />
    </StyledButton>
  );
}
