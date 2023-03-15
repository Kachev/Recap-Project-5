import useSWR from "swr";
import Spotlight from "../components/Spotlight/Spotlight";
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
  return (
    <div>
      <header></header>
      <body>
        <h1>Art Gallery</h1>
        <Spotlight />
      </body>
    </div>
  );
}
