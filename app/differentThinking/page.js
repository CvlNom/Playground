// pages/index.js

import Head from "next/head";


import Link from "next/link";

export default function differentThinking() {
  

  return (
    <div className='flex flex-grow' style={{minHeight: 'calc(100vh - 112px)'}}>
      <header>
        <title>
          Different Thinking 
        </title>
        <link rel="icon" href="/logo.png" />
      </header>

      <main className="flex-grow order-2 bg-slate-200 p-6">
        <h2 className="pl-20 text-2xl text-slate-600 mb-4">
          Different Think on the existing process
        </h2>

        <div className="p-2">
          <h3 className="text-xl text-slate-500 font-semibold mb-2">
            1. New idea based on my experience
          </h3>
          <ol className="list-disc pl-10 text-base text-slate-800 mb-2">
            <li>
              Deny what we do now
            </li>
            <li>Think why needed and what is the purpose.</li>
            <li>Try your idea.</li>
          </ol>
        </div>

        

        


      </main>

      <aside className="w-80 min-w-[20rem] order-1 m-0 p-0 bg-slate-200">
        <img
          src="/differentThinking.png"
          alt="image of different Thinking"
          className="differentThinking"
        />
        <div className="m-4">
              <Link href="/" className="text-xl text-blue-600 font-semibold pl-6">⬅️ Home</Link>
        </div>
        <div className="m-4">
          <h4 className="text-lg text-slate-700 font-bold pl-6 mt-4">Lists</h4>
          <ol>
            <Link href="/differentThinking/01" ><li className="text-sm text-slate-500 font-semibold pl-2 py-1">1. Welding Seam for FCW</li></Link>
            <Link href="/differentThinking/fillRatio"><li className="text-sm text-slate-500 font-semibold pl-2 py-1">2. Controlling Fill Ratio for FCW</li></Link>
            <Link href="/differentThinking/feedibility"><li className="text-sm text-slate-500 font-semibold pl-2 py-1">3. Feed Ability of FCW</li></Link>
           
          </ol>
        </div>
      </aside>
    </div>
  );
}
