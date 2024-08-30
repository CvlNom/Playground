import Head from 'next/head';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import Link from 'next/link';
import LoginSignup from '../component/LoginSignup';
import TubeInfo from '../component/TubeInfo';
import DrawFormingRoll from './DrawFormingRoll';
import Footer from '../component/Footer';

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
					<h3>Design Tube Forming Profile</h3>
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
						</ul>
					</div>
					<div>
						<TubeInfo />
					</div>
				</aside>

				<Footer />
			</div>
		);
	}
}
