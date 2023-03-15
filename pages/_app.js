import GlobalStyle from "../styles";
import useSWR, { SWRConfig } from "swr";


const fetcher = (...args) => fetch(...args).then((res) => res.json());




export default function App({ Component, pageProps }) {

  return (
    <>
      <GlobalStyle />

      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
