// pages/index.js
"use client";
import Head from "next/head";
import { useState } from "react";
import { useEffect } from "react";

import Link from "next/link";

export default function blockAssemble() {
  const [selectedOption, setSelectedOption] = useState("option1");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex">
      <header>
        <title>How to Assemble CRD Block</title>
        <link rel="icon" href="/logo.png" />
      </header>

      <main className="flex-grow order-2 bg-slate-200 pl-12 pt-2">
        <div>
          <div className="flex flex-row items-center mt-4" >
            <h2 className="px-8 pt-2 text-2xl text-slate-600 font-semibold pb-1">
              Assemble CRD Stage
            </h2>
            <Link href="./">
              <button className="w-20 ml-40 text-lg py-0 bg-blue-300 rounded-lg text-blue-600 hover:font-bold hover:bg-blue-400">
                Back
              </button>
            </Link>
          </div>
          {/* <h2 className="text-lg text-slate-600 font-semibold pl-4 pb-2">
            Choose Assemble Stage: </h2> */}

          <div className="flex flex-row justify-stretch mt-2 mx-2 pl-1 py-1">
            <fieldset className="border-gray-700 border flex flex-row justify-left h-14 rounded-md">
              <legend className="m-2 pl-2 text-slate-500 text-sm ">
                Select the procedure
              </legend>
              <div className="w-48 flex flex-row">
                <label className="text-slate-500 text-sm pl-0">
                  <input
                    className="ml-4 mr-2 "
                    type="radio"
                    value="option1"
                    checked={selectedOption === "option1"}
                    onChange={handleOptionChange}
                  />
                  1. Roll Case to Stage
                </label>
              </div>

              <div className="w-48 flex flex-row">
                <label className="text-slate-500 text-sm mr-2.5">
                  <input
                    className="ml-4 mr-2 "
                    type="radio"
                    value="option2"
                    checked={selectedOption === "option2"}
                    onChange={handleOptionChange}
                  />
                  2. Caution for Stage
                </label>
              </div>

              <div className="w-48 flex flex-row">
                <label className="text-slate-500 text-sm mr-2.5">
                  <input
                    className="ml-4 mr-2 "
                    type="radio"
                    value="option3"
                    checked={selectedOption === "option3"}
                    onChange={handleOptionChange}
                  />
                  3. Assemble to Block
                </label>
              </div>

              <div className="w-48 flex flex-row">
                <label className="text-slate-500 text-sm mr-2.5">
                  <input
                    className="ml-4 mr-2 "
                    type="radio"
                    value="option4"
                    checked={selectedOption === "option4"}
                    onChange={handleOptionChange}
                  />
                  4. Completed Block
                </label>
              </div>
            </fieldset>
          </div>
        </div>
        <div>
          {selectedOption === "option1" && (
            <div>
              <img
                src="../crd-assemble01.png"
                alt="image of crd assemble"
                className="w-[800px] m-2 bg-slate-100 shadow-lg"
              />
              <p className="m-2 pt-4 text-slate-500 text-base italic font-semibold">** Cautions</p>
              <ol className="list-disc pl-10 text-sm text-slate-700 mb-2 pb-2">
                <li>Special care on the shaft direction when inserting</li>
                <li>
                  Before assemble, all rolls should be inspected its profile.
                </li>
                <li>If possible, use bigger needle of needle bearing</li>
                <li>Proper force to lock the screw of roll case.</li>
              </ol>
            </div>
          )}
          {selectedOption === "option2" && (
            <div>
              <img
                src="../crd-assemble02.png"
                alt="image of crd assemble"
                className="w-[800px] m-2 bg-slate-100 shadow-lg"
              />
              <br />
              <p className="m-2 pt-4 text-slate-500 text-base italic font-semibold">** Cautions</p>
              <ol className="list-disc pl-10 text-sm text-slate-700 mb-2 pb-2">
                <li>
                  Special on assemble tolerances and need high skill and
                  experience
                </li>
                <li>
                  If there is a miss on case arrangement, the case will be
                  loosen during operation
                </li>
                <li>
                  When setting roll gap, NEVER let the rolls touch each other
                </li>
                <li>Inspect roll groove profile</li>
              </ol>
              <p className="m-2 pt-4 text-slate-500 text-base italic font-semibold">** 3 ways to set roll gap</p>
              <ol className="list-disc pl-10 text-sm text-slate-700 mb-2 pb-2">
                <li>Measuring diameter of drawn wire not exceeding 0.0125. </li>
                <li>
                  Use thickness gauge, considering spring back of wire diameter
                  after drawing before assemble.
                </li>
                <li>Use beam project to adjust roll gap.</li>
              </ol>
            </div>
          )}
          {selectedOption === "option3" && (
            <div>
              <img
                src="../crd-assemble03.png"
                alt="image of crd assemble"
                className="w-[800px] m-2 bg-slate-100 shadow-lg"
              />
              <br />
              <p className="m-2 pt-4 text-slate-500 text-base italic font-semibold">** Shaft Direction</p>
              <ol className="list-disc pl-10 text-sm text-slate-700 mb-2 pb-2">
                <li>When rotate shaft, roll move to wire in direction.</li>
                <li>Open the roll gap at maximum span.</li>
                <li>Rotate shaft at the direction of wire in.</li>
                <li>
                  Rotate same amounts of both shaft to keep wire position in
                  center.
                </li>
              </ol>
              <img src="../crd-roll-adjust.png" alt="roll adjust" className="w-[400px] m-2 pl-4 rounded-lg" />
            </div>
          )}
          {selectedOption === "option4" && (
            <div>
              <img
                src="../crd-assemble04.png"
                alt="image of crd assemble"
                className="w-[800px] m-2 bg-slate-100 shadow-lg"
              />
            </div>
          )}
        </div>

        <div className="howToUse"></div>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
      </main>

      {/* <aside className="w-80 min-w-[20rem] order-1 m-0 p-0 bg-slate-100" id="asideCRD02">
        <div className="p-6 pb-20">
          <h4 className="text-slate-500 font-bold p-2">Go To</h4>
          <ul className="sideUl space-y-2">
            <li className="relative group">
              <Link
                href="./blockDesign"
                className="text-slate-100 ml-4 text-sm"
              >
                Block Design
              </Link>
            </li>
            <li className="relative group">
              <Link href="../crd" className="text-slate-100 ml-4 text-sm">
                ⬅️ CRD Profile
              </Link>
            </li>
          </ul>
        </div>

        <div className="mt-20 m-4 text-slate-600 text-sm italic ">
          <p>** addition: When Insert shaft to the stage, refer below image</p>
        </div>
      </aside> */}
    </div>
  );
}
