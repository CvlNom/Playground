import Head from 'next/head';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import Link from 'next/link';
// import LoginSignup from '../component/LoginSignup';
// import DrawFormingRoll from './DrawFormingRoll';

export default async function rollArrangement(req, res) {
	let session = await getServerSession(authOptions);

	if (!session) {
		return <LoginSignup />;
	} else {
		return (
			<div className='pageBody'>
				<header>
					<title>Select Strip for Flux Cored Welding Wire</title>
					<link rel='icon' href='/logo.png' />
				</header>

				<main>
					<h2>Strip Selection for tube making</h2>
					<img src='../forming-arrangement.png' alt='image of crd assemble' className='img-strip-tube' />
					<div className='howToUse'>
						<p>Simple is Best</p>
						<ol>
							<li>Simplest arrangement without drive parts to make tube.</li>
							<li>For mild steel and below 1.2mm thickness. </li>
							<li>
								Applied to the patent of{' '}
								<a href='https://patents.google.com/patent/US20150044506A1/en?oq=US2015%2f0044506A1' target='_blank'>
									"Flux cored wire and manufacturing method thereof and manufacturing device thereof"
								</a>
							</li>
							<li>Stable forming works enough to do weld by laser.</li>
						</ol>
					</div>
					<p>&nbsp;</p>
					<p>&nbsp;</p>
				</main>
				<aside className='mainBody' id='asideForming01'>
					<div className='mainBodyUl'>
						<ul>
							<li>
								<Link href='../forming/selectStrip' style={{ color: 'white' }}>
									Select Strip Size
								</Link>
							</li>
							<li>
								<Link href='../forming' style={{ color: 'white' }}>
									⬅️ Tube Forming
								</Link>
							</li>
							{/* <li>
							<Link href='../crd/assemble' style={{ color: 'white' }}>
								Advantages
							</Link>
							</li> */}
						</ul>
					</div>
				</aside>
				<footer>
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
}
