import Head from "next/head";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Link from "next/link";
import LoginSignup from "../../component/LoginSignup";
import Footer from "../../component/Footer";
import MeasureFill from "./MeasureFill";
import styles from "./MeasureFill.module.css";

export default async function fillRatio(req, res) {
  let session = await getServerSession(authOptions);

  if (!session) {
    return <LoginSignup />;
  } else {
    return (
      <div className="flex">
        <header>
          <title>Control Fill Ratio for FCW</title>
          <link rel="icon" href="/logo.png" />
        </header>

        <main className="flex-grow order-2 bg-slate-200 p-6">
          <h3 className="pl-20 text-2xl text-slate-600 mb-4">
            Control Fill Ratio for FCW
          </h3>
          <MeasureFill />
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
