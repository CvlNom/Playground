// pages/index.js
'use client';
import Head from 'next/head';
import { useState } from 'react';
import { useEffect } from 'react';
import BlockTable from './BlockTable';
import Link from 'next/link';

export default function blockDesign() {
	return (
		<div className='pageBody'>
			<header>
				<title>Design CRD Block</title>
				<link rel='icon' href='/logo.png' />
			</header>

			<main>
				<h2>Design CRD Block by Size</h2>
				<BlockTable/>
				
				<div className='howToUse'>
					<p>How to use</p>
					<ol>
						<li>Fill start and target size</li>
						<li>Adjust OP at table referring  R rate around 8 to 9%</li>
						<li>Adjust Number of Stage to meet the target size</li>
						<li>With profile drawing of "R" and "S", this table can be a manufacturing drawing for CRD rolls</li>
						
					</ol>
				</div>
				<div className='annotation'>
					<p>Annotation</p>
					<ol>
						<li>R factor is the parameter to shape of oval round.</li>
						<li>G/2 is halp gap between rolls, in case of big diameter it will be better to increase.</li>
						<li>eR is edge round and like G/2 adjust if needed.</li>
						
					</ol>
				</div>
			</main>

			<aside className='mainBody' id='asideCRD01'>
				<div className='mainBodyUl'>
					<ul>
						<li>
							<Link href='./' style={{ color: 'white' }}>
								⬅️ CRD Profile
							</Link>
						</li>
						<li>
							<Link href='../crd/assemble' style={{ color: 'white' }}>
								How to Assemble
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
