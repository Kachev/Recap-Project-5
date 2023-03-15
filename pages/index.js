import useSWR from "swr";
import ListOfAll from "./pieces";
import Image from "next/image";

const URL = "https://example-apis.vercel.app/api/art";
export default function HomePage() {
  const { data, error, isLoading, mutate } = useSWR(URL);
  if (error) {
    console.log(error);
    return <div>Something is wrong!</div>;
  }
  if (isLoading) return <h1>Loading...</h1>;
  console.log(data);

  function RandomImage() {}

  return (
    <div>
      <header>
        <title>Home Page</title>
        <h1>hshd</h1>
      </header>
      
    </div>
  );
}
