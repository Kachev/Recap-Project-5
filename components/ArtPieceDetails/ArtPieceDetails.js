import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import { uid } from "uid";
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
  year,
  genre,
  imageSource,
  artPiecesInfo,
}) {
  const [comments, setComments] = useState([]);
  console.log(comments);
  function handleSubmitComment(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const currentDate = new Date().toDateString();
    //console.log(id);
    const newComment = { ...data, id: uid(), time: currentDate };
    setComments([...comments, newComment]);
    event.target.reset();
  }

  return (
    <>
      <Link href="/pieces">back</Link>
      <Image src={imageSource} alt={slug} width={400} height={400} />

      <p>
        {artist} : {name}
      </p>
      <Comments comments={comments} />
      <CommentForm onSubmitComment={handleSubmitComment} />
    </>
  );
}
