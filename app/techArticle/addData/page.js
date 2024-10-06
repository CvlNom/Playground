import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Link from "next/link";

export default async function addDate(req, res) {
  let session = await getServerSession(authOptions);

  if (!session) {
    return (
      <div className="loginSignup">
        <p> 로그인 후 글을 작성할 수 있습니다.</p>
        <Link href="/api/auth/signin"> 로그인 </Link> <br />
        <p> 회원 등록이 안되어 있나요?</p>
        <Link href="/register"> Sign UP (회원가입) </Link>
      </div>
    );
  } else {
    return (
      <div
        className="flex flex-grow"
        style={{ minHeight: "calc(100vh - 112px)" }}
      >
        <header>
          <title>add tech data: wire-lab</title>
          {/* <h2>Posting Agenda</h2> */}
          <link rel="icon" href="/logo.png" />
        </header>

        <main className="flex-grow order-2 bg-slate-200 pl-12 pt-2">
          <div className="w-[900px]">
            <h3 className="text-slate-500 text-xl font-bold p-2">
              Add Technical Reports
            </h3>
            <form action="/api/tech/new" method="POST"
				className="w-[800px]">
              <div className="flex flex-row items-center m-2">
                <label className="text-slate-500 text-sm mr-2">Type(a-Article, p-Patent, b-Book):</label>
                <input name="type" className="w-20 text-center" required /> <br />
              </div>
              <div className="flex flex-row items-center m-2">
                <label className="text-slate-500 text-sm mr-2 w-20">Title:</label>
                <input name="title" className="w-[800px] p-1" required /> <br />
              </div>
              <div className="flex flex-row items-center m-2">
                <label className="text-slate-500 text-sm mr-2 w-20">Source:</label>
                <input name="source" className="w-[800px] p-1" required /> <br />
              </div>
              <div className="flex flex-row items-center m-2">
                <label className="text-slate-500 text-sm mr-2 w-20">
                  Image url:
                </label>
                <input name="no" className="w-[800px] p-1" required /> <br />
              </div>
              <div className="flex flex-row items-center m-2">
                <label className="text-slate-500 text-sm mr-0 w-20">Author:</label>
                <input name="author" className="w-60 p-1" required /> <br />
              </div>
              <div className="flex flex-col m-2 mt-4">
                <label className="text-slate-500 text-sm mb-2">
                  Summary:
                </label>
                <textarea name="summary"  />
              </div>
              <br />
              {/* <WriteDate name="writeDate" /> */}
              <button
                className="bg-green-200 border-red-700 border-4 rounded-lg hover:bg-green-300"
                type="submit"
              >
                POST
              </button>
            </form>
          </div>
        </main>
        <aside
          className="w-80 min-w-[20rem] order-1 m-0 p-0 bg-slate-100"
          id="asideWrite"
        ></aside>
      </div>
    );
  }
}
