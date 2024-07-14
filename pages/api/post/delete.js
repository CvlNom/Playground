import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(req, res) {
	if (req.method == 'DELETE') {
		let session = await getServerSession(req, res, authOptions)
		const db = (await connectDB).db('forum')
		let myWriting = await db.collection('post').findOne({ _id: new ObjectId(req.body) })
		// console.log("myWriting", myWriting)

		if (myWriting.author === session.user.email) {
			try {
				let result = await db.collection('post').deleteOne({ _id: new ObjectId(req.body) })
				// console.log(myWriting.author)
				console.log('삭제 완료')
				return res.status(200).json('삭제 완료')
			} catch (error) {
				console.log(error)
				return res.status(500).json('Try later')
			}
		} else {
			// console.log('현재 유저와 작성자 불일치')
			return res.status(400).json('삭제 권한이 없습니다')

			// 로그인으로 리다이렉트 시킬것!
		}

	}

}