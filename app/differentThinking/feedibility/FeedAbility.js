// pages/index.js
"use client";
import Head from "next/head";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import styles from "./Feed.module.css";
import TestComp from "@/app/component/TestComp";
// import TestComp from "@/app/component/TestComp";

export default function FeedAbility() {
  const [selectedOption, setSelectedOption] = useState("option1");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    console.log("----------measureFill");
  };

  return (
    <div className="m-6">
      <div>
        <h4 className="text-lg text-slate-500 font-semibold mb-1 mt-2">
          1. Why feedibility of the welding wire
        </h4>
        <ol className="list-disc pl-10 text-base text-slate-700 mb-2 py-2">
          <li>
            The feed ability of welding wire is the key element of the
            productivity on the welding especially semi-automated welding works
            at the shipyard.
          </li>
          <li>
            Lots of articles and patents describes the things below and do not
            explain why.
            <ul className="list-decimal pl-14 py-2 text-base text-slate-700 mb-2">
              <li>Wire strength(Hardness)</li>
              <li>Wire surface</li>
              <li>
                The amounts of MoS<sub>2</sub>, PTFE etc.
              </li>
            </ul>
          </li>
          <li>
            Mosts of articles and patents describe their own technology with
            difficult terms and theory which the normal engineer don’t
            understand and I am going to explain what I thinking later on this
            subjects in an easy way.
          </li>
        </ol>
      </div>

      <div>
        <h4 className="text-lg text-slate-500 font-semibold mb-1 mt-2">
          2. Simple mechanism
        </h4>
        <div className="px-16 py-4">
          <img
            src="../feed_ability.png"
            style={{ width: "500px" }}
            alt="image of mechanism"
          />
        </div>
        <p className="px-6 py-2 text-slate-700 font-semibold">
          For constant and stable feed ability on welding
        </p>
        <ul className="list-disc pl-10 text-base text-slate-700 mb-2 py-2">
          <li>
            Increase the friction between wire and feed roll: Wire hardness and
            surface condition.
          </li>
          <li>Reduce cable resistance : Cast = Wire Strength(Hardness)</li>
          <li>
            Reduce electrical resistance at the contact tip: Wire surface,
            Release Agent
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-lg text-slate-500 font-semibold mb-1 mt-2">
          3. Different Thinking{" "}
        </h4>
        <ol className="list-disc pl-10 text-base text-slate-700 mb-2 py-2">
          <li>
            The main cause of the feedibility came from contact tip by the
            electrical property between contact tip and wire.
          </li>
          <li>
            Because of small section area of wire compare to the contact tip and
            electrical cable from the weld, there are huge amounts of heat
            generated from wire and with small stop of wire movement, wire
            burned out.{" "}
          </li>
          <li>
            Also unstable contact between contact tip and wire, there are lots
            of electrical sparks which make extra heat and worse case the wire
            welded to the contact tip blocking wire feed.
          </li>
          <li>
            Because of huge temperature inside tip, small particles of metal
            from the wire surface melted and gather to the contact point of wire
            and tip so build bigger metal debris resulting wire jamming.
          </li>
        </ol>

        <div className="pl-20">
          <img
            src="../contact_analyse_1.png"
            style={{ width: "800px" }}
            alt="image of inside contact tip"
          />
        </div>
      </div>

      <div>
        <h4 className="text-lg text-slate-500 font-semibold mb-1 mt-2">
          4. Solutions to stabilize electrical contact between contact tip and
          wire based on different-thinking
        </h4>
        <ol className="list-disc pl-10 text-base text-slate-700 mb-2 py-2">
          <li>
            Contact surface should be cleaned and smooth both contact tip and
            wire surface.
            <ul className="list-decimal pl-14 py-2 text-base text-slate-700 mb-2">
              <li>
                Expensive contact tip last more and make high productivity
              </li>
              <li>
                The surface of above tip was polished for better electrical
                contacts
              </li>
            </ul>
          </li>
          <li>
            Better drawing practice - Smooth and clean wire surface
            <ul className="list-decimal pl-14 py-2 text-base text-slate-700 mb-2">
              <li>Reduce metal to metal contact as much as possible.</li>
              <li>
                In case of using rich lubricant, could reduce metal to metal
                contacts but hard to clean wire surface after drawing.
              </li>
              <li>
                This is why UB process introduced CRD drawing process and
                mechanical cleaning devices.
              </li>
              <li>
                Cleaning device remove drawing lubricants and also metal debris
                from wire surface.
              </li>
            </ul>
          </li>
          <li>
            Apply Release Agent - Seperate wire from contact tip
            <ul className="list-decimal pl-14 py-2 text-base text-slate-700 mb-2">
              <li>
                Even with better surface of tip and wire, there is electrical
                sparks between wire and tip making local welding that the wire
                attached to the tip.
              </li>
              <li>
                There is another property of lubricant is release character so
                called a release agent which is the graphite at the casting
                factory in order not to attach melted metal to the mould sand.
              </li>
              <li>
                The best release agent is MoS2, PTFE, Graphic and fatty acid.
                (Actually lubricant itself is a release agent)
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
}
