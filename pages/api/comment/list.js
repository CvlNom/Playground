import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
	// console.log(req.query.id)
	const db = (await connectDB).db('forum');
	// 댓글을 db에서 가져옴
	let result = await db
		.collection('comment')
		.find({ parent: new ObjectId(req.query.id) })
		.toArray();
	res.status(200).json(result);
}
