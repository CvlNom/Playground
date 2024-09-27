// pages/index.js
"use client";
import Head from "next/head";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";

export default function MeasureFill() {
  const [selectedOption, setSelectedOption] = useState("option1");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    console.log("----------measureFill");
  };

  return (
    <div className="m-6">
      <div >
        <h4 className="text-lg text-slate-500 font-semibold mb-1 mt-2">1. Why control fill percent</h4>
        <ol className="list-disc pl-10 text-base text-slate-700 mb-2">
          <li>Decide the quality of the flux cored welding wire.</li>
          <li>To meet the chemical composition of welded metal.</li>
          <li>In order to satisfy the mechanical property.</li>
        </ol>
      </div>

      <div>
        <h4 className="text-lg text-slate-500 font-semibold mb-1 mt-4">2. Formula</h4>
        <ul className="list-disc pl-10 text-base text-slate-700 mb-2">
          <li>[Flux Weight / (Strip Weight + Flux Weight)] x 100</li>
        </ul>
      </div>

      <div>
        <h4 className="text-lg text-slate-500 font-semibold mb-1 mt-4">3. Normal Methods to control</h4>
        <ol className="list-disc pl-10 text-base text-slate-700 mb-2">
          <li>
            At the beginning of production, fill the flux and draw to the final.
          </li>
          <li>Cut the wire sample about 80cm.</li>
          <li>Weigh wire weight and open the seam with tools.</li>
          <li>Remove the flux and weigh the wire without the flux.</li>
          <li>Calculate the fill percent.</li>
          <li>
            In case calculated ratio do not meet the specification, adjust fill
            amounts.
          </li>
          <li>Then repeat above activity.</li>
        </ol>

        <p className="text-sm text-slate-800 ml-6">
          {" "}
          ** Need additional device to record fill percent trend for history{" "}
        </p>
      </div>

      <div>
        <h4 className="text-lg text-slate-500 font-semibold mb-1 mt-4">4. Why different thinking</h4>
        <ol className="list-disc pl-10 text-base text-slate-700 mb-2">
          <li>Significant measuring tolerance by the operator.</li>
          <li>
            Have to stop the machine during the check procedure. (Huge downtime)
          </li>
          <li>Need space for the seam opener and removing the flux.</li>
          <li>Need recoding data for the fill percent history.</li>
        </ol>
      </div>

      <div>
        <h4 className="text-lg text-slate-500 font-semibold mb-1 mt-4">5. How to and its principle</h4>
        <ol className="list-disc pl-10 text-base text-slate-700 mb-2">
          <li>Bernoulli’s Principle.</li>
          <img className="my-4"
            src="../fillPercent.png"
            style={{ width: "700px" }}
            alt="image of principle"
          />

          <p className="pl-80 text-lg text-slate-700 font-semibold">A1V1 = A2V2</p>
          <li>Could get the V1, V2 and Diameter2</li>
          <li>So could calculate Diameter1.</li>
          <li>Calculate the A1.(section area)</li>
          <li>
            Subtract the strip area (from sensor and width spec.)and get the
            flux area.
          </li>
          <li>Multiply the flux density then finally get the flux weight.</li>
          <li>Need data of the flux density(get the value from XRF sample).</li>
        </ol>
      </div>

      <div>
        <h4 className="text-lg text-slate-500 font-semibold mb-1 mt-4">6. How to realize</h4>
        <ol className="list-disc pl-10 text-base text-slate-700 mb-2">
          <li>
            Input flux specific density and compressed density to IT system.
          </li>
          <li>
            When placed the flux at the production machine, read the flux tag
          </li>
          <li>
            Application software get the density data from IT system and V1, V2
            from the machine
          </li>
          <li>Input wire diameter by operator.</li>
          <li>
            Application software has functions to show the trend of fill percent
            in real time.
          </li>
          <li>
            Also has a function to record its data and send real-time data of
            fill percent and its speed .
          </li>
          <li>
            With this real-time data, able to construct factory monitoring
            system.
          </li>
        </ol>
      </div>

      <div>
        <h4 className="text-lg text-slate-500 font-semibold mb-1 mt-4">7. Key for success </h4>
        <ol className="list-disc pl-10 text-base text-slate-700 mb-2">
          <li>Strong leadership.</li>
          <li>Construct new system</li>
        </ol>
      </div>

      
    </div>
  );
}
