'use client';
import { useState, useEffect } from 'react';
import CheckTable from '../byReduction/table01';


const Sequence = () => {
	const [inputValues, setInputValues] = useState({
		startDia: '3.026',
		finalDia: '1.180',
	});
	const [inputRate, setInputRate] = useState({
		block1: '17.0',
		block2: '17.0',
		block3: '17.0',
		block4: '17.0',
		block5: '17.0',
		block6: '17.0',
		block7: '17.0',
		block8: '17.0',
		block9: '17.0',
		block10: '17.0',
		block11: '17.0',
		block12: '17.0',
	});

	const [calSize, setCalSize] = useState([]);
	const [red, setRed] = useState([]);
	const [elo, setElo] = useState([]);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setInputValues({
			...inputValues,
			[name]: value,
		});
	};

	const handleChange0 = (event) => {
		const { name, value } = event.target;
		setInputRate({
			...inputRate,
			[name]: value,
		});
	};

	useEffect(() => {
		calculateSize();
	}, [inputValues, inputRate]);

	useEffect(() => {
		let rRate = [];
		let eRate = [];
		for (let i = 0; i < calSize.length - 1; i++) {
			let resultR = calReduction(calSize[i], calSize[i + 1]);
			rRate.push(resultR);
			let resultE = calElongation(calSize[i], calSize[i + 1]);
			eRate.push(resultE);
		}
		setRed(rRate);
		setElo(eRate);
	}, [calSize]);

	// 시퀀스를 구하는 함수
	function calculateSize() {
		let givenDia = inputValues.finalDia;
		let givenRate = inputRate.block9 / 100;
		const arrayRate = Object.values(inputRate);
		const reversed = [...arrayRate].reverse();
		let arraySize = [];
		arraySize.push(inputValues.finalDia);
		for (let i = 0; i < reversed.length; i++) {
			let nextDia = calNext(arraySize[i], reversed[i] / 100);
			arraySize = [...arraySize, nextDia];
		}
		setCalSize(arraySize.reverse());
	}

	function calNext(a, b) {
		return Math.sqrt((b + 1) * Math.pow(a, 2)).toFixed(3);
	}

	function calReduction(a, b) {
		return ((1 - Math.pow(b, 2) / Math.pow(a, 2)) * 100).toFixed(1);
	}

	function calElongation(a, b) {
		return ((Math.pow(a, 2) / Math.pow(b, 2) - 1) * 100).toFixed(1);
	}

	return (
		<div className="m-6">
      <h4 className="my-2 text-slate-600 text-base font-semibold">
        1. Input the start size and final size
      </h4>
      <div className="flex">
        <div className="mb-2 w-52 pl-2">
          <label className="text-slate-500 text-sm mr-2.5">Start Size:</label>
          <input
            className="w-16 border-gray-700 border text-center text-sm text-slate-600"
            type="number"
            step="0.001"
            name="startDia"
            value={inputValues.startDia}
            onChange={handleChange}
          />
        </div>
        <div className="sequence-final">
          <label className="text-slate-500 text-sm mr-2.5">Final Size:</label>
          <input
            className="w-16 border-gray-700 border text-center text-sm text-slate-600"
            type="number"
            step="0.001"
            name="finalDia"
            value={inputValues.finalDia}
            onChange={handleChange}
          />
        </div>
      </div>

      <h4 className="mt-4 text-slate-600 text-base font-semibold">
        2. Design the drawing sequence by elongation rate
      </h4>
      <div className="flex flex-col mt-3 pl-2">
        {/* 헤더 섹션 */}
        <div className="flex">
          {[
            "#Start",
            "#1",
            "#2",
            "#3",
            "#4",
            "#5",
            "#6",
            "#7",
            "#8",
            "#9",
            "#10",
            "#11",
            "#12",
          ].map((text, index) => (
            <p key={index} className="cell">
              {text}
            </p>
          ))}
        </div>

        {/* 입력 섹션 */}
        <div className="flex">
          <input
            className="input-cell"
            type="text"
            value="E-Rate(%)"
            readOnly
          />
          {Object.keys(inputRate).map((block, index) => (
            <input
              key={index}
              className="input-cell"
              type="number"
              step="0.1"
              name={block}
              value={inputRate[block]}
              onChange={handleChange0}
            />
          ))}
        </div>

        {/* Diameter 섹션 */}
        <div className="flex">
          <p
            className="cell"
            style={{
              backgroundColor:
                calSize[0] <= inputValues.startDia + 0.001 &&
                calSize[0] >= inputValues.startDia - 0.001
                  ? "lightgreen"
                  : "orange",
            }}
          >
            ⌀{calSize[0]}
          </p>
          {calSize.slice(1, 12).map((size, index) => (
            <p key={index} className="cell">
              {size}
            </p>
          ))}
          <p className="cell">{inputValues.finalDia}</p>
        </div>
      </div>

      <hr />

      <h4 className="mt-6 mb-2 text-slate-600 text-base font-semibold">
        3. Select CRD or PCD and its spec. according to detailed engineering
      </h4>
      <div className="pl-2">
        <CheckTable data={calSize} data1={red} data2={elo} />
      </div>
    </div>
	);
};

export default Sequence;
