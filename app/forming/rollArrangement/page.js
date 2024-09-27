import Head from "next/head";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Link from "next/link";
// import LoginSignup from '../component/LoginSignup';
// import DrawFormingRoll from './DrawFormingRoll';

export default async function rollArrangement(req, res) {
  let session = await getServerSession(authOptions);

  if (!session) {
    return <LoginSignup />;
  } else {
    return (
      <div className='flex flex-grow' style={{minHeight: 'calc(100vh - 112px)'}}>
        <header>
          <title>Roll Arrange: wire-lab</title>
          <link rel="icon" href="/logo.png" />
        </header>

        <main className="flex-grow order-2 bg-slate-200 pl-12 pt-2">
          <div className="flex flex-row items-center mt-4 mb-4">
            <h2 className="px-10 text-xl text-slate-600 font-semibold pb-1">Tube Forming Mill - Roll Arrangement</h2>
            <Link href="./">
              <button className="w-20 ml-40 text-lg py-0 bg-blue-300 rounded-lg text-blue-600 hover:font-bold hover:bg-blue-400">
                Back
              </button>
            </Link>
          </div>

          <img
            src="../forming-arrangement.png"
            alt="image of crd assemble"
            className="bg-slate-100 rounded-xl shadow-lg w-[800px]"
          />
          <div className="pl-6 mb-4">
            <p className="text-slate-500 text-lg mb-2 font-semibold mt-4">Simple is Best</p>
            <ol className="list-decimal text-sm  text-slate-600 ml-6">
              <li>Simplest arrangement without drive parts to make tube.</li>
              <li>For mild steel and below 1.2mm thickness. </li>
              <li>
                Applied to the patent of{" "}
                <a
                  href="https://patents.google.com/patent/US20150044506A1/en?oq=US2015%2f0044506A1"
                  target="_blank"
                >
                  "Flux cored wire and manufacturing method thereof and
                  manufacturing device thereof"
                </a>
              </li>
              <li>Stable forming works enough to do weld by laser.</li>
            </ol>
          </div>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
        </main>
        
      </div>
    );
  }
}
