import { connectDB } from "@/util/database";
import bcrypt from 'bcrypt'

export default async function handler(req, res) {
	const db = (await connectDB).db('forum')
	let findEmail = await db.collection('user_cred').findOne({ email: req.body.email })
	// console.log("find?", findEmail)

	if (req.method == 'POST') {
		if (req.body.name == '') {
			res.status(200).json('Need to fill your name')
		} else if (req.body.email == '') {
			res.status(200).json('Need to fill your e-mail address')
		} else if (req.body.password == '') {
			res.status(200).json('Need to fill your password')
		}
	}
	//TODO 이메일이나 이름이 중복되면 회원가입이 안되게, If 조건문 사용

	if (findEmail == null) {
		let hash = await bcrypt.hash(req.body.password, 10)
		
		req.body.password = hash
		let db = (await connectDB).db('forum');
		await db.collection('user_cred').insertOne(req.body);
		return res.send(
			"<script>alert('Complete'); window.location.replace('/');</script>"
		)
	} else {
		return res.send(
			"<script>alert('You already Signed UP.'); window.location.replace('/');</script>"
		)
	}

}