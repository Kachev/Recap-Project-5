import useSWR from "swr";
import Navbar from "../components/Nav-bar/nav-bar";
import ListOfAll from "./pieces";

export default function HomePage() {
  const { data, error, isLoading, mutate } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );
  if (error) {
    console.log(error);
    return <div>Something is wrong!</div>;
  }
  if (isLoading) return <h1>Loading...</h1>;
  console.log(data);
  return <></>;
}
