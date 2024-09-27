// pages/index.js

import Link from "next/link";

export default function principleOfLL() {
  const tableData = [
    ["Invest Costs", "None", "Spool Mould", "Automatic M/C"],
    [
      "Method",
      "Operator use wood or plastic stick to arrange the last distance. To do this, need to stop the machine.",
      "Grooved Spool covers a wire diameter variation, so do not need to stop the machine.",
      "Machine calculate the wire diameter during first layer and adjust the distance before wire arrive.",
    ],
    ["Productivity", "Extremely Low", "High", "Known High"],
    [
      "Benefits",
      "No Investment, good for small production.",
      "One operator can run 2 machine with small investment.",
      "Need more space and investment costs, also need expensive spool material.",
    ],
    ["Manufacturer", "-", "Bogang Precision Co.", "Gimax s.r.l & Lamnea Bruk"],
  ];
  const rowHeights = [50, 80, 50, 80, 50];

  return (
    <div className="" style={{ minHeight: "calc(100vh - 112px)" }}>
      <header>
        <title>Level Layer: wire-lab</title>
        <link rel="icon" href="/logo.png" />
      </header>

      <main className="bg-slate-200 pl-12 pt-2">
        <div className="">
          <div className="flex flex-row items-center mt-4 mb-4">
            <h2 className="px-0 text-xl text-slate-600 font-semibold pb-1">
              Principle of Level Layer Winding
            </h2>
            <Link href="./">
              <button className="w-20 ml-40 text-lg py-0 bg-blue-300 rounded-lg text-blue-600 hover:font-bold hover:bg-blue-400">
                Back
              </button>
            </Link>
          </div>

          <div className="mb-4">
            <p className="text-slate-500 text-lg mb-2 font-semibold my-4">
              1. Basic Principle{" "}
            </p>
            <img
              src="../level-layer02.png"
              alt="image of crd assemble"
              className="pl-4 w-[750px] pb-4"
            />
            <p className="text-slate-700 text-base font-bold ml-44 mb-4">
              {" "}
              Width = (wire diameter x lap count) + radius of wire
            </p>
            <ol className="list-decimal text-sm  text-slate-600 ml-6 pl-6">
              <li>
                At the last lap to the wall, left space should be the half of
                wire diameter.
              </li>
              <li>Wire laid on the between wire laps on next layer.</li>
              <li>
                The wall on both side should be straight up to maintain same
                space.
              </li>
              <li>The problems come out the wire diameter variates.</li>
            </ol>
          </div>

          <div className="ml-4 mb-4">
            <p className="text-slate-500 text-base mb-2 font-semibold mt-4">
              1.1 Failed Case of smaller diameter than target diameter.
            </p>
            <img
              src="../level-layer01.png"
              alt="image of crd assemble"
              className="pl-8 w-[750px] pb-1"
            />
            <br />
            <ol className="list-decimal text-sm  text-slate-600 ml-6">
              <li>
                Cause of die wear at the drawing, the diameter of wire variates.
              </li>
              <li>
                Because of too much space at the last lap, un-even level area
                becomes wider as layer added.
              </li>
              <li>
                To prevent this problem, operator stop the machine and adjust
                the distance of last lap by hitting the wire.
              </li>
              <li>
                The possibility of reverse winding goes up, resulting low
                productivity.
              </li>
            </ol>
          </div>

          <div className="ml-4 mb-4">
            <p className="text-slate-500 text-base mb-2 font-semibold mt-4">
              1.2 Failed case of bigger diameter than target diameter.
            </p>
            <img
              src="../level-layer03.png"
              alt="image of crd assemble"
              className="pl-8 w-[750px] pb-1"
            />
            <br />
            <ol className="list-decimal text-sm  text-slate-600 ml-6">
              <li>The wire diameter becomes bigger as die wear out.</li>
              <li>
                As a result, there is no space to layer on next layer to the
                wall
              </li>
              <li>
                Then wire goes next furrow between bottom wires and start to
                ruin the principle
              </li>
              <li>
                To keep the principle, operator try to push wire to the wall by
                stick, however the failure rate goes up effecting winding
                productivity.
              </li>
            </ol>
          </div>

          <div>
            <div className="mainContent">
              <h2 className="text-slate-500 text-base mb-2 font-semibold mt-4">**Ref. Ways to make the Level Layer Winding</h2>
              <table border="1">
                <thead style={{ height: "40px" }}>
                  <tr>
                    <th style={{ width: "150px" }}>Comparison Item</th>
                    <th style={{ width: "250px" }}>By Operator</th>
                    <th style={{ width: "250px" }}>Apply Grooved Spool</th>
                    <th style={{ width: "250px" }}>
                      Introduce Full Automatic M/C
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, rowIndex) => (
                    <tr
                      key={rowIndex}
                      style={{ height: `${rowHeights[rowIndex]}px` }}
                    >
                      {row.map((cell, colIndex) => (
                        <td
                          key={colIndex}
                          style={{ width: colIndex === 0 ? "150px" : "250px" }}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="howToUse"></div>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
      </main>
    </div>
  );
}
