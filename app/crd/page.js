import Head from 'next/head';
import InputCRD from './inputCRD';
import { getServerSession } from "next-auth"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import Link from 'next/link';
import LoginSignup from '../component/LoginSignup';




export default async function CRD(req, res) {
  let session = await getServerSession(authOptions)

  if (!session) {
    return (
      <LoginSignup />
    )

  } else {
    return (
			<div className='pageBody'>
				<header>
					<title>Design CRD profile</title>
					<link rel='icon' href='/logo.png' />
				</header>

				<main>
					<h2>Design CRD profile</h2>
					<InputCRD />
				</main>
				<aside className='mainBody' id='asideCRD'>
					<div className='mainBodyUl'>
						<ul>
							<li>
								<Link href='./crd/blockDesign' style={{ color: 'white' }}>
									Block Design
								</Link>
							</li>
							<li>
								<Link href='./crd/assemble' style={{ color: 'white' }}>
									How to Assemble
								</Link>
							</li>
							{/* <li>
								<Link href='./crd/comparison' style={{ color: 'white' }}>
									PCD vs. CRD
								</Link>
							</li> */}
						</ul>
					</div>
				</aside>
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
}