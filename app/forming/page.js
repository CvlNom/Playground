import Head from 'next/head';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import Link from 'next/link';
import LoginSignup from '../component/LoginSignup';
import DrawFormingRoll from './DrawFormingRoll';

export default async function forming(req, res) {
	let session = await getServerSession(authOptions);

	if (!session) {
		return <LoginSignup />;
	} else {
		return (
			<div className='pageBody'>
				<header>
					<title>Design Tube Forming</title>
					<link rel='icon' href='/logo.png' />
				</header>

				<main>
					<h2>Design Tube Forming Profile</h2>
					<DrawFormingRoll />
				</main>
				<aside className='mainBody' id='asideForming'>
					<div className='mainBodyUl'>
						<ul>
							<li>
								<Link href='./forming/selectStrip' style={{ color: 'white' }}>
									Select Strip Size
								</Link>
							</li>
							<li>
								<Link href='../forming/rollArrangement' style={{ color: 'white' }}>
									Stand Arrangement
								</Link>
							</li>
							{/* <li>
							<Link href='../crd/assemble' style={{ color: 'white' }}>
								Advantages
							</Link>
							</li> */}
						</ul>
					</div>
					<div>
						<TubeInfo />
					</div>
				</aside>
				<footer>
					author: Alex Kwak <br />
					&copy; copyright reserved.
					<small>I do not take any responsibility except on Contracts.</small>
					<br />
					<small>
						<a href='mailto:alexkwak24@gmail.com'> alexkwak24@gmail.com</a>
					</small>
				</footer>
			</div>
		);
	}
}
