import Head from "next/head";
import { useEffect, useState } from "react";
import Navbar from "components/Navbar.jsx";
import Selector from "components/Selector";
import Address from "components/AddressContainer";
import useStore from "store";

export default function Home({ residenceData }) {
  const residence = useStore((state) => state.residence);

  const [address, setAddress] = useState();

  // Global data from server
  const [data, setData] = useState(residenceData);
  const residences = data ? Object.keys(data) : null;
  const blocks = data ? data[residence]?.blocks : null;

  return (
    <div>
      <Head>
        <title>Adresçi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Navbar />
        <div className="bg-gray-800 py-12 rounded-b-xl  mx-auto">
          <Selector
            residenceData={residenceData}
            residences={residences}
            blocks={blocks}
          />
        </div>
        <div className="mt-8">
          <Address />
        </div>
      </main>
    </div>
  );
}

import db from "./api/db";
export async function getStaticProps() {
  return {
    props: {
      residenceData: db,
    },
  };
}

// useEffect(() => {
//   // fetchData();
// }, []);

// const fetchData = async () => {
//   const { data } = await fetch("api/residences").then((res) => res.json());
//   console.log("RES", data);
//   setData(data);
// };
