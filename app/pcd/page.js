
import Head from "next/head";
import Inputs from "./InputComponent";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Link from "next/link";
import LoginSignup from "../component/LoginSignup";
import ImgCard from "../component/ImgCard";
import AD_side from "../component/AD_side";

export default async function DieProfile(req, res) {
  // let session = await getServerSession(authOptions)

  // if (!session) {
  //   return (
  //     <LoginSignup />
  //   )

  // } else {
  return (
    <div className="flex">
      <header>
        <title>Design PCD profile</title>
        <link rel="icon" href="/logo.png" />
      </header>

      <main className="flex-grow order-2 bg-slate-200 pl-12 pt-2">
        <h3 className="px-4 text-xl text-slate-600 font-semibold pb-1">
          Design PCD profile
        </h3>
        <Inputs />
        <p>&nbsp;</p>
        
      </main>
      <aside className="w-80 min-w-[20rem] order-1 m-0 p-0 bg-slate-100">
        <div className="p-6">
          <h4 className="text-slate-500 font-bold p-2">Sequence Design</h4>
          <ul className="sideUl space-y-2">
            <li className="relative group">
              <Link
                href="./pcd/byReduction"
                className="text-slate-100 ml-4 text-sm"
              >
                1. Sequence by Reduction
              </Link>
            </li>
            <li className="relative group">
              <Link
                href="./pcd/byElongation"
                className="text-slate-100 ml-4 text-sm"
              >
                2. Sequence by Elongation
              </Link>
            </li>
          </ul>
        </div>

        <AD_side company={['./haion-logo.png', '하 이 온', '(82)-055-337-5025', 'haion@hotmail.co.kr']} 
        deal={['Drawing Die Processing', 'PCD & Carbide Die Equip', 'Diamond Powder for Grinding']}/>

        {/* <div className="mt-10 py-1 mb-10 bg-gray-400 rounded-md shadow-sm">
          <div className="flex flex-col my-2 justify-center mt-2">
            <h3 className="font-xl text-slate-600 uppercase text-center font-bold">Drawing die processing</h3>
            <h3 className='text-xs text-black-600 text-center'>PCD & Carbide, Processing Equip, Diamond Powder</h3>
          </div>
          <div className="mb-2">
            <img src="./ad-haion.png" />
          </div>
         
          <div className="pl-4 pb-2 text-sm ">
            <p>Tel: 82 055 337 5025  </p>
           
            <p>E-Mail: haion@hotmail.co.kr</p>
            
          </div>
        </div> */}
        <ImgCard path="./pcd-01.png" description="PCD blank & Inspection" />
      </aside>
    </div>
  );
  // }
}
