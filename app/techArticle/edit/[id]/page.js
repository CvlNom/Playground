import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import LoginSignup from "@/app/component/LoginSignup";

export default async function editTech(props) {
  const db = (await connectDB).db("forum");
  let result = await db
    .collection("tech_info")
    .findOne({ _id: new ObjectId(props.params.id) });
  let session = await getServerSession(authOptions);

  // console.log(session.user.email)

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
      <div className="w-[900px] m-4">
        <h4 className="text-slate-500 text-xl font-bold p-2">Edit Page</h4>

        <form
          action="/api/tech/edit"
          method="POST"
          className="w-[800px] text-slate-600"
        >
          <div className="flex flex-row items-center m-2">
            <label className="text-slate-500 text-sm mr-2">
              Type(a-Article, p-Patent, b-Book):
            </label>
            <input
              name="type"
              className="w-20 text-center"
              defaultValue={result.type}
              required
            />{" "}
            <br />
          </div>
          <div className="flex flex-row items-center m-2">
            <label className="text-slate-500 text-sm mr-2 w-20">Title:</label>
            <input
              name="title"
              className="w-[800px] p-1"
              defaultValue={result.title}
              required
            />{" "}
            <br />
          </div>
          <div className="flex flex-row items-center m-2">
            <label className="text-slate-500 text-sm mr-2 w-20">Source:</label>
            <input
              name="source"
              className="w-[800px] p-1"
              defaultValue={result.source}
              required
            />{" "}
            <br />
          </div>
          <div className="flex flex-row items-center m-2">
            <label className="text-slate-500 text-sm mr-2 w-20">
              Image url:
            </label>
            <input
              name="no"
              className="w-[800px] p-1"
              defaultValue={result.no}
              required
            />{" "}
            <br />
          </div>
          <div className="flex flex-row items-center m-2">
            <label className="text-slate-500 text-sm mr-0 w-20">Author:</label>
            <input
              name="author"
              className="w-60 p-1"
              defaultValue={result.author}
              required
            />{" "}
            <br />
          </div>
          <div className="flex flex-col m-2 mt-4">
            <label className="text-slate-500 text-sm mb-2">Summary:</label>
            <textarea
              name="summary"
              defaultValue={result.summary}
              className="p-4"
            />
          </div>

          <div className="hidden">
            <input name="_id" defaultValue={result._id} /> <br />
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
    </div>
  );
}
