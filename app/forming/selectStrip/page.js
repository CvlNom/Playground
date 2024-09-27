import Head from "next/head";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Link from "next/link";
// import LoginSignup from '../component/LoginSignup';
// import DrawFormingRoll from './DrawFormingRoll';

export default async function selectStrip(req, res) {
  let session = await getServerSession(authOptions);

  if (!session) {
    return <LoginSignup />;
  } else {
    return (
      <div className='flex flex-grow' style={{minHeight: 'calc(100vh - 112px)'}}>
        <header>
          <title>Select Strip for Flux Cored Welding Wire</title>
          <link rel="icon" href="/logo.png" />
        </header>

		
        <main className="flex-grow bg-slate-200 pl-12 py-2" >
          <div className="flex flex-row items-center mt-4 mb-4">
            <h2 className="text-slate-500 text-xl font-semibold" >Select Strip for Flux Cored Welding Wire</h2>
            <Link href="./">
              <button className="w-20 ml-40 text-lg py-0 bg-blue-300 rounded-lg text-blue-600 hover:font-bold hover:bg-blue-400">
                Back
              </button>
            </Link>
          </div>

          <img
            src="../stripToTube.png"
            alt="image of crd assemble"
            className="bg-slate-100 rounded-xl shadow-lg w-[800px] mb-4"
          />

          <div className="pl-6 mb-4">
            <p className="text-slate-500 text-lg mb-2 font-semibold mt-4">Strip Selection</p>
            <ol className="list-decimal text-sm  text-slate-600 ml-6">
              <li>Tube Diameter = (Width / 3.14) + Thickness </li>
              <li>Inside shrink and outside stretch during forming process </li>
              <li>
                Not enough stretch make imperfection of seam section shape
              </li>
              <li>
                To make ideal shape of the seam section, apply bevelling roll
                and "W" bending at F1 stand.
              </li>
            </ol>
            <p className="text-slate-500 text-lg mb-2 font-semibold mt-4">Process Engineering for Flux Cored Welding Wire</p>
            <ol className="list-decimal text-sm  text-slate-600 ml-6">
              <li>
                Ratio of width and thickness decides the void ratio to fill a
                powder.{" "}
              </li>
              <li>
                Depending on the product type and powder's specific density,
                need to adjust strip size.
              </li>
              <li>
                Plus, considering on the process capability and final strength
                of wire, decide the start diameter by strip thickness and width.
              </li>
            </ol>
            
          </div>
        </main>
        
        
      </div>
    );
  }
}
