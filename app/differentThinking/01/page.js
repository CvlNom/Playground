// pages/index.js
"use client";
import Head from "next/head";
import { useState } from "react";
import { useEffect } from "react";

import Link from "next/link";

export default function differentThinking01() {
  const [selectedOption, setSelectedOption] = useState("option1");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex">
      <header>
        <title>
          Different Thinking of the seam welding for the seamless FCW
        </title>
        <link rel="icon" href="/logo.png" />
      </header>

      <main className="flex-grow order-2 bg-slate-200 p-6">
        <h2 className="pl-20 text-2xl text-slate-600 mb-4">
          Different Thinking for the seam welding
        </h2>

        <div className="p-2">
          <h3 className="text-lg text-slate-500 font-semibold mb-2">
            1. The reason of various welding process for the seam welding
          </h3>
          <ol className="list-disc pl-10 text-base text-slate-800 mb-2">
            <li>
              During the welding, there is huge amounts of heat generated at the
              seam.
            </li>
            <li>So, Have to find out to protect the flux inside.</li>
            <li>Below, different method to weld the seam for seamless FCW.</li>
          </ol>
        </div>

        <div className="p-2">
          <h3 className="text-lg text-slate-500 font-semibold mb-2">
            2. Different Welding Methods
          </h3>
          <div>
            <h4 className="text-slate-700 font-semibold ml-4 mb-4">
              2-1 Old Method according to the patent of{" "}
              <a
                href="https://patents.google.com/patent/EP0489167B1/en?oq=EP+0489167+B1"
                target="_blank"
              >
                EP 0489167 B1
              </a>
            </h4>

            <img
              src="../different-thinking_01.png"
              alt="image of welding section"
              className="pl-20"
            />

            <ul className="list-disc pl-10 mt-4  text-slate-800 mb-2">
              <li>
                Old patent that the laser welding has not yet introduced the the
                seam welding.
              </li>
              <li>
                Lots of heat generated from welding point enough to burn all
                surface of tube.
              </li>
              <li>
                To protect the flux, it need to secure some distance from heat
                source.
              </li>
              <li>Big tube make the manufacturing process complicate.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-700 font-semibold ml-4 mb-4 mt-4">
              2-2 Assumption of Bühler (PPT data)
            </h4>
            <img
              src="../different-thinking_02.png"
              alt="image of welding section"
              className="pl-20"
            />

            <ul className="list-disc pl-10 mt-4  text-slate-800 mb-2">
              <li>Up to date technology to make a seamless FCW from Europe.</li>
              <li>
                However still big tube to make the seam welding that make the
                process complicate.
              </li>
              <li>
                Also has small possibility to burn the flux since laser light
                can penetrate extremely small gap of the seam.
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-700 font-semibold ml-4 mb-4 mt-4">
              2-3 Double tube method from the Patent of US20150044506A1.
            </h4>
            <img
              src="../different-thinking_03.png"
              alt="image of double tube"
              className="pl-20"
            />

            <ul className="list-disc pl-10 mt-4  text-slate-800 mb-2">
              <li>To protect the flux, add one more tube to weld.</li>
              <li>
                Cause of the small tube diameter similar to the existing
                process, very simple to make a final products
              </li>
              <li>
                However some cumbersome works needed for double tube and some
                obstacles to adjust fill percent of flux
              </li>
            </ul>
          </div>
        </div>

        <div className="p-2">
          <h3 className="text-lg text-slate-500 font-semibold mb-4">
            3. Different Thinking for Welding Seam.
          </h3>
          <div>
            <img
              src="../different-thinking_04.png"
              alt="image of different thinking"
              className="pl-20"
            />

            <ul className="list-disc pl-10 mt-4  text-slate-800 mb-4">
              <li>
                Not to penetrate the laser beam to the flux, adjust the angle of
                laser.
              </li>
              <li>
                Or make the tube type of folded so the beam could not reach to
                the flux
              </li>
              <li>Could realize the simplest welding for seamless FCW.</li>
            </ul>
          </div>
        </div>
      </main>

      <aside className="w-80 min-w-[20rem] order-1 m-0 p-0 bg-slate-200">
        <Link href="/differentThinking">
          <img
            src="/differentThinking.png"
            alt="image of different Thinking"
            className="w-['300px'] h-['70px'] mb-6"
          />
        </Link>
        <div className="flex">
          <ul>
            <li>
              <Link href="/" className='text-blue-600 text-xl p-6 hover:font-semibold'>
                ⬅️ Home
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
