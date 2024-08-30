'use client';
import { useState } from 'react';
import { useEffect } from 'react';
import CheckTable from './table01'

const Sequence01 = () => {
	const [inputValues, setInputValues] = useState({
		startDia: '4.700',
		finalDia: '1.180',
	});
	const [inputRate, setInputRate] = useState({
		block1: '25',
		block2: '30',
		block3: '28',
		block4: '26',
		block5: '25.5',
		block6: '25',
		block7: '24',
		block8: '22',
		block9: '20',
		block10: '15',
		block11: '0',
		block12: '0',
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
		return Math.sqrt(Math.pow(a, 2) / (1 - b)).toFixed(3);
	}
	function calReduction(a, b) {
		return ((1 - Math.pow(b, 2) / Math.pow(a, 2)) * 100).toFixed(1);
	}
	function calElongation(a, b) {
		return ((Math.pow(a, 2) / Math.pow(b, 2) - 1) * 100).toFixed(1);
	}
	
	return (
		<div className='sequence-body'>
			<div className='sequence-input'>
				<div className='sequence-start'>
					<label>Start Size:</label>
					<input type='number' step='0.001' name='startDia' value={inputValues.startDia} onChange={handleChange} />
				</div>
				<div className='sequence-final'>
					<label>Final Size:</label>
					<input type='number' step='0.001' name='finalDia' value={inputValues.finalDia} onChange={handleChange} />
				</div>
			</div>
			<h4>Design Die Sequence by area reduction rate</h4>
			<div className='sequence-table'>
				<div className='columns'>
					<p>#Start</p>
					<p>#1</p>
					<p>#2</p>
					<p>#3</p>
					<p>#4</p>
					<p>#5</p>
					<p>#6</p>
					<p>#7</p>
					<p>#8</p>
					<p>#9</p>
					<p>#10</p>
					<p>#11</p>
					<p>#12</p>
				</div>
				<div className='columns'>
					<input type='text' value='R-Rate(%)' readOnly />
					<input type='number' step='0.1' name='block1' value={inputRate.block1} onChange={handleChange0} />
					<input type='number' step='0.1' name='block2' value={inputRate.block2} onChange={handleChange0} />
					<input type='number' step='0.1' name='block3' value={inputRate.block3} onChange={handleChange0} />
					<input type='number' step='0.1' name='block4' value={inputRate.block4} onChange={handleChange0} />
					<input type='number' step='0.1' name='block5' value={inputRate.block5} onChange={handleChange0} />
					<input type='number' step='0.1' name='block6' value={inputRate.block6} onChange={handleChange0} />
					<input type='number' step='0.1' name='block7' value={inputRate.block7} onChange={handleChange0} />
					<input type='number' step='0.1' name='block8' value={inputRate.block8} onChange={handleChange0} />
					<input type='number' step='0.1' name='block9' value={inputRate.block9} onChange={handleChange0} />
					<input type='number' step='0.1' name='block10' value={inputRate.block10} onChange={handleChange0} />
					<input type='number' step='0.1' name='block11' value={inputRate.block11} onChange={handleChange0} />
					<input type='number' step='0.1' name='block12' value={inputRate.block12} onChange={handleChange0} />
				</div>
				<div className='columns'>
					<p
						style={{
							backgroundColor:
								calSize[0] <= inputValues.startDia + 0.001 && calSize[0] >= inputValues.startDia - 0.001
									? 'lightgreen'
									: 'orange',
						}}
					>
						{calSize[0]}
					</p>

					<p>{calSize[1]}</p>
					<p>{calSize[2]}</p>
					<p>{calSize[3]}</p>
					<p>{calSize[4]}</p>
					<p>{calSize[5]}</p>
					<p>{calSize[6]}</p>
					<p>{calSize[7]}</p>
					<p>{calSize[8]}</p>
					<p>{calSize[9]}</p>
					<p>{calSize[10]}</p>
					<p>{calSize[11]}</p>
					<p>{inputValues.finalDia}</p>
				</div>
			</div>
			<hr />

			<h4>Selection CRD or PCD according to detailed engineering</h4>
			<CheckTable data={calSize} data1={red} data2={elo} />
		</div>
	);
};
export default Sequence01;
