import useSWR from "swr";
import ArtPieces from "../../components/ArtPieces/ArtPieces";

export default function ListOfAll() {
  const { data, error, isLoading, mutate } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );
  if (error) {
    console.log(error);
    return <div>Something is wrong!</div>;
  }
  if (isLoading) return <h1>Loading...</h1>;
  console.log(data);

  return (
    <>
      <h1>List of all Art Pieces</h1>
      <ArtPieces pieces={data} />
    </>
  );
}
