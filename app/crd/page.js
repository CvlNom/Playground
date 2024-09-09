import Head from 'next/head';
import InputCRD from './inputCRD';
import { getServerSession } from "next-auth"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import Link from 'next/link';
import LoginSignup from '../component/LoginSignup';
// import Footer from '../component/Footer'
import style from './fillRatio.module.css'




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
					<h3>Design CRD profile</h3>
					<InputCRD />
					<p>&nbsp;</p>
					<p>&nbsp;</p>
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
					<div className={style.sideDescription}>
						<h4>About Groove type</h4>
						<ul>
							<p>Rough Round Type </p>
							<li>For Reducing diameter</li>
							<li>Make wire section oval shape</li>
							<li>Give 7 to 10% of reduction</li>
							<li>Depending on the wire hardness</li>
						</ul>
						<ul>
							<p>Sizing Type </p>
							<li>For making round shape</li>
							<li>At the end of block</li>
							<li>Give 4 to 5% of reduction</li>
						</ul>
					</div>
				</aside>
			</div>
		);
  }
}