// pages/index.js
'use client';
import Head from 'next/head';
import { useState } from 'react';
import { useEffect } from 'react';

import Link from 'next/link';

export default function differentThinking01() {
	const [selectedOption, setSelectedOption] = useState('option1');
	const handleOptionChange = (event) => {
		setSelectedOption(event.target.value);
	};

	return (
		<div className='pageBody'>
			<header>
				<title>Different Thinking of the seam welding for the seamless FCW</title>
				<link rel='icon' href='/logo.png' />
			</header>

			<main>
				<div className='mainContent'>
					<h2>Choose the way to weld for the Seamless FCW</h2>
					<div className='mainRadio'>
						<label>
							<input
								type='radio'
								value='option1'
								checked={selectedOption === 'option1'}
								onChange={handleOptionChange}
							/>
							1. Old Method by Patent
						</label>
						<label>
							<input
								type='radio'
								value='option2'
								checked={selectedOption === 'option2'}
								onChange={handleOptionChange}
							/>
							2. Assumption of Buhler Wurz
						</label>
						<label>
							<input
								type='radio'
								value='option3'
								checked={selectedOption === 'option3'}
								onChange={handleOptionChange}
							/>
							3. Double Tube Method by Patent
						</label>
						<label>
							<input
								type='radio'
								value='option4'
								checked={selectedOption === 'option4'}
								onChange={handleOptionChange}
							/>
							4. Different Thinking
						</label>
					</div>

					{selectedOption === 'option1' && (
						<div className='differentThinking01'>
							<img src='../different-thinking_01.png' alt='image of welding section' />
							<p>
								Assumption according to the Patent of{' '}
								<a href='https://patents.google.com/patent/EP0489167B1/en?oq=EP+0489167+B1' target='_blank'>
									EP 0489167 B1
								</a>
							</p>
							<ol>
								<li>Old patent that the laser welding has not yet introduced the the seam welding.</li>
								<li>Lots of heat generated from welding point enough to burn all surface of tube.</li>
								<li>To protect the flux, it need to secure some distance from heat source.</li>
								<li>Big tube make the manufacturing process complicate.</li>
							</ol>
						</div>
					)}
					{selectedOption === 'option2' && (
						<div className='differentThinking01'>
							<img src='../different-thinking_02.png' alt='image of welding section' />
							<br />
							<p>Assumption from the information of a sales engineer(PPT data).</p>
							<ol>
								<li>Up to date technology to make a seamless FCW from Europe.</li>
								<li>However still big tube to make the seam welding that make the process complicate.</li>
								<li>
									Also has small possibility to burn the flux since laser light can penetrate extremely small gap of the
									seam.
								</li>
							</ol>
						</div>
					)}
					{selectedOption === 'option3' && (
						<div className='differentThinking01'>
							<img src='../different-thinking_03.png' alt='image of welding section' />
							<br />
							<p>From the Patent of US20150044506A1.</p>
							<ol>
								<li>To protect the flux, add one more tube to weld.</li>
								<li>
									Cause of the small tube diameter similar to the existing process, very simple to make a final products
								</li>
								<li>
									However some cumbersome works needed for double tube and some obstacles to adjust fill percent of flux
								</li>
							</ol>
						</div>
					)}
					{selectedOption === 'option4' && (
						<div className='differentThinking01'>
							<img src='../different-thinking_04.png' alt='image of welding section' />
							<br />
							<p>Different Thinking to make more simple process</p>
							<ol>
								<li>Not to penetrate the laser beam to the flux, adjust the angle of laser.</li>
								<li>Or make the tube type of folded so the beam could not reach to the flux</li>
							</ol>
						</div>
					)}
				</div>

				<div className='howToUse'></div>
			</main>

			<aside className='mainBody' id='asideWeldSeam'>
				<img src='/differentThinking.png' alt='image of different Thinking' className='differentThinking' />
				<div className='mainBodyUl'>
					<ul>
						<li>
							<Link href='/' style={{ color: 'white' }}>
								⬅️ Home
							</Link>
						</li>
					</ul>
				</div>
			</aside>
			
		</div>
	);
}
