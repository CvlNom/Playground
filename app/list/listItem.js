'use client';
//js 스크립트를 사용하기 위해서 use client 사용

import Link from 'next/link';
// import WriteDate from '../write/date';

export default function ListItem(props) {
	return (
		<div>
			{props.result.map((a, i) => {
				return (
					<div className='list-item' key={i}>
						<span>{props.result[i].writeDate}</span>
						<Link prefetch={false} href={`/detail/${props.result[i]._id}`}>
							<h4>{props.result[i].title}</h4></Link>
						<span>{props.result[i].userID}</span>
						
						<Link href={`/edit/${props.result[i]._id}`}><p>✏️ Edit</p></Link>
						<span onClick={(e) => {
								fetch('/api/post/delete', {method: 'DELETE', body: props.result[i]._id,})
									.then((res) => {
										return res.json();
										console.log('!!!', res.status);
									})
									.then((res) => {
										if (res === '삭제 완료') {
											e.target.parentElement.style.opacity = 0;
											setTimeout(() => {
												e.target.parentElement.style.display = 'none';
											}, 1000);
										} else {
											alert('삭제 권한이 없습니다');
										}
									});
							}}
							className='delete-icon'>🗑️Delete
						</span>
						
						
					</div>
				);
			})}
		</div>
	);
}
