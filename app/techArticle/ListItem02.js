"use client";
//js 스크립트를 사용하기 위해서 use client 사용

import Link from "next/link";
// import WriteDate from '../write/date';

export default function ListItem02({ results }) {
  return (
    <div className="flex flex-row flex-wrap justify-center">
      {results.map((a, i) => {
        return (
          <div
            key={i}
            className="bg-slate-100 w-[900px] m-2 flex flex-row rounded overflow-hidden shadow-md relative hover:shadow-lg"
          >
            <div className="flex flex-col items-center w-60 overflow-hidden">
              <span className="text-blue-500 bg-slate-200 w-20 text-center text-sm mt-1 rounded-lg">
                {results[i].type === "p"
                  ? "Patent"
                  : results[i].type === "a"
                  ? "Article"
                  : results[i].type === "b"
                  ? "Book"
                  : results[i].type}
              </span>
              {/* image */}
              <img
                src={results[i].no}
                alt="a image shown in this content"
                className="w-60 h-48 mt-1 sm:h-48 rounded-lg object-contain"
              />
            </div>

            <div className="flex flex-col ml-4 mt-4 text-blue-600 text-sm">
              <div className="mx-4 my-1 flex flex-row items-center ">
                <span>Title:</span>
                <a href={results[i].source} target="_blank">
                  <span className="text-sm ml-4 text-slate-600 font-semibold line-clamp-2">
                    {results[i].title}
                  </span>
                </a>
              </div>

              <div className="flex flex-row justify-between ml-4 items-center">
                <div className="flex flex-row items-center text-xs">
                  <span>Author:</span>
                  <p className="ml-4 text-slate-700">{results[i].author}</p>
                </div>
              </div>
            <div className="flex flex-col ml-4 text-slate-700 text-sm">
              <h4 className="text-blue-600 mt-2">Short Review</h4>
              <textarea
                defaultValue={results[i].summary}
                className="w-[640px] h-[100px] p-1 bg-slate-100"
              />
            </div>
            </div>
            
          </div>
        );
      })}
    </div>
  );
}
