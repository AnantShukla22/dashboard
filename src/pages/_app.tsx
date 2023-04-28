import type { AppProps } from "next/app";
import Sidebar from "../components/layout/Sidebar"
import Navbar from "../components/layout/Navbar"

import "../styles/global.css"
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Sidebar />
      <Navbar/>
    </>
  );
}
