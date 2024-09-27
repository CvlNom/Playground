// pages/index.js
import Head from "next/head";
// import Inputs from './InputComponent';
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Link from "next/link";
import LoginSignup from "../../component/LoginSignup";

export default async function procedureOfMould(req, res) {
  // let session = await getServerSession(authOptions)

  // if (!session) {
  //   return (
  //     <LoginSignup />
  //   )

  // } else {
  return (
    <div
      className="flex flex-grow"
      style={{ minHeight: "calc(100vh - 112px)" }}
    >
      <header>
        <title>Procedure to build spool mould</title>
        <link rel="icon" href="/logo.png" />
      </header>

      <main className="flex-grow order-2 bg-slate-200 pl-12 pt-2">
        <div className="flex flex-row items-center mt-4 mb-4">
          <h2 className="px-4 text-2xl text-slate-600 font-semibold pb-1">
            Procedure to build spool mould
          </h2>
          <Link href="./">
            <button className="w-20 ml-40 text-lg py-0 bg-blue-300 rounded-lg text-blue-600 hover:font-bold hover:bg-blue-400">
              Back
            </button>
          </Link>
        </div>

        <div className="pl-6 mb-4">
          <p className="text-slate-500 text-lg mb-2 font-semibold mt-4">Design the spool based on the specification </p>
          <ol className="list-decimal text-sm  text-slate-600 ml-6">
            <li>Required specification of wire size, winding weight etc.</li>
            <li>Specify the groove detail, hole for start and end. </li>
            <li>Decide the spool material like ABS, PS and PP. </li>
          </ol>
          <p className="text-slate-500 text-lg mb-2 font-semibold mt-4">
            Manufacturer of spool mould make their own design for spool mould{" "}
          </p>
          <ol className="list-decimal text-sm  text-slate-600 ml-6">
            <li>
              Check thickness and shape of spool for cooling water circulation
            </li>
            <li>
              Depending on the material, decide shrink factor on their
              experience.{" "}
            </li>
            <li>
              Since the shrink rate is different, the spool with different
              material get different dimension.{" "}
            </li>
            <li>With built mould, extrude sample spool for test. </li>
            <li>Record extrusion condition. </li>
          </ol>
          
		  <p className="text-slate-500 text-lg mb-2 font-semibold mt-4">Inspect the spool samples </p>
          <ol className="list-decimal text-sm  text-slate-600 ml-6">
            <li>Check shape and dimension and also flange straightness.</li>
            <li>
              Cut the part of layer groove and polish for the microscope
              picture.{" "}
            </li>
            <li>
              Scaling the picture of groove by CAD software and measure the
              groove distance and last lap distance.{" "}
            </li>
            <li>
              If not passed inspection, let maker do repair work and new samples
              for inspection.{" "}
            </li>
            <li>
              In case inspection passed, do the winding test at the winding
              machine with experienced operator.{" "}
            </li>
            <li>
              With operator's opinion, get samples with modified extrusion
              specification like cooling time and total cycle time.{" "}
            </li>
            <li>
              Issue Pass certification and check the extrusion condition from
              time to time.{" "}
            </li>
          </ol>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
        </div>
      </main>
    </div>
  );
  // }
}
