export default function CommentForm({ onSubmitComment, slug }) {
  return (
    <>
      <form onSubmit={() => onSubmitComment(slug)}>
        <legend>Add comment:</legend>
        <input type="text" name="comment"></input>
        <button typle="submit">Send</button>
      </form>
      ;
    </>
  );
}
