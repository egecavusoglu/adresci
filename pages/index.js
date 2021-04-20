import Head from "next/head";
import { useState } from "react";
import Navbar from "components/Navbar.jsx";
import Selector from "components/Selector";
import Address from "components/AddressContainer";

const TEXT =
  "MASLAK MAHALLESİ, TAŞ YONCASI SOKAK, NO: 1 / ( BLOK KODU ) , BLOK – DAİRE NO. ,P.K 34398 ,SARIYER";

export default function Home() {
  const [address, setAddress] = useState(TEXT);

  const copy = () => {
    navigator.clipboard.writeText(address);
  };
  return (
    <div>
      <Head>
        <title>Adresçi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Navbar />
        <div className="bg-gray-800 py-12 rounded-b-xl  mx-auto">
          <Selector />
        </div>
        <div className="mt-8">
          <Address copy={copy} address={address} />
        </div>
      </main>
    </div>
  );
}
