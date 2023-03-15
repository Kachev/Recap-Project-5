import GlobalStyle from "../styles";
import useSWR, { SWRConfig } from "swr";
import Navbar from "../components/Nav-bar/nav-bar";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />

      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} />
      </SWRConfig>
      <Navbar />
    </>
  );
}
