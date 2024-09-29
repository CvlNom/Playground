import { connectDB } from '@/util/database';
import ListItem from './listItem';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import Link from 'next/link';
import LoginSignup from '../component/LoginSignup';
export const dynamic = 'force-dynamic';
import Footer from '../component/Footer';
import AD_side from '../component/AD_side';


export default async function List({searchParams}) {
	let page = parseInt(searchParams.page, 10);
	
	page = !page || page < 1 ? 1 : page;
	const perPage = 20;

	const db = (await connectDB).db('forum');
	let result = await db
		.collection('post')
		.find({})
		.skip(perPage * (page - 1))
		.limit(perPage)
		.sort({ _id: -1 })
		.toArray();
	const itemCount = await db.collection('post').countDocuments({});

	// console.log('----------', result[5].writeDate.substring(0, 6));
	
	const totalPages = Math.ceil(itemCount / perPage);
	const prevPage = page - 1 > 0 ? page - 1 : 1;
	const nextPage = page + 1;
	const isPageOutOfRange = page > totalPages;
	const pageNumbers = [];
	const offsetNumber = 3;
	for (let i = page - offsetNumber; i <= page + offsetNumber; i++) {
		if (i >= 1 && i <= totalPages) {
			pageNumbers.push(i);
		}
	}

	let session = await getServerSession(authOptions);
	if (!session) {
		return <LoginSignup />;
	} else {
		return (
			<div className='flex flex-grow' style={{minHeight: 'calc(100vh - 112px)'}}>
				<header>
					<title>Forum: Engineering Discussion</title>
					<link rel='icon' href='/logo.png' />
				</header>

				<main className="flex-grow order-2 bg-slate-200 pl-4 pt-2">
					<h3 className="text-slate-500 text-xl font-bold ml-0 mb-4">Forum - Post List</h3>
					<p className="text-slate-600 text-sm italic ml-10 mb-2">Only the author can edit the post.</p>
					<div className='px-4 w-[900px] justify-center'>
						<div className=''>
							<div>
								{result.map((a, i) => {
									return (
										<div key={i} className='flex flex-row bg-slate-100 rounded-md mb-1 p-0.5 shadow-md w-[800px] items-center'>
											<span className='w-24 text-slate-500 text-xs pl-0.5'>{result[i].userID}</span>
											<Link prefetch={false} href={`/detail/${result[i]._id}`}>
												<h4 className='w-[620px] text-blue-600 text-sm'>{result[i].title}</h4>
											</Link>
											<span className='w-16 text-slate-500 text-xs'>{result[i].writeDate.substring(0, 6)}</span>
											<Link href={`/edit/${result[i]._id}`}>
												<span>✏️</span>
											</Link>
										</div>
									);
								})}
							</div>

							{isPageOutOfRange ? (
								<div>No more pages...</div>
							) : (
								<div className='pageButton'>
									<div className='pageBorder'>
										{page === 1 ? (
											<div className='non_act_previous' aria-disabled='true'>
												Previous
											</div>
										) : (
											<Link href={`?page=${prevPage}`} aria-label='Previous Page' className='act_previous'>
												Previous{' '}
											</Link>
										)}

										{pageNumbers.map((pageNumber, index) => (
											<Link
												key={index}
												className={page === pageNumber ? 'markPage' : 'hoverPage'}
												href={`?page=${pageNumber}`}
											>
												{' '}
												{pageNumber}
											</Link>
										))}

										{page === totalPages ? (
											<div className='non_act_previous' aria-disabled='true'>
												Next
											</div>
										) : (
											<Link href={`?page=${nextPage}`} aria-label='Next Page' className='act_previous'>
												Next{' '}
											</Link>
										)}
									</div>
								</div>
							)}
						</div>

						{/* <ListItem result={result} /> */}
						<Link href='/write' className='writeButton'>
							Write
						</Link>
						<p>&nbsp;</p>
						<p>&nbsp;</p>
					</div>
				</main>

				<aside className="w-80 min-w-[20rem] order-1 m-0 p-0 bg-slate-100" id='asideForum'>
					<div className="m-4">
						<h4 className='text-red-600 text-2xl italic font-bold'>Question?</h4>
						<h4 className='text-blue-600 text-2xl italic font-bold'>Need Advice?</h4>
						<h4 className='text-orange-600 text-2xl italic font-bold'>Share Experience?</h4>
						<h4 className='text-slate-600 text-xl font-semibold'>Anything you think,</h4>
						<h4 className='text-slate-700 text-2xl font-bold mt-2'>POST YOUR OPINION</h4>
					</div>

					<AD_side company={['./tig.png', 'Consulting?', '(82)-010-8641-4609', 'alexkwak24@gmail.com']} deal={['FCW, Aluminum Plant', 'Tube Forming & Filling', 'Application of Cassette Roller Die']}/>
					
				</aside>
			</div>
		);
	}
}

//TODO: 최싡 작성글 순으로 배치, 페이지가 많을 경우 25개
//TODO: 리스트 방식 변경, 제목, 순번, 아디, 작성일, 조회수?
//
