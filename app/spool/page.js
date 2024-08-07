'use client';
import { useState } from 'react';
import Head from 'next/head';
// import Inputs from './InputComponent';
// import { getServerSession } from "next-auth"
// import { authOptions } from "@/pages/api/auth/[...nextauth]"
import Link from 'next/link';
import LoginSignup from '../component/LoginSignup';
import WireWeight from '../component/WireWeight';
import InputSpool from './InputSpool.js';

export default function designSpool(req, res) {
	// let session = await getServerSession(authOptions)
	// if (!session) {
	//   return (
	//     <LoginSignup />
	//   )
	// } else {
	const [calculatedValue, setCalculatedValue] = useState(0);

	return (
		<div className='pageBody'>
			<header>
				<title>Design Plastic Spool</title>

				<link rel='icon' href='/logo.png' />
			</header>

			<main>
				<h2>Design Plastic Spool (Bobbin)</h2>
				<InputSpool calculatedValue={calculatedValue} />
			</main>

			<aside className='mainBody' id='asideSpool'>
				<div className='mainBodyUl'>
					<ul>
						<li>
							<Link href='./spool/principle' style={{ color: 'white' }}>
								Principle of Level Layer
							</Link>
						</li>
						<li>
							<Link href='./spool/application' style={{ color: 'white' }}>
								3 Ways for Level Layer
							</Link>
						</li>
						<li>
							<Link href='./spool/spoolMould' style={{ color: 'white' }}>
								Making spool mould
							</Link>
						</li>
					</ul>
				</div>
				<WireWeight setCalculatedValue={setCalculatedValue} />
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
	// }
}
