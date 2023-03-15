export default function CommentForm({ onSubmitComment }) {
  return (
    <>
      <form onSubmit={onSubmitComment}>
        <legend>Add comment:</legend>
        <input type="text" name="comment"></input>
        <button typle="submit">Send</button>
      </form>
      ;
    </>
  );
}
