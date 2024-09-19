// pages/index.js
"use client";
import Head from "next/head";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import styles from "./MeasureFill.module.css";

export default function FeedAbility() {
  const [selectedOption, setSelectedOption] = useState("option1");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    console.log("----------measureFill");
  };

  return (
    <div className={styles.fill}>
      <div className="mainContent">
        <div>
          <h4>1. Why feedibility of the welding wire</h4>
          <ol>
            <li>
              The feed ability of welding wire is the key element of the
              productivity on the welding especially semi-automated welding
              works at the shipyard.
            </li>
            <li>
              Lots of articles and patents describes the things below and do not
              explain why.
              <ul style={{ marginTop: "10px" }}>
                <li>Wire strength(Hardness)</li>
                <li>Wire surface</li>
                <li>The amounts of MoS<sub>2</sub>, PTFE etc.</li>
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
          <h4>2. Simple mechanism</h4>
          <div style={{ paddingLeft: "100px" }}>
            <img
              src="../feed_ability.png"
              style={{ width: "500px" }}
              alt="image of mechanism"
            />
          </div>
          <p>For constant and stable feed ability on welding</p>
          <ul>
            <li>
              Increase the friction between wire and feed roll: Wire hardness
              and surface condition.
            </li>
            <li>Reduce cable resistance : Cast = Wire Strength(Hardness)</li>
            <li>
              Reduce electrical resistance at the contact tip: Wire surface,
              Release Agent
            </li>
          </ul>
        </div>

        <div>
          <h4>3. Different Thinking </h4>
          <ol>
            <li>
              The main cause of the feedibility came from contact tip by the
              electrical property between contact tip and wire.
            </li>
            <li>
              Because of small section area of wire compare to the contact tip
              and electrical cable from the weld, there are huge amounts of heat
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
              from the wire surface melted and gather to the contact point of
              wire and tip so build bigger metal debris resulting wire jamming.
            </li>
          </ol>

		  <div style={{ paddingLeft: "30px" }}>
            <img
              src="../contact_analyse_1.png"
              style={{ width: "750px" }}
              alt="image of inside contact tip"
            />
          </div>
        </div>

        <div>
          <h4>
            4. Solutions to stabilize electrical contact between contact tip and
            wire based on different-thinking
          </h4>
          <ol>
            <li>
              Contact surface should be cleaned and smooth both contact tip and
              wire surface.
              <ul style={{ marginTop: "10px" }}>
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
              <ul style={{ marginTop: "10px" }}>
                <li>
                  Reduce metal to metal contact as much as possible.
                </li>
                <li>
                  In case of using rich lubricant, could reduce metal to metal contacts but hard to clean wire surface after drawing.
                </li>
                <li>
                  This is why UB process introduced CRD drawing process and mechanical cleaning devices.
                </li>
                <li>
                  Cleaning device remove drawing lubricants and also metal debris from wire surface.
                </li>
              </ul>
            </li>
            <li>
              Apply Release Agent - Seperate wire from contact tip
              <ul style={{ marginTop: "10px" }}>
                <li>
				Even with better surface of tip and wire, there is electrical sparks between wire and tip making local welding that the wire attached to the tip. 
                </li>
                <li>
				There is another property of lubricant is release character so called a release agent which is the graphite at the casting factory in order not to attach melted metal to the mould sand.
                </li>
                <li>
				The best release agent is MoS2, PTFE, Graphic and fatty acid. (Actually lubricant itself is a release agent)
                </li>
               
              </ul>
            </li>




          </ol>
        </div>

        

        <div className={styles.empty}></div>
        <p>empty </p>
        <p> </p>
        <p> </p>
      </div>
    </div>
  );
}
