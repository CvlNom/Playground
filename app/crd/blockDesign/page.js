
// "use client";
// import Head from "next/head";
// import { useState } from "react";
// import { useEffect } from "react";
import BlockTable from "./BlockTable";
import Link from "next/link";

export default function blockDesign() {
  return (
    <div className="flex">
      <header>
        <title>Design CRD Block</title>
        <link rel="icon" href="/logo.png" />
      </header>

      <main className="flex-grow order-2 bg-slate-200 pl-12 pt-2">
        <div className="flex flex-row items-center mt-4 mb-4">
        <h3 className="px-10 text-xl text-slate-600 font-semibold pb-1">Design CRD Block by Size</h3>
        <Link href="./"><button className='w-20 ml-40 text-lg py-0 bg-blue-300 rounded-lg text-blue-600 hover:font-bold hover:bg-blue-400'>Back</button></Link>
        </div>
        
		<BlockTable />

        <div className="pl-6 mb-4">
          <p className="text-slate-500 text-lg mb-2 font-semibold">How to use</p>
          <ol className="list-decimal text-sm  text-slate-600 ml-6">
            <li>Fill start and target size</li>
            <li>Adjust OP at table referring R rate around 8 to 9%</li>
            <li>Adjust Number of Stage to meet the target size</li>
            <li>
              With profile drawing of "R" and "S", this table can be a
              manufacturing drawing for CRD rolls
            </li>
          </ol>
        </div>
        <div className="pl-6 mb-4">
          <p className="text-slate-500 text-base font-semibold italic mb-2">Annotation</p>
          <ol className="list-disc text-slate-700 text-sm ml-6">
            <li>R factor is the parameter to shape of oval round.</li>
            <li>
              G/2 is halp gap between rolls, in case of big diameter it will be
              better to increase.
            </li>
            <li>eR is edge round and like G/2 adjust if needed.</li>
          </ol>
        </div>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
      </main>

      {/* <aside className="mainBody" id="asideCRD01">
        <div className="mainBodyUl">
          <ul>
            <li>
              <Link href="./" style={{ color: "white" }}>
                ⬅️ CRD Profile
              </Link>
            </li>
            <li>
              <Link href="../crd/assemble" style={{ color: "white" }}>
                How to Assemble
              </Link>
            </li>
          </ul>
        </div>
      </aside> */}
    </div>
  );
}
