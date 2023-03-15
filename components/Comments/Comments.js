export default function Comments({ comments }) {
  return (
    <>
      <p>Comments:</p>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <p>
              "{comment.comment}"({comment.time})
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
