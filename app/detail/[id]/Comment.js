"use client";
import { useState, useEffect } from "react";

export default function Comment(props) {
  let [comment, setComment] = useState("");
  let [data, setData] = useState([]);
  // console.log("data----------", data)

  useEffect(() => {
    // 데이터 가져오기 위해 원글의 아이디로 요청
    // result는 가져온 댓글
    fetch("/api/comment/list?id=" + props._id)
      .then((r) => r.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  return (
    <div className="w-[850px] mt-12">
      <div>
        <hr className="border-1 border-gray-400 mb-4" />
        <p className="text-slate-600 text-base italic mb-2">Comments List </p>
      </div>

      {data.length > 0 ? (
        data.map((a, i) => (
          <div
            key={i}
            className="flex flex-row mb-2 bg-gray-300 items-center ml-8 rounded-md"
          >
            <p className="w-[60px] text-slate-500 text-xs text-center">
              {a.author}
            </p>
            <p
              style={{ whiteSpace: "pre-wrap" }}
              className="w-[620px] text-slate-700 text-sm"
            >
              {a.content}
            </p>
            <p className="commentDate">{a.commentDate}</p>
          </div>
        ))
      ) : (
        <p></p>
      )}

      <hr className="border-1 border-gray-400 mt-4 mb-4" />
      <div className="flex mt-10 ">
        <div>
          <textarea
            className="text-slate-800 text-sm w-[650px] p-2 h-24 bg-white rounded-lg shadow-lg"
			placeholder="Leave your comment"
            row="5"
            cols="80"
			value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
        </div>
        <div>
          <button className="bg-green-300 text-blue-500 text-xl p-2 rounded-sm ml-4 hover:bg-green-400"
            onClick={() => {
              fetch("/api/comment/new", {
                method: "POST",
                body: JSON.stringify({ comment: comment, _id: props._id }),
              })
                .then((res) => res.json())
                .then((saveComment) => {
                  setData([...data, saveComment]);
                  setComment('');
                });
            }}
          >
            Post Comment
          </button>
        </div>
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
