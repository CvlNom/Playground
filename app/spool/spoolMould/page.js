// pages/index.js
import Head from 'next/head';
// import Inputs from './InputComponent';
import { getServerSession } from "next-auth"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import Link from 'next/link';
import LoginSignup from '../../component/LoginSignup';


export default async function procedureOfMould(req, res) {
  let session = await getServerSession(authOptions)

  if (!session) {
    return (
      <LoginSignup />
    )

  } else {
    return (
			<div className='pageBody'>
				<header>
					<title>Procedure to build spool mould</title>
					<link rel='icon' href='/logo.png' />
				</header>

				<main>
					<div className='mainContent'>
						<h2>Procedure to build spool mould</h2>
					</div>
					<div className='howToUse'>
						<p>Design the spool based on the specification </p>
						<ol>
							<li>Required specification of wire size, winding weight etc.</li>
							<li>Specify the groove detail, hole for start and end. </li>
							<li>Decide the spool material like ABS, PS and PP. </li>
						</ol>
						<p>Manufacturer of spool mould make their own design for spool mould </p>
						<ol>
							<li>Check thickness and shape of spool for cooling water circulation</li>
							<li>Depending on the material, decide shrink factor on their experience. </li>
							<li>Since the shrink rate is different, the spool with different material get different dimension. </li>
							<li>With built mould, extrude sample spool for test. </li>
							<li>Record extrusion condition. </li>
						</ol>
						<p>Inspect the spool samples </p>
						<ol>
							<li>Check shape and dimension and also flange straightness.</li>
							<li>Cut the part of layer groove and polish for the microscope picture. </li>
							<li>Scaling the picture of groove by CAD software and measure the groove distance and last lap distance. </li>
							<li>If not passed inspection, let maker do repair work and new samples for inspection. </li>
							<li>In case inspection passed, do the winding test at the winding machine with experienced operator. </li>
							<li>With operator's opinion, get samples with modified extrusion specification like cooling time and total cycle time. </li>
							<li>Issue Pass certification and check the extrusion condition from time to time. </li>
						</ol>
					</div>
				</main>

				<aside className='mainBody' id='asideSpool03'>
					<div className='mainBodyUl'>
						<ul>
							<li>
								<Link href='./principle' style={{ color: 'white' }}>
									Principle of Level Layer
								</Link>
							</li>
							<li>
								<Link href='./application' style={{ color: 'white' }}>
									Application Methods
								</Link>
							</li>
							<li>
								<Link href='./' style={{ color: 'white' }}>
									⬅️ Design Spool
								</Link>
							</li>

							{/* <li>What is Level Layer</li>
							<li>Things to GET!</li>
							<li>Straightener</li> */}
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
