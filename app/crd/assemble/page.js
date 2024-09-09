// pages/index.js
'use client';
import Head from 'next/head';
import { useState } from 'react';
import { useEffect } from 'react';

import Link from 'next/link';

export default function blockAssemble() {
	const [selectedOption, setSelectedOption] = useState('option1');
	const handleOptionChange = (event) => {
		setSelectedOption(event.target.value);
	};

	return (
		<div className='pageBody'>
			<header>
				<title>How to Assemble CRD Block</title>
				<link rel='icon' href='/logo.png' />
			</header>

			<main>
				<div className='mainContent'>
					<h2>Choose Assemble Stage:</h2>
					<div className='mainRadio'>
						<label>
							<input
								type='radio'
								value='option1'
								checked={selectedOption === 'option1'}
								onChange={handleOptionChange}
							/>
							Roll Case to Stage
						</label>
						<label>
							<input
								type='radio'
								value='option2'
								checked={selectedOption === 'option2'}
								onChange={handleOptionChange}
							/>
							Caution for Stage
						</label>
						<label>
							<input
								type='radio'
								value='option3'
								checked={selectedOption === 'option3'}
								onChange={handleOptionChange}
							/>
							Assemble to Block
						</label>
						<label>
							<input
								type='radio'
								value='option4'
								checked={selectedOption === 'option4'}
								onChange={handleOptionChange}
							/>
							Completed Block
						</label>
					</div>

					{selectedOption === 'option1' && (
						<div>
							<img src='../crd-assemble01.png' alt='image of crd assemble' className='crd-assemble01' />
							<p>** Cautions</p>
							<ol>
								<li>Special care on the shaft direction when inserting</li>
								<li>Before assemble, all rolls should be inspected its profile.</li>
								<li>If possible, use bigger needle of needle bearing</li>
								<li>Proper force to lock the screw of roll case.</li>
							</ol>
						</div>
					)}
					{selectedOption === 'option2' && (
						<div>
							<img src='../crd-assemble02.png' alt='image of crd assemble' className='crd-assemble01' />
							<br />
							<p>** Cautions</p>
							<ol>
								<li>Special on assemble tolerances and need high skill and experience</li>
								<li>If there is a miss on case arrangement, the case will be loosen during operation</li>
								<li>When setting roll gap, NEVER let the rolls touch each other</li>
								<li>Inspect roll groove profile</li>
							</ol>
							<p>** 3 ways to set roll gap</p>
							<ol>
								<li>Measuring diameter of drawn wire not exceeding 0.0125. </li>
								<li>Use thickness gauge, considering spring back of wire diameter after drawing before assemble.</li>
								<li>Use beam project to adjust roll gap.</li>
							</ol>
						</div>
					)}
					{selectedOption === 'option3' && (
						<div>
							<img src='../crd-assemble03.png' alt='image of crd assemble' className='crd-assemble01' />
							<br />
							<p>** Shaft Direction</p>
							<ol>
								<li>When rotate shaft, roll move to wire in direction.</li>
								<li>Open the roll gap at maximum span.</li>
								<li>Rotate shaft at the direction of wire in.</li>
								<li>Rotate same amounts of both shaft to keep wire position in center.</li>
							</ol>
						</div>
					)}
					{selectedOption === 'option4' && (
						<div>
							<img src='../crd-assemble04.png' alt='image of crd assemble' className='crd-assemble01' />
						</div>
					)}
				</div>

				<div className='howToUse'></div>
				<p>&nbsp;</p>
				<p>&nbsp;</p>
			</main>

			<aside className='mainBody' id='asideCRD02'>
				<div className='mainBodyUl'>
					<ul>
						<li>
							<Link href='./blockDesign' style={{ color: 'white' }}>
								Block Design
							</Link>
						</li>
						<li>
							<Link href='../crd' style={{ color: 'white' }}>
								⬅️ CRD Profile
							</Link>
						</li>
						{/* <li>
							<Link href='../crd/assemble' style={{ color: 'white' }}>
								PCD vs. CRD
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
