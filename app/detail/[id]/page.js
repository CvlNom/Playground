import { ObjectId } from "mongodb";
import { connectDB } from "@/util/database";
import Comment from "./Comment";

export default async function Detail(props) {
  const db = (await connectDB).db("forum");
  let addViews = await db
    .collection("post")
    .updateOne({ _id: new ObjectId(props.params.id) }, { $inc: { views: 1 } });
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div
      className="flex flex-grow"
      style={{ minHeight: "calc(100vh - 112px)" }}
    >
      <header>
        <title>Forum: Detail</title>
        <link rel="icon" href="/logo.png" />
      </header>

      <main className="flex-grow order-2 bg-slate-200 pl-12 pt-2">
        <h3 className="px-4 text-xl text-slate-600 font-semibold pb-1">
          Detailed Content
        </h3>

        <div className="flex flex-row w-[850px] bg-slate-50 items-center rounded-lg shadow-sm mb-4">
          <p className="text-slate-500 text-xs font-semibold w-16 text-center py-2" >Title:</p>
          <p className="text-slate-700 text-sm w-[700px] py-2">{result.title}</p>
          <p className="text-slate-500 text-xs w-[120px] py-2">
            {result.userID}-{result.views}
          </p>
        </div>

        <div className="text-slate-700 text-sm w-[850px] bg-slate-50 p-4 rounded-2xl shadow-2xl mb-4">
          <p style={{ whiteSpace: "pre-wrap" }}>{result.content}</p>
        </div>

        <Comment _id={result._id.toString()} />
		
      </main>
      <aside
        cclassName="w-80 min-w-[20rem] order-1 m-0 p-0 bg-slate-100" 
        id="asideDetail"
      >
        <h4 className='text-blue-600 text-2xl italic font-bold'>격려와 용기의 코멘트를..</h4>
        <h4 className='text-blue-600 text-xl italic font-bold'>SEND Encourage and Support</h4>
      </aside>
    </div>
  );
}
