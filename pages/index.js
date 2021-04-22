import Head from "next/head";
import { useEffect, useState } from "react";
import Navbar from "components/Navbar.jsx";
import Selector from "components/Selector";
import Address from "components/AddressContainer";
import useStore from "store";

const DATA = {
  A: {
    blocks: ["1", "2", "3"],
  },
  B: {
    blocks: ["4", "5", "3"],
  },
};

export default function Home() {
  const residence = useStore((state) => state.residence);

  const [address, setAddress] = useState();

  // Global data from server
  const [data, setData] = useState(DATA);
  const residences = Object.keys(data);
  const blocks = data[residence]?.blocks;

  useEffect(() => {
    // fetchResidences();
  }, []);

  const fetchResidences = async () => {
    const { residences } = await fetch("api/residences").then((res) =>
      res.json()
    );
    console.log("RES", res);
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
          <Selector residences={residences} blocks={blocks} />
        </div>
        <div className="mt-8">
          <Address />
        </div>
      </main>
    </div>
  );
}
