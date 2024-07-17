// pages/index.js
import Head from 'next/head';
import Inputs from './InputComponent';
import { getServerSession } from "next-auth"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import Link from 'next/link';
import LoginSignup from '../component/LoginSignup';

export default async function DieProfile(req, res) {
  // let session = await getServerSession(authOptions)

  // if (!session) {
  //   return (
  //     <LoginSignup />
  //   )

  // } else {
    return (
			<div className='pageBody'>
				<header>
					<title>Design PCD profile</title>

					<link rel='icon' href='/logo.png' />
				</header>

				<main>
					<h2>Design PCD profile</h2>
					<Inputs />
				</main>
				<aside className='mainBody' id='asideDie'>
					<div className='mainBodyUl'>
						<ul>
							<li>
								<Link href='./pcd/byReduction' style={{ color: 'white' }}>
									By reduction
								</Link>
							</li>
							<li>
								<Link href='./pcd/byElongation' style={{ color: 'white' }}>
									By elongation
								</Link>
							</li>
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
  // }
}
