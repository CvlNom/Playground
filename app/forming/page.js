import Head from 'next/head';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import Link from 'next/link';
import LoginSignup from '../component/LoginSignup';
import TubeInfo from '../component/TubeInfo';
import DrawFormingRoll from './DrawFormingRoll';
import AD_side from '../component/AD_side';



export default async function forming(req, res) {
	let session = await getServerSession(authOptions);

	if (!session) {
		return <LoginSignup />;
	} else {
		return (
			<div className='flex flex-grow' style={{minHeight: 'calc(100vh - 112px)'}}>
				<header>
					<title>Tube Forming</title>
					<link rel='icon' href='/logo.png' />
				</header>

				<main className="flex-grow order-2 bg-slate-200 pl-12 pt-2" >
					<h3 className="px-4 text-xl text-slate-600 font-semibold pb-1">Design Tube Forming Roll</h3>
					<DrawFormingRoll />
					<p>&nbsp;</p>
					
				</main>

				<aside className="w-80 min-w-[20rem] order-1 m-0 p-0 bg-slate-100" >
					<div className="p-6">
					<h4 className="text-slate-500 font-bold p-2">Further Design</h4>
						<ul className="sideUl space-y-2">
							<li className="relative group">
								<Link href='./forming/selectStrip' className="text-slate-100 ml-4 text-sm">
									1. Select Strip Size
								</Link>
							</li>
							<li className="relative group">
								<Link href='../forming/rollArrangement' className="text-slate-100 ml-4 text-sm">
									2. Stand Arrangement
								</Link>
							</li>
						</ul>
					</div>
					<AD_side company={['./hanil-logo.png', '한일 정공', '(82)-010-5414-4974', 'gawonjo@naver.com']} deal={['Ultra Fine Equipment for Semiconductor', 'Tube Forming & Drawing Roll', 'Precision Groove Profile Processing']}/>
					
					<div>
						<TubeInfo />
					</div>
				</aside>
			</div>
		);
	}
}
