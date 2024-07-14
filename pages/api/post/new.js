import { connectDB } from '@/util/database';
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
	if (session) {
		req.body.author = session.user.email;
		req.body.userID = session.user.name;
		req.body.writeDate = formattedDate + '-' + formattedTime;
		req.body.views = 0;
		req.body.likes = 0
	}

	if (req.method == 'POST') {
		if (req.body.title == '') {
			return res.status(500).json('Need to write the title');
		}
		const db = (await connectDB).db('forum');
		let result = await db.collection('post').insertOne(req.body);
		return res.status(200).redirect('/list');
	}
}

// TODO: try catch 문 작성 (DB 에러 시)
