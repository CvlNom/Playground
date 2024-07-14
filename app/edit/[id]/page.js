import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import LoginSignup from "@/app/component/LoginSignup";

export default async function Edit(props) {
	const db = (await connectDB).db("forum")
	let result = await db.collection('post').findOne({ _id: new ObjectId(props.params.id) });
	let session = await getServerSession(authOptions)

	// console.log(session.user.email)

	if (session.user.email != result.author) {
		return (
			<div>
				<p> 본인이 작성된 글만 수정할 수 있습니다.</p>
				<LoginSignup />
			</div>
		)

	} else {
		return (
			<div className="p-20">
				<h4>Edit Page</h4>
				<form action="/api/post/edit" method="POST">
					<input name="title" defaultValue={result.title} required /> <br />
					<textarea name="content" defaultValue={result.content} row="50" cols="80" /><br />
					<input style={{ display: 'none' }}
						name="_id" defaultValue={result._id.toString()} />
					<button type="submit">Edit Confirm</button>
				</form>
			</div>
		)
	}
}