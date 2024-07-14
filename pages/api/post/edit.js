import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function handler(req, res) {
	if (req.method == 'POST') {
		// console.log(req.body)
		// 불러온 자료는 _id 포함되어 있으므로 
		let changedOne = {
			title: req.body.title,
			content: req.body.content
		}
		const db = (await connectDB).db('forum')
		let result = await db.collection('post').updateOne(
			{ _id: new ObjectId(req.body._id) },
			{ $set: changedOne }
			//아이디로 찾아온 글에 변경된 글을 업데이트 함
			// 불러온 자료는 _id 포함되어 있으므로 changeOne로 _id 제거 후 업데이트
			//$inc 하면 데이터를 증감할 수 있음.

		)
		res.status(200).redirect('/list')

	}
}