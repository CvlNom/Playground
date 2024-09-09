// pages/index.js
import Head from 'next/head';
// import Inputs from './InputComponent';
import { getServerSession } from "next-auth"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import Link from 'next/link';
import LoginSignup from '../../component/LoginSignup';

export default async function applicationMethod(req, res) {
  const tableData = [
		['Invest Costs', 'None', 'Spool Mould', 'Automatic M/C'],
		['Method', 'Operator use wood or plastic stick to arrange the last distance. To do this, need to stop the machine.', 
			'Grooved Spool covers a wire diameter variation, so do not need to stop the machine.',
			'Machine calculate the wire diameter during first layer and adjust the distance before wire arrive.'],
		['Productivity', 'Extremely Low', 'High', 'Known High'],
		['Benefits', 'No Investment, good for small production.', 
			'One operator can run 2 machine with small investment.', 
			'Need more space and investment costs, also need expensive spool material.'],
		['Manufacturer', '-', 'Bogang Precision Co.', 'Gimax s.r.l & Lamnea Bruk'],
	];
	const rowHeights = [50, 80, 50, 80, 50];

	// let session = await getServerSession(authOptions)
  // if (!session) {
  //   return (
  //     <LoginSignup />
  //   )

  // } else {
    return (
			<div className='pageBody'>
				<header>
					<title>How to wind Level Layer</title>
					<link rel='icon' href='/logo.png' />
				</header>

				<main>
					<div className='mainContent'>
						<h2>3 Ways to make the Level Layer Winding</h2>
						<table border='1'>
							<thead style={{ height: '40px' }}>
								<tr>
									<th style={{ width: '150px' }}>Comparison Item</th>
									<th style={{ width: '250px' }}>By Operator</th>
									<th style={{ width: '250px' }}>Apply Grooved Spool</th>
									<th style={{ width: '250px' }}>Introduce Full Automatic M/C</th>
								</tr>
							</thead>
							<tbody>
								{tableData.map((row, rowIndex) => (
									<tr key={rowIndex} style={{ height: `${rowHeights[rowIndex]}px` }}>
										{row.map((cell, colIndex) => (
											<td key={colIndex} style={{ width: colIndex === 0 ? '150px' : '250px' }}>
												{cell}
											</td>
										))}
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<p>&nbsp;</p>
					<p>&nbsp;</p>
				</main>

				<aside className='mainBody' id='asideSpool02'>
					<div className='mainBodyUl'>
						<ul>
							<li>
								<Link href='./principle' style={{ color: 'white' }}>
									Principle of Level Layer
								</Link>
							</li>
							<li>
								<Link href='./' style={{ color: 'white' }}>
									⬅️ Design Spool
								</Link>
							</li>
							<li>
								<Link href='./spoolMould' style={{ color: 'white' }}>
									Making Spool Mould
								</Link>
							</li>

							{/* <li>What is Level Layer</li>
							<li>Things to GET!</li>
							<li>Straightener</li> */}
						</ul>
					</div>
				</aside>
			</div>
		);
  // }
}
