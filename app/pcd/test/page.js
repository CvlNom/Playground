// pages/index.js
import Head from 'next/head';



export default async function DieProfile(req, res) {
	
	
		return (
			<div className='pageBody'>
				<header>
					<title>Design PCD profile</title>
					<h2>Design PCD profile</h2>
					<link rel='icon' href='/logo.png' />
				</header>

				<main>
					<div></div>
				</main>
				<aside className='mainBody' id='asideDie'>
					<div className='mainBodyUl'>
						<ul>
							<li>Why to check</li>
							<li>Inspection</li>
							<li>CP & Delta</li>
							<li>PCD Blank</li>
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

