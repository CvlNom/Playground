import Head from "next/head";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Link from "next/link";
import LoginSignup from "../../component/LoginSignup";
import Footer from "../../component/Footer";

export default async function fillRatio(req, res) {
  let session = await getServerSession(authOptions);

  if (!session) {
    return <LoginSignup />;
  } else {
    return (
      <div className="flex">
        <header>
          <title>Why CRD Drawing</title>
          <link rel="icon" href="/logo.png" />
        </header>

        <main className="flex-grow order-2 bg-slate-200 p-6">
          <h3 className="pl-20 text-2xl text-slate-600 mb-4">
            Why apply CRD for wire drawing
          </h3>

          <div>
            <h4 className="text-lg text-slate-500 font-semibold mb-1 mt-2">
              1. Advantages compare to PCD.
            </h4>
            <ol className="list-disc pl-10 text-base text-slate-700 mb-2 py-2">
              <li>
                Less Energy needed than PCD
                <ul className="list-decimal pl-14 py-2 text-base text-slate-700 mb-2">
                  <li>
                    Save the Environment from CO<sub>2</sub>
                  </li>
                  <li>Make smaller machine for wire drawing</li>
                </ul>
              </li>

              <li>
                More plastic deformation than PCD
                <ul className="list-decimal pl-14 py-2 text-base text-slate-700 mb-2">
                  <li>Give more reduction per block adding reducing roll</li>
                  <li>Able to remove heat-treatment process.</li>
                </ul>
              </li>
            </ol>
          </div>
          <div className="px-4 py-2">
            <img
              src="../crd_energy.png"
              style={{ width: "900px" }}
              alt="image of mechanism"
            />
          </div>

          <div>
            <h4 className="text-lg text-slate-500 font-semibold mb-1 mt-2">
              2. Drawing Mechanism of CRD.
            </h4>
            <ol className="list-disc pl-10 text-base text-slate-700 mb-2 py-2">
              <li>
                Image Explain
                <ul className="list-decimal pl-14 py-2 text-base text-slate-700">
                  <li>
                    Top image shows side of reducing roll and wire showing the section marks
                  </li>
                  <li>S1 to S5 are section cut of drawing process</li>
                </ul>
              </li>
          <div className="px-4 py-2">
            <img
              src="../crd_draw_section.png"
              style={{ width: "900px" }}
              alt="image of mechanism"
            />
          </div>

              <li>
                S1
                <ul className="list-decimal pl-14 py-2 text-base text-slate-700 mb-2">
                  <li>Roll edges are about to touch wire</li>
                  <li>Edge Round is a factor to give a contact damage.</li>
                </ul>
              </li>

              <li>
                S2
                <ul className="list-decimal pl-14 py-2 text-base text-slate-700 mb-2">
                  <li>Now rolls reduce wire</li>
                  <li>Need lubricant to make wire go to the roll groove smoothly.</li>
                </ul>
              </li>
              <li>
                S3
                <ul className="list-decimal pl-14 py-2 text-base text-slate-700 mb-2">
                  <li>Reduction rate and lubrication decide the wire defects</li>
                  <li>Image shows the possibility of wire defects.</li>
                </ul>
              </li>
              <li>
                S4
                <ul className="list-decimal pl-14 py-2 text-base text-slate-700 mb-2">
                  <li>Now wire is center of roll </li>
                  <li>Shape of ovaluation .</li>
                </ul>
              </li>
              <li>
                S5
                <ul className="list-decimal pl-14 py-2 text-base text-slate-700 mb-2">
                  <li>Now wire leave rolls</li>
                  <li>Reduction rate, roll profile, lubrication and smooth roll surface are key for CRD drawing.</li>
                </ul>
              </li>
            </ol>
          </div>



          <div>
            <h4 className="text-lg text-slate-500 font-semibold mb-1 mt-2">
              3. Wire Defects by CRD.
            </h4>
            
          <div className="px-4 py-2">
            <img
              src="../crd_defects.png"
              style={{ width: "900px" }}
              alt="image of mechanism"
            />
          </div>
            
            
            <ol className="list-disc pl-10 text-base text-slate-700 mb-2 py-2">
              <li>
                Causes of Wire Defects (Fin)
                <ul className="list-decimal pl-14 py-2 text-base text-slate-700">
                  <li>Too much reduction rate</li>
                  <li>Poor lubrication</li>
                  <li>Poor roll setting</li>
                  <li>Low temperature</li>
                  <li>Worn roll surface</li>
                  <li>Problem on bearing parts</li>
                  


                </ul>
              </li>

             
            </ol>
          </div>




        </main>

        <aside className="w-80 min-w-[20rem] order-1 m-0 p-0 bg-slate-100">
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
                <Link
                  href="/"
                  className="text-blue-600 text-xl p-6 hover:font-semibold"
                >
                  ⬅️ Home
                </Link>
              </li>
              {/* <li>
								<Link href='../forming/rollArrangement' style={{ color: 'white' }}>
									Stand Arrangement
								</Link>
							</li> */}
            </ul>
          </div>
          <div></div>
        </aside>
      </div>
    );
  }
}
