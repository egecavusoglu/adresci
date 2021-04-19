import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "components/Navbar.jsx";
import Selector from "components/Selector";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Adresci</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Navbar />
        <div className="bg-gray-800 py-8 rounded-b-xl">
          <Selector />
        </div>
      </main>
    </div>
  );
}
