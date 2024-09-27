import React from "react";

export default function AD2_side({company, deal}) {
  return (
    <div className="mt-10 py-2 mb-10 bg-slate-400 rounded-sm shadow-sm">
     
     <a href={company[4]} target="_blank">
      <div className="flex flex-row items-center">
        <div className="mb-2 w-24">
          <img src={company[0]} className="rounded-sm" />
        </div>
        <div>
          <h1 className="text-slate-900 text-3xl font-bold w-48 ml-4 tracking-widest ">
            {company[1]}
          </h1>
          <div className="pl-4 pb-0 text-xs ">
            <p>Tel: {company[2]}</p>
            <p>E-Mail: {company[3]}</p>
          </div>
        </div>
      </div>
      <div className="">
        <ul className="list-disc list-inside text-sm justify-center text-center text-slate-700 font-semibold mt-2 pb-1">
          <li>{deal[0]}</li>
          <li>{deal[1]}</li>
          <li>{deal[2]}</li>
          <li className="text-blue-800">{company[4]}</li>
        </ul>
      </div>
     </a>
    </div>
  );
}
