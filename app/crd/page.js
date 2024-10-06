import Head from "next/head";
import InputCRD from "./inputCRD";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Link from "next/link";
import LoginSignup from "../component/LoginSignup";
// import Footer from '../component/Footer'
import style from "./fillRatio.module.css";
import ImgCard from "../component/ImgCard";
import AD_side from "../component/AD_side";

export default async function CRD(req, res) {
  let session = await getServerSession(authOptions);

  if (!session) {
    return <LoginSignup />;
  } else {
    return (
      <div className='flex flex-grow' style={{minHeight: 'calc(100vh - 112px)'}}>
        <header>
          <title>Design CRD profile</title>
          <link rel="icon" href="/logo.png" />
        </header>

        <main className="flex-grow order-2 bg-slate-200 pl-12 pt-2">
          <h3 className="px-4 text-xl text-slate-600 font-semibold pb-1">
            Design CRD profile
          </h3>
          <InputCRD />
          
          <div className="mt-4 py-2 pl-4 ">
            <h4 className="text-lg font-semibold italic pl-2 text-slate-500">
              Description of Groove type
            </h4>
            <ul className="list-disc pl-2 py-2 text-slate-600 text-sm">
              <p className="text-base text-slate-600 font-bold">
                Rough Round Type{" "}
              </p>
              <li>For Reducing diameter</li>
              <li>Make wire section oval shape</li>
              <li>Give 7 to 10% of reduction</li>
              <li>Depending on the wire hardness</li>
            </ul>
            <ul className="list-disc pl-2 py-2 text-slate-600 text-sm">
              <p className="text-base text-slate-600 font-bold">Sizing Type </p>
              <li>For making round shape</li>
              <li>At the end of block</li>
              <li>Give 4 to 5% of reduction</li>
            </ul>
          </div>
          <p>&nbsp;</p>
        </main>

        <aside className="w-80 min-w-[20rem] order-1 m-0 p-0 bg-slate-100">
          <div className="p-6">
            <h4 className="text-slate-500 font-bold p-2">Design CRD Block</h4>
            <ul className="sideUl space-y-2">
              <li className="relative group">
                <Link
                  href="./crd/blockDesign"
                  className="text-slate-100 ml-4 text-sm"
                >
                  1. Block Design
                </Link>
              </li>
              <li className="relative group">
                <Link
                  href="./crd/assemble"
                  className="text-slate-100 ml-4 text-sm"
                >
                  2. How to Assemble
                </Link>
              </li>
              
            </ul>
          </div>

          <AD_side company={['./hanil-logo.png', '한일 정공', '(82)-010-5414-4974', 'gawonjo@naver.com']} deal={['Ultra Fine Equipment for Semiconductor', 'Tube Forming & Drawing Roll', 'Precision Groove Profile Processing']}/>

          <div className="mt-6">
            <ImgCard
              path="./application-crd.png"
              description="A type of drawing CRD"
            />
          </div>
          <div className="mt-4 mb-10 bg-slate-50 rounded-2xl shadow-lg">
            <img
              src="/roll_reducing.png"
              alt="image of roll drawing"
              className="w-['300px'] h=['300px'] rounded-xl"
            />
            <p className="p-2 font-semibold text-xs text-slate-500">
              <sup>**</sup>image shows how rolls contact wire.
            </p>
          </div>

        </aside>
      </div>
    );
  }
}
