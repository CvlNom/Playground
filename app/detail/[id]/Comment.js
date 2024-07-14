'use client';
import { useState, useEffect } from 'react';

export default function Comment(props) {
	let [comment, setComment] = useState('');
	let [data, setData] = useState([]);
	// console.log("data----------", data)

	useEffect(() => {
		// 데이터 가져오기 위해 원글의 아이디로 요청
		// result는 가져온 댓글
		fetch('/api/comment/list?id=' + props._id)
			.then((r) => r.json())
			.then((result) => {
				setData(result);
			});
	}, []);

	return (
		<div className='displayComment'>
			<div>Comment List</div>
			{data.length > 0 ? (
				data.map((a, i) => (
					<div key={i} className='commentList'>
						<p className='commentAuthor'>{a.author}</p>
						<p style={{ whiteSpace: 'pre-wrap' }} className='commentContent'>
							{a.content}
						</p>
						<p className='commentDate'>{a.commentDate}</p>
					</div>
				))
			) : (
				<p></p>
			)}

			<div className='commentArea'>
				<textarea
					className='commentInput'
					row='50'
					cols='80'
					onChange={(e) => {
						setComment(e.target.value);
					}}
				/>
				
				<button
					onClick={() => {
						fetch('/api/comment/new', {
							method: 'POST',
							body: JSON.stringify({ comment: comment, _id: props._id }),
						})
							.then((res) => res.json())
							.then((saveComment) => {
								setData([...data, saveComment]);
								// setComment('');
							});
					}}
				>
					Post Comment
				</button>

			</div>
		</div>
	);
}

// 댓글 작성자를 보여주는 방식. 저장할 때 작성자의 이름을 저장해야 함
// 비 관계형 디비라 상관없음
// 댓글이 실시간으로 반영되어야 하는데. 리프레쉬해야 작성된 글이 보임
// 서버에서 저장이 완료되면 뽑아서 다시 보내주는 응답.
// fetch에 then을 사용하여 보여주는 방식.(state 사용) - 클라이언트 사이드 랜더링의 장점
// 좋아요
