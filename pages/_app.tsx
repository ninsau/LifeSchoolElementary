import "../styles/globals.css";
import type { AppProps } from "next/app";
import HeaderComponent from "../components/Header";
import FooterComponent from "../components/Footer";
import dynamic from "next/dynamic";

function MyApp({ Component, pageProps }: AppProps) {
  const CallModalComponent = dynamic(() => import("../components/CallModal"));
  return (
    <>
      <HeaderComponent />
      <Component {...pageProps} />
      <FooterComponent />
      <CallModalComponent />
    </>
  );
}

export default MyApp;
