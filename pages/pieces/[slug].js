import useSWR from "swr";
import { useRouter } from "next/router";
import ArtPieceDetails from "../../components/ArtPieceDetails/ArtPieceDetails";

export default function DetailsPage() {
  const router = useRouter();
  const { slug } = router.query;

  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );
  if (error) {
    console.log(error);
    return <div>Something is wrong!</div>;
  }
  if (isLoading) return <h1>Loading...</h1>;
  //console.log(data);

  const index = data.findIndex((piece) => piece.slug === slug);
  const piece = data[index];
  //console.log(piece);
  return (
    <main>
      <ArtPieceDetails {...piece} />
    </main>
  );
}
