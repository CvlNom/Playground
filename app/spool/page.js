'use client'
import { useState } from 'react';
import Head from 'next/head';
// import Inputs from './InputComponent';
// import { getServerSession } from "next-auth"
// import { authOptions } from "@/pages/api/auth/[...nextauth]"
import Link from 'next/link';
import LoginSignup from '../component/LoginSignup';
import WireWeight from '../component/WireWeight';
import InputSpool from './InputSpool.js'
import Footer from '../component/Footer';
import AD_side from '../component/AD_side';

export default function designSpool(req, res) {
  // let session = await getServerSession(authOptions)
  // if (!session) {
  //   return (
  //     <LoginSignup />
  //   )
  // } else {
	const [calculatedValue, setCalculatedValue] = useState(0);

    return (
			<div className='flex flex-grow' style={{minHeight: 'calc(100vh - 112px)'}}>
				<header>
					<title>Spool: wire-lab</title>
					<link rel='icon' href='/logo.png' />
				</header>

				<main className="flex-grow order-2 bg-slate-200 pl-12 pt-2" >
					<h3 className="px-4 text-xl text-slate-600 font-semibold pb-1">Design Plastic Spool</h3>
					<InputSpool calculatedValue={calculatedValue} />
					<p>&nbsp;</p>
					
				</main>

				<aside className="w-80 min-w-[20rem] order-1 m-0 p-0 bg-slate-100">
					<div className='p-6'>
					<h4 className="text-orange-600 text-xl font-bold p-1 pb-4">** Spool decides the productivity of the rewinding process!!</h4>
						<ul className="sideUl space-y-2">
							<li className="relative group">
								<Link href='./spool/principle' className="text-slate-100 ml-4 text-sm">
									Principle of Level Layer
								</Link>
							</li>
							{/* <li className="relative group">
								<Link href='./spool/application' className="text-slate-100 ml-4 text-sm">
									3 Ways for Level Layer
								</Link>
							</li> */}
							<li className="relative group">
								<Link href='./spool/spoolMould' className="text-slate-100 ml-4 text-sm">
									Making spool mould
								</Link>
							</li>
						</ul>
					</div>
					<AD_side company={['./bogang-logo.png', '보강 정밀', '(82)-010-9397-9652', 'bkng1209@daum.net']} deal={['50 to 150ton Extruder', 'Plastic Spool Mound for welding wire', 'Secure High Productivity']}/>

					<div>
					<WireWeight setCalculatedValue={setCalculatedValue} />
					</div>
				</aside>
			</div>
		);
  // }
}
