// import { connectDB } from '@/util/database';
// import { MongoClient } from 'mongodb';
import Link from 'next/link';
import WeatherBox from './component/WeatherBox';

export default async function Home() {
	// const client = await connectDB;
	// const db = client.db('forum');

	// //post에 있는 모든 자료를 가져오기. 서버 컴포넌트에서만 작성
	// let result = await db.collection('post').find().toArray();
	// console.log(result)

	

	return (
		<div className='pageBody'>
			<header>
				<title>HOME: FCW Design Tool</title>
				<link rel='icon' href='/logo.png' />
			</header>

			<main id='mainHome'>
				<div className='homeItem1'>
					<h1>Welcome to wire-lab.net</h1>
					{/* <p>Engineering Experience of</p>
					<ul className='homeUl'>
						<li>Flux Cored Wire </li>
						<li>Solid Wire & Stick Electrode</li>
						<li>Seamless FCW Wire</li>
						<li>Aluminum Welding Wire</li>
					</ul> */}
				</div>
				<div className='homeItem1'>
					<p>Share Design Tips of</p>
					<ul>
						<li>PCD Profile</li>
						<li>CRD Grooves</li>
						<li>Tube Forming Profile</li>
						<li>Plastic Spool </li>
					</ul>
				</div>
				<div className='homeItem1' id='humidCheck'>
					<WeatherBox />
				</div>
				<div className='homeItem2'>
					<Link href='/api/auth/signin' className='loginBox'>
						LOG IN
					</Link>
					<Link href='/register' className='loginBox'>
						SIGN UP
					</Link>
				</div>
			</main>
			<aside className='mainBody' id='asideHome'>
				<div className='homeItem0'>{/* <img src="./new_CRD.png" alt='crd Image' className='rollingSteel' /> */}</div>
			</aside>
			<footer>
				author: Alex Kwak <br />
				&copy; copyright reserved.
				<small>We do not take any responsibility except on Contracts.</small>
				<br />
				<small>
					<a href='mailto:alexkwak@wire-lab.net'>Contact: alexkwak@wire-lab.net</a>
				</small>
			</footer>
		</div>
	);
}
