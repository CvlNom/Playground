// import { connectDB } from '@/util/database';
// import { MongoClient } from 'mongodb';
import Link from "next/link";
import WeatherBox from "./component/WeatherBox";
import Footer from "./component/Footer";
import AD_side from "./component/AD_side";

export default async function Home() {
  // const client = await connectDB;
  // const db = client.db('forum');

  // //post에 있는 모든 자료를 가져오기. 서버 컴포넌트에서만 작성
  // let result = await db.collection('post').find().toArray();
  // console.log(result)

  return (
    <div className='flex flex-grow' style={{minHeight: 'calc(100vh - 112px)'}}>
      {/* <header>
        <title>HOME: FCW Design Tool</title>
		</header> */}
      <aside className="w-80 min-w-[20rem] order-1 m-0 p-0 bg-slate-100">
        <Link href="./differentThinking">
          <img
            src="/differentThinking.png"
            alt="image of different Thinking"
            className="w-['300px'] h=['70px']"
          />
        </Link>
        <div className="w-['300px'] py-4">
          {/* <p> UPDATE!!</p> */}
          <div className="flex items-start justify-left">
            <ol className="ml-2 text-sm">
              <li className="py-2 pl-4 ">
                <Link
                  href="./differentThinking/01"
                  className="text-gray-600 hover:font-semibold hover:text-gray-800"
                >
                  1. Welding Seam for FCW
                </Link>
              </li>
              <li className="py-2 pl-4 ">
                <Link
                  href="./differentThinking/fillRatio"
                  className="text-gray-600 hover:font-semibold hover:text-gray-800"
                >
                  2. Controlling Fill Ratio for FCW
                </Link>
              </li>
              <li className="py-2 pl-4 ">
                <Link
                  href="./differentThinking/feedibility"
                  className="text-blue-600 font-semibold hover:font-bold hover:text-gray-800"
                >
                  3. Feed Ability of FCW<sup>*new*</sup>
                </Link>
              </li>
            </ol>
          </div>
          <WeatherBox />
          <AD_side company={['./as-logo.png', '아성 정밀', '(82)-010-3554-5557', 'asalloy@naver.com']} deal={['Carbide Drawing Die', 'Tube Forming & Drawing Roll', 'Carbide Sintering']}/>

          <div className="mt-4 mb-10 bg-slate-50 rounded-2xl shadow-lg">
            <img
              src="/roll_reducing.png"
              alt="image of roll drawing"
              className="w-['300px'] h=['300px'] rounded-xl"
            />
            <p className="p-2 font-semibold text-xs text-slate-500">
              <sup>**</sup>image shows how rolls contact wire.
            </p>
          </div>
        </div>
      </aside>

      <main className="flex-grow order-2 bg-slate-200">
        <link rel="icon" href="/logo.png" />
        <div className="flex flex-col justify-center items-center my-5">
          <h1 className="text-2xl font-bold text-slate-600 mt-4 mb-6">
            Welcome to wire-lab.net
          </h1>

          <h4 className="text-3xl font-bold text-blue-600 uppercase mt-6 mb-2">
            design tips and information
          </h4>
          <h5 className="text-2xl font-bold text-blue-700 mb-6">
            for Wire & Tube Factory.
          </h5>
        </div>

        <div className="mx-6 my-10 grid lg:grid-cols-4 gap-4">
          <div className="bg-white rounded overflow-hidden shadow-md relative hover:shadow-lg">
            <Link href="/pcd">
              <img
                src="./home-PCD.png"
                alt="drawing die"
                className="w-full h-48 sm:h-48 object-contain"
              />
              <div className="m-4">
                <span className="text-sm text-slate-600 font-semibold">
                  Die Profile & Drawing Sequence
                </span>
              </div>
              <div className="bg-secondary-100 text-secondary-200 text-xs uppercase font-bold rounded-full p-2 absolute top-0 ml-2 mt-2">
                <span className="text-slate-400">PCD</span>
              </div>
            </Link>
          </div>
          <div className="bg-white rounded overflow-hidden shadow-md relative hover:shadow-lg">
            <Link href="/crd">
              <img
                src="./home-CRD.png"
                alt="stew"
                className="w-full h-48 sm:h-48 object-contain"
              />
              <div className="m-4">
                <span className="text-sm text-slate-600 font-semibold">
                  CRD Profile & Block Design
                </span>
              </div>
              <div className="bg-secondary-100 text-secondary-200 text-xs uppercase font-bold rounded-full p-2 absolute top-0 ml-2 mt-2">
                <span className="text-slate-400">CRD</span>
              </div>
            </Link>
          </div>

          <div className="bg-white rounded overflow-hidden shadow-md relative hover:shadow-lg">
            <Link href="/forming">
              <img
                src="./home-flower.png"
                alt="curry"
                className="w-full h-48 sm:h-48 object-cover"
              />
              <div className="m-4">
                <span className="text-sm text-slate-600 font-semibold">
                  Design Tube Forming Roll
                </span>
              </div>
              <div className="bg-secondary-100 text-secondary-200 text-xs uppercase font-bold rounded-full p-2 absolute top-0 ml-2 mt-2">
                <span className="text-slate-400">Tube Forming</span>
              </div>
            </Link>
          </div>

          <div className="bg-white rounded overflow-hidden shadow-md relative hover:shadow-lg">
            <Link href="./spool">
              <img
                src="./home-spool.png"
                alt="curry"
                className="w-full h-48 sm:h-48 object-contain"
              />
              <div className="m-4">
                <span className="text-sm text-slate-600 font-semibold">
                  Design Plastic Spool
                </span>
              </div>
              <div className="bg-secondary-100 text-secondary-200 text-xs uppercase font-bold rounded-full p-2 absolute top-0 ml-2 mt-2">
                <span className="text-slate-400">Spool</span>
              </div>
            </Link>
          </div>
        </div>

        {/* <div className='homeItem1' id='humidCheck'>
					<WeatherBox />
				</div> */}
        <div className="flex flex-col items-center py-2">
          <p className="text-slate-500 text-sm">To get full access, Log In here.</p>
          <Link
            href="/api/auth/signin"
            className="my-6 flex text-lg font-semibold text-slate-700 bg-green-200 hover:font-bold hover:bg-green-400 px-10 py-2 rounded-full border-red-500 border-2"
          >
            LOG IN
          </Link>
          <p className="py-1 text-slate-500 text-sm">
            To use all contents, Sign UP here. Only need ID & e-mail address.
          </p>
          <Link
            href="/register"
            className="my-6 flex text-lg font-semibold text-slate-800 bg-green-200 hover:font-bold hover:bg-green-400 px-10 py-2 rounded-full border-red-500 border-2"
          >
            SIGN UP
          </Link>
          <p className="text-sm text-slate-800">
            wire-lab.net do not request any personal information except e-mail
            for Sign Up.
          </p>
          {/* <p>&nbsp;</p> */}
        </div>
      </main>
    </div>
  );
}
