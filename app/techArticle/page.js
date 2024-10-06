// pages/index.js
import ListItem01 from "./ListItem01";
import ListItem02 from "./ListItem02";
import { connectDB } from "/util/database.js";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import LoginSignup from "../component/LoginSignup";

export default async function techArticle() {
  let client = await connectDB;
  const db = client.db("forum");
  let results = await db.collection("tech_info").find().toArray();

  results = results.map((item) => ({
    ...item,
    _id: item._id.toString(), // ObjectId를 문자열로 변환
  }));
  //ObjectId 이외의 특수 객체나 Date 객체 등도 문제가 될 수 있으므로,
  //이런 객체들을 클라이언트로 전달할 때는 항상 문자열이나 직렬화 가능한 값으로 변환하는 것이 필요
  // console.log('----------------', results)
  let session = await getServerSession(authOptions);

  // console.log('---console.log-----', session.user.email)

  if (!session) {
    return <LoginSignup />;
  } else {
    return (
      <div
        className="flex flex-grow"
        style={{ minHeight: "calc(100vh - 112px)" }}
      >
        <header>
          <title>Articles, Patents and Books for wire drawing</title>
          <link rel="icon" href="/logo.png" />
        </header>

        <main className="flex-grow order-2 bg-slate-200 p-6">
          <div className="flex flex-row items-center mt-4">
            <h2 className="mx-16 pl-10 text-xl text-slate-600 font-semibold pb-4">
              Articles, Patents and Books worth to glance
            </h2>
            <Link href="/">
              <button className="w-40 ml-20 mb-4 py-2 text-lg bg-blue-300 rounded-lg text-blue-600 hover:font-bold hover:bg-blue-400">
                Back
              </button>
            </Link>
            
            {session.user.email === "admin@gmail.com" ? (
            <Link href="../techArticle/addData">
              <button className="w-40 ml-20 mb-4 py-2 text-lg bg-slate-300 rounded-lg text-blue-600 hover:font-bold hover:bg-blue-400">
                ADD DATA
              </button>
            </Link>
            ) : (<div></div>)}

          </div>

          {session.user.email === "admin@gmail.com" ? (
            <ListItem01 results={results} />
          ) : (
            <ListItem02 results={results} />
          )}

          {/* <ListItem02 results={results} /> */}
        </main>
      </div>
    );
  }
}
