// pages/index.js
'use client';
import Head from 'next/head';
import { useState } from 'react';
import { useEffect } from 'react';
import Sequence01 from './Sequence01';
import Link from 'next/link';

export default function byReduction() {
	return (
		<div className='flex flex-grow' style={{minHeight: 'calc(100vh - 112px)'}}>
			<header>
				<title>Sequence by reduction</title>
				<link rel='icon' href='/logo.png' />
			</header>

			<main className="w-full bg-slate-200 p-2">
				<div className="flex flex-row items-center mt-4">
				<h3 className="px-10 text-xl text-slate-600 font-semibold pb-1">
					Design Die Sequence by Reduction</h3>
				<Link href="./"><button className='w-20 ml-40 text-lg py-0 bg-blue-300 rounded-lg text-blue-600 hover:font-bold hover:bg-blue-400'>Back</button></Link>
				</div>
				
				<Sequence01 />

				<div className='flex items-center'>

				<div className='pl-6'>
					<p className="text-base text-slate-500 font-semibold ml-4 mb-1 mt-6">How to use</p>
					<ol className="list-disc pl-10 text-sm text-slate-700 mb-2 py-2">
						<li>Fill start and final size</li>
						<li>Adjust R-Rate could change size below</li>
						<li>To check the calculated start size meet the needed first size</li>
						<li>Double check the cell color become green</li>
						<li>Choose the type of drawing die at below table</li>
						<li>Adjust the parameters to meet the CP cell become green</li>
						<li>Adjust the parameters to see the 𝜟 for reference</li>
						<li>𝜟 and RCL is related to the homogeneous works</li>
					</ol>
				</div>
				<div className='pl-20'>
					<p className="text-sm text-slate-500 font-semibold ml-4 mb-1 mt-2"> Annotation</p>
					<ol className="list-disc pl-10 text-xs text-slate-700 mb-2 py-2">
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
				</div>
			</main>

			{/* <aside className="w-80 min-w-[20rem] order-1 m-0 p-0 bg-slate-200">
				<div className='mainBodyUl'>
					<ul className="sideUl space-y-2">
						<li className="relative group">
							<Link href='./' className="text-slate-100 ml-4 text-sm">
								⬅️ Die Profile
							</Link>
						</li>
						<li className="relative group">
							<Link href='../pcd/byElongation' className="text-slate-100 ml-4 text-sm">
								By elongation
							</Link>
						</li>
					</ul>
				</div>
			</aside> */}
		</div>
	);
}
