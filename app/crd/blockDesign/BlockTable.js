'use client';
import { useState } from 'react';
import { useEffect } from 'react';
import CheckTable from './table01'

const BlockTable = () => {
	const [inputValues, setInputValues] = useState({
		startDia: '4.70',
		finalDia: '4.18',
		factor: '1.065',
		halpGap: '0.10',
		edgeR: '0.20',
	});

	const handleChange0 = (event) => {
		const { name, value } = event.target;
		setInputValues({
			...inputValues,
			[name]: value,
		});
	};
	const [initialOP, setInitialOP] = useState([]);
	const [rows, setRows] = useState(4);
	const [ipValues, setIpValues] = useState(Array(3).fill(''));
	const [opValues, setOpValues] = useState(initialOP.slice(1));
	// const [opValues, setOpValues] = useState(['4.50', '4.30', '4.11', '4.02']);

	// 시퀀스를 구하는 함수
	function calculateSize() {
		let givenDia = inputValues.finalDia;
		let givenRateOfR = 0.08;
		let givenRateOfS = 0.04;
		let arraySize = [];
		arraySize.push(inputValues.startDia);
		// console.log('----------', rows)
		for (let i = 0; i < rows; i++) {
			if (i === rows - 1) {
				let nextDia = calNext(arraySize[i], givenRateOfS);
				arraySize = [...arraySize, nextDia];
			} else {
				let nextDia = calNext(arraySize[i], givenRateOfR);
				arraySize = [...arraySize, nextDia];
			}
			// console.log('??????', arraySize)
			setInitialOP(arraySize)
		}	
	}

	// console.log('-----initialOP', initialOP.slice(1))
	function calNext(a, b) {
		return Math.sqrt((1-b) * Math.pow(a, 2)).toFixed(3);
	}
	function calReduction(a, b) {
		return ((1 - Math.pow(b, 2) / Math.pow(a, 2)) * 100).toFixed(1);
	}
	// function calElongation(a, b) {
	// 	return ((Math.pow(a, 2) / Math.pow(b, 2) - 1) * 100).toFixed(1);
	// }


	const handleRowChange = (event) => {
		const inputRows = Math.min(10, Math.max(1, Number(event.target.value)));
		setRows(inputRows);
		setIpValues((prev) => {
			const newValues = [...prev];
			if (inputRows > prev.length) {
				newValues.push(...Array(inputRows - prev.length).fill(''));
			} else {
				newValues.splice(inputRows);
			}
			return newValues;
		});
	};

	// const handleIpChange = (index, event) => {
	// 	const newValues = [...ipValues];
	// 	newValues[index] = event.target.value;
	// 	setIpValues(newValues);
	// };
	const handleOpChange = (index, event) => {
		const newValues = [...opValues];
		newValues[index] = event.target.value;
		setOpValues(newValues);
	};
	const imageStyle = {
		width: '800px',
	};

	useEffect(() => {
		calculateSize();
	}, [inputValues, rows]);
	useEffect(() => {
		setOpValues(initialOP.slice(1));
	}, [initialOP]);

	const createTable = () => {
		const columns = ['no', 'IP', 'OP', 'type', 'R rate', 'rR', 'G/2', 'h', 'h+G/2', 'eR', 'angle'];
		let tableRows = [];
		for (let i = 0; i < rows; i++) {
			let cells = columns.map((col, j) => {
				if (col == 'no') {
					return <td style={{ width: '30px' }} key={j}>{`${i + 1}`}</td>;
				}
				if (col == 'IP') {
					if (i === 0) {
						return (
							<td style={{ width: '60px' }} key={j} value={inputValues.startDia || ''}>
								{inputValues.startDia}
							</td>
						);
					}
					return (
						<td style={{ width: '60px' }} key={j}>
							{opValues[i - 1]}
						</td>
					);
				}
				if (col === 'OP') {
					return (
						<td key={j} style={{ width: '80px' }}>
							<input
								type='number'
								step='0.01'
								value={opValues[i] || ''}
								style={{ width: '60px', textAlign:'center' }}
								onChange={(e) => handleOpChange(i, e)}
							/>
						</td>
					);
				}
				if (col === 'type') {
					if (i === rows - 1) {
						return (
							<td key={j} style={{ width: '60px' }}>
								S
							</td>
						);
					}
					return (
						<td key={j} style={{ width: '60px' }}>
							{' '}
							R
						</td>
					);
				}
				if (col === 'R rate') {
					if (i === 0) {
						return (
							<td key={j} style={{ width: '60px' }}>
								{calReduction(inputValues.startDia, opValues[i])}
							</td>
						);
					} else {
						return (
							<td key={j} style={{ width: '60px' }}>
								{calReduction(opValues[i - 1], opValues[i])}
							</td>
						);
					}
				}

				if (col === 'rR') {
					if (i === rows - 1) {
						return (
							<td key={j} style={{ width: '60px' }}>
								{opValues[i] / 2}
							</td>
						);
					} else {
						return (
							<td key={j} style={{ width: '60px' }}>
								{(opValues[i] / 2 * inputValues.factor).toFixed(3)}
							</td>
						);
					}
				}
				
				if (col === 'G/2') {
					if (i === rows - 1) {
						return (
							<td key={j} style={{ width: '60px' }}>
								{inputValues.halpGap / 2}
							</td>
						);
					} else {
						return (
							<td key={j} style={{ width: '60px' }}>
								{inputValues.halpGap}
							</td>
						);
					}
				}

				if (col === 'h') {
					if (i === rows - 1) {
						return (
							<td key={j} style={{ width: '60px' }}>
								{(opValues[i] / 2 - inputValues.halpGap / 2).toFixed(3)}
							</td>
						);
					} else {
						return (
							<td key={j} style={{ width: '60px' }}>
								{(opValues[i] / 2 - inputValues.halpGap).toFixed(3)}
							</td>
						);
					}
				}
				
				if (col === 'h+G/2') {
					
					return (
						<td key={j} style={{ width: '60px' }}>
								{(opValues[i] / 2 ).toFixed(3)}
							</td>
						);
						
					}
					
					if (col === 'eR') {
						if (i === rows - 1) {
							return (
								<td key={j} style={{ width: '60px' }}>
									{(inputValues.edgeR * 0.75).toFixed(2)}
								</td>
							);
						} else {
							return (
								<td key={j} style={{ width: '60px' }}>
									{(inputValues.edgeR)}
								</td>
							);
						}
					}
					
					if (col === 'angle') {
						if (i === rows - 1) {
							return (
								<td key={j} style={{ width: '60px' }}>
									40°
								</td>
							);
						} else {
							return (
								<td key={j} style={{ width: '60px' }}>
									-
								</td>
							);
						}
					}
			});
			tableRows.push(<tr key={i}>{cells}</tr>);
		}
		return tableRows;
	};

	return (
		<div className='sequence-body'>
			<div className='sequence-input'>
				<div className='sequence-start'>
					<label>Start Size:</label>
					<input type='number' step='0.01' name='startDia' value={inputValues.startDia} onChange={handleChange0} />
				</div>
				<div className='sequence-final'>
					<label>Target Size:</label>
					<input type='number' step='0.01' name='finalDia' value={inputValues.finalDia} onChange={handleChange0} />
				</div>
				<div className='block-table-input'>
					<label htmlFor='rows'>No. of Stage (3-6):</label>
					<input type='number' id='rows' name='rows' min='3' max='6' value={rows} onChange={handleRowChange} />
				</div>
			</div>

			<div className='sequence-input'>
				<div className='sequence-factor'>
					<label>R factor&nbsp;&nbsp;&nbsp;:</label>
					<input
						type='number'
						step='0.001'
						name='factor'
						style={{ backgroundColor: 'grey' }}
						value={inputValues.factor}
						onChange={handleChange0}
					/>
				</div>
				<div className='sequence-halpGap'>
					<label>G/2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</label>
					<input
						type='number'
						step='0.01'
						name='halpGap'
						style={{ backgroundColor: 'grey' }}
						value={inputValues.halpGap}
						onChange={handleChange0}
					/>
				</div>
				<div className='sequence-edgeR'>
					<label>eR (Edge Round)&nbsp;&nbsp;:</label>
					<input
						type='number'
						step='0.01'
						name='edgeR'
						style={{ backgroundColor: 'grey' }}
						value={inputValues.edgeR}
						onChange={handleChange0}
					/>
					<br/>
				</div>
			</div>
					<p style={{fontSize:'14px', fontStyle: 'italic'}}>** Normal case, Do not need to change grayed input. </p>

			<div className='sequence-table'></div>

			<div className='crd-block-table'>
				<br />
				<table border='1'>
					<thead>
						<tr>
							{['no', 'IP', 'OP', 'type', 'R rate', 'rR', 'G/2', 'h', 'h+G/2', 'eR', 'angle'].map((header, index) => (
								<th key={index}>{header}</th>
							))}
						</tr>
					</thead>
					<tbody>{createTable()}</tbody>
				</table>
			</div>
			<div className='crd-stage-image'>
				{rows === 3 && <img src='../3-stage-crd.png' alt='Image of 3 stage' style={imageStyle} />}
				{rows === 4 && <img src='../4-stage-crd.png' alt='Image of 4 stage' style={imageStyle} />}
				{rows === 5 && <img src='../5-stage-crd.png' alt='Image of 5 stage' style={imageStyle} />}
				{rows === 6 && <img src='../6-stage-crd.png' alt='Image of 6 stage' style={imageStyle} />}
			</div>
		</div>
	);
};
export default BlockTable;
