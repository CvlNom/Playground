import Head from 'next/head';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import Link from 'next/link';
import LoginSignup from '../../component/LoginSignup';
import Footer from '../../component/Footer';
import FeedAbility from './FeedAbility'
import styles from './MeasureFill.module.css'


export default async function fillRatio(req, res) {
	let session = await getServerSession(authOptions);

	if (!session) {
		return <LoginSignup />;
	} else {
		return (
			<div className='pageBody'>
				<header>
					<title>Control Fill Ratio for FCW</title>
					<link rel='icon' href='/logo.png' />
				</header>

				<main>
					<h3 style={{paddingLeft: '250px', paddingTop: '10px'}}>Feed ability of FCW</h3>
					<FeedAbility />
				</main>

				<aside className='mainBody' id='aside_fillRatio'>
					<img src='/differentThinking.png' alt='image of different Thinking' className='differentThinking' />
					<div className='mainBodyUl'>
						<ul>
							<li>
								<Link href='/' style={{ color: 'white' }}>
									⬅️ Home
								</Link>
							</li>
							{/* <li>
								<Link href='../forming/rollArrangement' style={{ color: 'white' }}>
									Stand Arrangement
								</Link>
							</li> */}
						</ul>
					</div>
					<div></div>
				</aside>
				
			</div>
		);
	}
}
