export default function handler(req, res) {
	let writeDate = new Date()
	return res.status(200).json(writeDate)


}