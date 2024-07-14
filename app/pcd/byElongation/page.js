// pages/index.js
'use client'
import Head from 'next/head';
import { useState } from 'react';
import { useEffect } from 'react';
import Sequence from './Sequence';
import Link from 'next/link';

export default function byReduction() {
	


	return (
		<div className='pageBody'>
			<header>
				<title>Design Die Sequence</title>
				<link rel='icon' href='/logo.png' />
			</header>

			<main>
				<h2>Design Die Sequence by Elongation</h2>
				<Sequence />
				<div className='howToUse'>
					<p>How to use</p>
					<ol>
						<li>Fill start and final size</li>
						<li>Adjust R Rate could change size below</li>
						<li>To check the calculated start size meet the needed first size</li>
						<li>Double check the cell color become green</li>
						<li>Choose the type of drawing die at below table</li>
						<li>Adjust the parameters to meet the CP cell become green</li>
						<li>Adjust the parameters to see the 𝜟 for reference</li>
						<li>𝜟 and RCL is related to the homogeneous works</li>
					</ol>
				</div>
				<div className='annotation'>
					<p>Annotation</p>
					<ol>
						<li>Area reduction rate(%)</li>
						<li>Elongation rate(%)</li>
						<li>Choice for drawing tool</li>
						<li>Reduction angle(2⍺)</li>
						<li>Length rate of hole Size</li>
						<li>Delta-parameter by Wistreich</li>
						<li>relative contact length by T. Maxwell</li>
						<li>Contact point by this page</li>
					</ol>
				</div>
			</main>

			<aside className='mainBody' id='asideElongation'>
				<div className='mainBodyUl'>
					<ul>
						<li>
							<Link href='../pcd/byReduction' style={{ color: 'white' }}>
								By reduction
							</Link>
						</li>
						<li>
							<Link href='./' style={{ color: 'white' }}>
								⬅️ Die Profile
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
}
