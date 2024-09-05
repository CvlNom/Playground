// pages/index.js
import Head from 'next/head';
import Inputs from './InputComponent';
import { getServerSession } from "next-auth"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import Link from 'next/link';
import LoginSignup from '../component/LoginSignup';
import Footer from '../component/Footer';


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
					<h3>Design PCD profile</h3>
					<Inputs />
				</main>
				<aside className='mainBody' id='asideDie'>
					<div className='mainBodyUl'>
						<ul>
							<li>
								<Link href='./pcd/byReduction' style={{ color: 'white' }}>
									Sequence by Reduction
								</Link>
							</li>
							<li>
								<Link href='./pcd/byElongation' style={{ color: 'white' }}>
									Sequence by Elongation
								</Link>
							</li>
						</ul>
					</div>
				</aside>
				
			</div>
		);
  // }
}