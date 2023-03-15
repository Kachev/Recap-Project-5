import useSWR from "swr";
import Image from "next/image";

export default function ListOfAll(){
    const { data, error, isLoading, mutate } = useSWR("https://example-apis.vercel.app/api/art");
    if (error) {
      console.log(error);
      return <div>Something is wrong!</div>;
    }
    if (isLoading) return <h1>Loading...</h1>;
    console.log(data);

    return (<>
    <h1>List of all Art Pieces</h1>
    <ul>
        {
         data.map((piece)=> <li key={piece.slug}>
            <Image src={piece.imageSource} alt={piece.slug} width={100} height={100}/>
            <p></p>
            {piece.name}

            </li>)
        }
    </ul>

    </>
    
    
    )

}