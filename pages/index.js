import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "components/Navbar.jsx";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Adresci</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
      </main>
    </div>
  );
}
