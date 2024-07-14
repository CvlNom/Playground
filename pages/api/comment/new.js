import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(req, res) {
	const date = new Date();
	const year = date.getFullYear().toString().slice(-2); // 년도 마지막 두 자리
	const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 월 (0부터 시작하므로 1을 더함)
	const day = date.getDate().toString().padStart(2, '0'); // 일
	const formattedDate = `${year}${month}${day}`;
	const hours = date.getHours().toString().padStart(2, '0');
	const minutes = date.getMinutes().toString().padStart(2, '0');
	const formattedTime = `${hours}:${minutes}`;

	let session = await getServerSession(req, res, authOptions);
	// if문으로 로그인 되었는지 확힌 후...
	if (req.method == 'POST') {
		req.body = JSON.parse(req.body);

		let saveComment = {
			content: req.body.comment,
			parent: new ObjectId(req.body._id),
			author: session.user.name,
			commentDate: formattedDate + '-' + formattedTime,
		};

		const db = (await connectDB).db('forum');
		let result = await db.collection('comment').insertOne(saveComment);
		console.log('-----------result', saveComment);
		return res.status(200).json(saveComment);
	}
}
