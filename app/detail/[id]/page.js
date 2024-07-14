import { ObjectId } from 'mongodb';
import { connectDB } from '@/util/database';
import Comment from './Comment';

export default async function Detail(props) {
	const db = (await connectDB).db('forum');
	let addViews = await db.collection('post').updateOne({ _id: new ObjectId(props.params.id) }, { $inc: {views:1} });
	let result = await db.collection('post').findOne({ _id: new ObjectId(props.params.id) });
	
	return (
		<div className='pageBody'>
			<header>
				<title>Forum: Detail</title>
				<h2>Detailed Content</h2>
				<link rel='icon' href='/logo.png' />
			</header>

			<main className='detail_main'>
				<div className='detail_title'>
					<p id='label_title'>Title:</p> 
					<p id='content_title'>{result.title}</p>
					<p id='userId_title'>{result.userID},{result.writeDate}-{result.views}</p>
				</div>
				<div className='detail_content'>
					<p style={{ whiteSpace: 'pre-wrap' }}>{result.content}</p>
				</div>
				

				<Comment _id={result._id.toString()} />
				
			</main>
			<aside id='asideDetail'>Side</aside>
			<footer>
				<hr />
				author: Alex Kwak <br />
				&copy; copyright reserved.
				<small>We do not take any responsibility except on Contracts.</small>
				<br />
				<small>
					<a href='mailto:alexkwak24@gmail.com'> alexkwak24@gmail.com</a>
				</small>
			</footer>
		</div>
	);
}
