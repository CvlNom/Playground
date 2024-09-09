import Head from 'next/head';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import Link from 'next/link';
// import LoginSignup from '../component/LoginSignup';
// import DrawFormingRoll from './DrawFormingRoll';

export default async function selectStrip(req, res) {
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
					<img src='../stripToTube.png' alt='image of crd assemble' className='img-strip-tube' />
					<div className='howToUse'>
						<p>Strip Selection</p>
						<ol>
							<li>Tube Diameter = (Width / 3.14) + Thickness </li>
							<li>Inside shrink and outside stretch during forming process </li>
							<li>Not enough stretch make imperfection of seam section shape</li>
							<li>To make ideal shape of the seam section, apply bevelling roll and "W" bending at F1 stand.</li>
						</ol>
						<p>Process Engineering for Flux Cored Welding Wire</p>
						<ol>
							<li>Ratio of width and thickness decides the void ratio to fill a powder. </li>
							<li>Depending on the product type and powder's specific density, need to adjust strip size.</li>
							<li>
								Plus, considering on the process capability and final strength of wire, decide the start diameter by
								strip thickness and width.
							</li>
						</ol>
						<p>&nbsp;</p>
						<p>&nbsp;</p>
					</div>
				</main>
				<aside className='mainBody' id='asideForming02'>
					<div className='mainBodyUl'>
						<ul>
							<li>
								<Link href='./' style={{ color: 'white' }}>
									⬅️ Tube Forming
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
