import React from 'react'

export default function ImgCard({path, description}) {
    // console.log('----------', path, description)
  return (
    <div className="mt-2 mb-10 bg-slate-50 rounded-2xl shadow-lg">
            <img
              src={path}
              alt="image of roll drawing"
              className=" rounded-xl"
            />
            <p className="p-2 font-semibold text-xs text-slate-500">
              <sup>**</sup> {description}
            </p>
          </div>
  )
}
