import { connectDB } from '@/util/database';
import ListItem from './listItem';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import Link from 'next/link';
import LoginSignup from '../component/LoginSignup';
export const dynamic = 'force-dynamic';

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
			<div className='pageBody'>
				<header>
					<title>Forum: Engineering Discussion</title>
					<link rel='icon' href='/logo.png' />
				</header>

				<main>
					<h2>Forum</h2>
					<div className='list-bg'>
						<div className='container00 '>
							<div>
								{result.map((a, i) => {
									return (
										<div key={i} className='list-item'>
											<span>{result[i].userID}</span>
											<Link prefetch={false} href={`/detail/${result[i]._id}`}>
												<h4>{result[i].title}</h4>
											</Link>
											<span>{result[i].writeDate}</span>
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
					</div>
				</main>

				<aside id='asideForum'>
					<div>
						<h4>Question,</h4>
						<h4>Advice,</h4>
						<h4>Share Experience,</h4>
						<h4>and anything you think,</h4>
						<h4>POST your opinion!!</h4>
					</div>
				</aside>

				<footer>
					author: Alex Kwak <br />
					&copy; copyright reserved.
					<small>I do not take any responsibility except on Contracts.</small>
					<br />
					<small>
						<a href='mailto:alexkwak24@gmail.com'> alexkwak24@gmail.com</a>
					</small>
				</footer>
			</div>
		);
	}
}

//TODO: 최싡 작성글 순으로 배치, 페이지가 많을 경우 25개
//TODO: 리스트 방식 변경, 제목, 순번, 아디, 작성일, 조회수?
//
