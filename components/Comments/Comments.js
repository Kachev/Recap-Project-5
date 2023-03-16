export default function Comments({ artPiece }) {
  const comments = artPiece.comments;

  return (
    <>
      <p>Comments:</p>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <p>
              {comment.comment}({comment.time})
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
