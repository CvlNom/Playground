// pages/index.js
'use client';
import Head from 'next/head';
import { useState } from 'react';
import { useEffect } from 'react';

import Link from 'next/link';

export default function principleOfLL() {
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
							Basic Theory
						</label>
						<label>
							<input
								type='radio'
								value='option2'
								checked={selectedOption === 'option2'}
								onChange={handleOptionChange}
							/>
							Collapsed by Small Diameter
						</label>
						<label>
							<input
								type='radio'
								value='option3'
								checked={selectedOption === 'option3'}
								onChange={handleOptionChange}
							/>
							Collapsed by Big Diameter
						</label>
					</div>

					{selectedOption === 'option1' && (
						<div>
							<img src='../level-layer02.png' alt='image of crd assemble' className='crd-assemble01' />
							<p>Principle of Level Layer Winding</p>
							<ol>
								<li>At the last lap to the wall, left space should be the half of wire diameter.</li>
								<li>Wire laid on the between wire laps on next layer.</li>
								<li>The wall on both side should be straight up to maintain same space.</li>
								<li>The problems come out the wire diameter variates.</li>
							</ol>
						</div>
					)}
					{selectedOption === 'option2' && (
						<div>
							<img src='../level-layer01.png' alt='image of crd assemble' className='crd-assemble01' />
							<br />
							<p>Failed Level Layer because of smaller diameter than target diameter.</p>
							<ol>
								<li>To reduce die costs, the diameter start smaller than target diameter.</li>
								<li>Because of too much space at the last lap, un-even level area becomes wider as layer added.</li>
								<li>
									To prevent this problem, operator stop the machine and adjust the distance of last lap by hitting the
									wire.
								</li>
								<li>The possibility of reverse winding goes up, resulting low productivity.</li>
							</ol>
						</div>
					)}
					{selectedOption === 'option3' && (
						<div>
							<img src='../level-layer03.png' alt='image of crd assemble' className='crd-assemble01' />
							<br />
							<p>Failed Level Layer because of bigger diameter than target diameter.</p>
							<ol>
								<li>The wire diameter becomes bigger as die wear out.</li>
								<li>As a result, there is no space to layer on next layer to the wall</li>
								<li>Then wire goes next furrow between bottom wires and start to ruin the principle</li>
								<li>
									To keep the principle, operator try to push wire to the wall by stick, however the failure rate goes
									up effecting winding productivity.
								</li>
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

			<aside className='mainBody' id='asideSpool01'>
				<div className='mainBodyUl'>
					<ul>
						<li>
							<Link href='./' style={{ color: 'white' }}>
								⬅️ Design Spool
							</Link>
						</li>
						<li>
							<Link href='./application' style={{ color: 'white' }}>
								3 Ways for Level Layer
							</Link>
						</li>
						<li>
							<Link href='./spoolMould' style={{ color: 'white' }}>
								Making Spool Mould
							</Link>
						</li>
					</ul>
				</div>
			</aside>
		</div>
	);
}
