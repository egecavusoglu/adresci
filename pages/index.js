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
    <div className="min-h-screen flex flex-col justify-between">
      <Head>
        <title>adresçi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="pb-60">
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
      <footer className="bg-gray-800 px-5 py-4">
        <p className="footer-text mb-4">
          Please contact{" "}
          <a className="text-blue-400" href="mailto:egecavusoglu@outlook.com">
            egecavusogluu@outlook.com
          </a>{" "}
          for your residence to be featured.
        </p>
        <p className="footer-text text-xs text-gray-500">
          {/* This tool is not an official tool and no user data is saved or tracked
          by any means. */}
          It is hereby declared that “adresci” is not an official tool by any
          means and is excluded from any and all liabilities for damages. By
          using the “adresci” address generator each user hereby accepts all
          legal responsibility.
        </p>
      </footer>
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
