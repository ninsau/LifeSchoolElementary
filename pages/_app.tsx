import "../styles/globals.css";
import type { AppProps } from "next/app";
import HeaderComponent from "../components/Header";
import FooterComponent from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeaderComponent />
      <Component {...pageProps} />
      <FooterComponent />
    </>
  );
}

export default MyApp;
