'use client';
import { useState } from 'react';
import { useEffect } from 'react';

const DrawFormingRoll = () => {
	const [inputValues, setInputValues] = useState({
		input1: '0.9',
		input2: '14.0',
	});

	const [selectedRadio, setSelectedRadio] = useState('option1');

	const handleChange = (event) => {
		const { name, value } = event.target;
		setInputValues({
			...inputValues,
			[name]: value,
		});
	};

	const handleRadioChange = (event) => {
		setSelectedRadio(event.target.value);
	};

	useEffect(() => {
		console.log(selectedRadio, inputValues);
		drawProfile();
	}, [inputValues, selectedRadio]);

	return (
		<div >
			<div className="pl-4 py-1">
				<div className="flex flex-row justify-stretch py-1">
					<div className="w-60">
						<label className="text-slate-500 text-sm mr-2.5">Thickness(mm):</label>
						<input className="w-16 border-gray-700 border text-center text-sm text-slate-600"
							type='number'
							name='input1'
							step='0.1'
							value={inputValues.input1}
							onChange={handleChange}
						/>
					</div>
					<div className="w-48">
						<label className="text-slate-500 text-sm mr-2.5">Width(mm):</label>
						<input className="w-16 border-gray-700 border text-center text-sm text-slate-600"
							type='number'
							name='input2'
							step='0.1'
							value={inputValues.input2}
							min='8'
							max='20'
							onChange={handleChange}
						/>
					</div>
				</div>

				<div className="pl-0 pt-0 mt-1 w-96">
					<fieldset className="border-gray-700 border rounded-md flex flex-row justify-left h-14 items-center pb-2">
						<legend className="m-2 pl-2 text-slate-500 text-sm ">Choose Forming Stand</legend>
						<input className="ml-2 mr-1 "
							type='radio'
							id='radio_F1'
							name='myRadio'
							value='option1'
							checked={selectedRadio === 'option1'}
							onChange={handleRadioChange}
						/>
						<label className="ml-1 mr-2 text-sm" htmlFor='radio_F1'>F1</label>
						<input className="ml-4 mr-1 " type='radio' id='radio_F2' name='myRadio' value='option2' onChange={handleRadioChange} />
						<label className="ml-1 mr-2 text-sm" htmlFor='radio_F2'>F2</label>
						<input className="ml-4 mr-1 " type='radio' id='radio_FG1' name='myRadio' value='option3' onChange={handleRadioChange} />
						<label className="ml-1 mr-2 text-sm" htmlFor='radio_FG1'>FG1</label>
						<input className="ml-4 mr-1 " type='radio' id='radio_FG2' name='myRadio' value='option4' onChange={handleRadioChange} />
						<label className="ml-1 mr-2 text-sm" htmlFor='radio_FG2'>FG2</label>
						<input className="ml-4 mr-1 " type='radio' id='radio_C1' name='myRadio' value='option5' onChange={handleRadioChange} />
						<label className="ml-1 mr-2 text-sm" htmlFor='radio_C1'>C1</label>
						<input className="ml-4 mr-1 " type='radio' id='radio_C2' name='myRadio' value='option6' onChange={handleRadioChange} />
						<label className="ml-1 mr-2 text-sm" htmlFor='radio_C2'>C2</label>
						<input className="ml-4 mr-1 " type='radio' id='radio_C3' name='myRadio' value='option7' onChange={handleRadioChange} />
						<label className="ml-1 mr-2 text-sm" htmlFor='radio_C3'>C3</label>
						<input className="ml-4 mr-1 " type='radio' id='radio_C4' name='myRadio' value='option8' onChange={handleRadioChange} />
						<label className="ml-1 mr-2 text-sm" htmlFor='radio_C4'>C4</label>
						<input className="ml-4 mr-1 " type='radio' id='radio_C5' name='myRadio' value='option9' onChange={handleRadioChange} />
						<label className="ml-1 mr-4 text-sm" htmlFor='radio_C5'>C5</label>
					</fieldset>
				</div>
				<br />
			</div>
			<div className='ml-4'>
				<canvas className="bg-slate-100 rounded-xl shadow-lg" id='formingCanvas' width='800' height='650'></canvas>
			</div>
			<br></br>
		</div>
	);

	function drawProfile() {
		const formingCanvas = document.getElementById('formingCanvas');
		const ctx = formingCanvas.getContext('2d');
		const PI = Math.PI;
		const scaleCanvas = 35;
		const sT = inputValues.input1 * scaleCanvas;
		let sW;
		if (inputValues.input2 < 8 || inputValues.input2 == '' || inputValues.input2 == 'null') {
			sW = 8 * scaleCanvas;
		} else if (inputValues.input2 > 20) {
			sW = 20 * scaleCanvas;
		} else {
			sW = inputValues.input2 * scaleCanvas;
		}
		console.log(sW);
		const x0 = 400;
		const y0 = 125;

		switch (selectedRadio) {
			case 'option1':
				drawF1();
				break;
			case 'option2':
				drawF2();
				break;
			case 'option3':
				drawFG1();
				break;
			case 'option4':
				drawFG2();
				break;
			case 'option5':
				drawC1();
				break;
			case 'option6':
				drawC2();
				break;
			case 'option7':
				drawC3();
				break;
			case 'option8':
				drawC4();
				break;
			case 'option9':
				drawC5();
				break;
			default:
				break;
		}

		function getCoord(a, b, R) {
			const solA = 1.49;
			let solB = -(1.4 * b - 2 * a);
			let solC = Math.pow(solB, 2) - 4 * 1.49 * (Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(R, 2));
			let X1 = (solB + Math.sqrt(solC)) / (2 * solA);
			let X2 = (solB - Math.sqrt(solC)) / (2 * solA);
			let Y1 = -0.7 * X1;
			let Y2 = -0.7 * X2;
			let coordinate = [X1, Y1, X2, Y2];
			return coordinate;
		}
			// 좌표, l0: 치수선 높이(좌표에서의 거리)
		function drawDimTopHor(dx1, dy1, dx2, dy2, l0, g0, l1, pos) {
			ctx.lineWidth = 0.5;
			ctx.strokeStyle = 'blue';
			ctx.setLineDash([]);
			ctx.beginPath();
			if (pos == 0) {
				ctx.moveTo(dx1, dy1 - g0);
				ctx.lineTo(dx1, dy1 - g0 - l0);
				ctx.moveTo(dx2, dy2 - g0);
				ctx.lineTo(dx2, dy1 - g0 - l0);

				if ((dx2 - dx1) / 2 < 3 * l1) {
					ctx.moveTo(dx1 - 3 * l1, dy1 - l0);
					ctx.lineTo(dx2 + 3 * l1, dy1 - l0);
					ctx.stroke();

					ctx.moveTo(dx1, dy1 - l0);
					ctx.lineTo(dx1 - l1, dy1 - l0 - l1 / 2);
					ctx.lineTo(dx1 - l1, dy1 - l0 + l1 / 2);
					ctx.closePath();
					ctx.fillStyle = 'blue';
					ctx.fill();
					ctx.moveTo(dx2, dy1 - l0);
					ctx.lineTo(dx2 + l1, dy1 - l0 - l1 / 2);
					ctx.lineTo(dx2 + l1, dy1 - l0 + l1 / 2);
					ctx.closePath();
					ctx.fillStyle = 'blue';
					ctx.fill();
				} else {
					ctx.moveTo(dx1, dy1 - l0);
					ctx.lineTo(dx2, dy1 - l0);
					ctx.stroke();

					ctx.moveTo(dx1, dy1 - l0);
					ctx.lineTo(dx1 + l1, dy1 - l0 - l1 / 2);
					ctx.lineTo(dx1 + l1, dy1 - l0 + l1 / 2);
					ctx.closePath();
					ctx.fillStyle = 'blue';
					ctx.fill();
					ctx.moveTo(dx2, dy1 - l0);
					ctx.lineTo(dx2 - l1, dy1 - l0 - l1 / 2);
					ctx.lineTo(dx2 - l1, dy1 - l0 + l1 / 2);
					ctx.closePath();
					ctx.fillStyle = 'blue';
					ctx.fill();
				}

				ctx.font = '14px Arial';
				ctx.fillStyle = 'blue';
				ctx.textAlign = 'center';
				ctx.fillText(((dx2 - dx1) / scaleCanvas).toFixed(3), x0, dy1 - l0 - g0 / 1.5);
			} else {
				ctx.moveTo(dx1, dy1 + g0);
				ctx.lineTo(dx1, dy1 + g0 + l0);
				ctx.moveTo(dx2, dy2 + g0);
				ctx.lineTo(dx2, dy2 + g0 + l0);
				ctx.moveTo(dx1, dy1 + l0);
				ctx.lineTo(dx2, dy1 + l0);
				ctx.stroke();
				ctx.moveTo(dx1, dy1 + l0);
				ctx.lineTo(dx1 + l1, dy1 + l0 - l1 / 2);
				ctx.lineTo(dx1 + l1, dy1 + l0 + l1 / 2);
				ctx.closePath();
				ctx.fillStyle = 'blue';
				ctx.fill();
				ctx.moveTo(dx2, dy1 + l0);
				ctx.lineTo(dx2 - l1, dy2 + l0 - l1 / 2);
				ctx.lineTo(dx2 - l1, dy2 + l0 + l1 / 2);
				ctx.closePath();
				ctx.fillStyle = 'blue';
				ctx.fill();

				ctx.font = '14px Arial';
				ctx.fillStyle = 'blue';
				ctx.textAlign = 'center';
				ctx.fillText(((dx2 - dx1) / scaleCanvas).toFixed(3), x0, dy1 + l0 + g0 / 1.5 - 16);
			}
		}

		function drawDimVer(dx1, dy1, dx2, dy2, l0, g0, l1, pos) {
			// x값이 큰쪽을 먼저 지정
			ctx.lineWidth = 0.5;
			ctx.strokeStyle = 'blue';
			ctx.setLineDash([]);
			ctx.beginPath();
			if (pos == 0) {
				ctx.moveTo(dx1 + g0, dy1);
				ctx.lineTo(dx1 + g0 + l0, dy1); //어느 x가 더 큰지 확인하여 선택
				ctx.moveTo(dx2 + g0, dy2);
				ctx.lineTo(dx1 + g0 + l0, dy2);
				// ctx.moveTo(dx1 + l0, dy1)
				// ctx.lineTo(dx1 + l0, dy2)
				ctx.stroke();
				// draw arrow
				if ((dy2 - dy1) / 2 < 3 * l1) {
					console.log('small');
					ctx.beginPath();
					ctx.moveTo(dx1 + l0, dy1 - 3 * l1);
					ctx.lineTo(dx1 + l0, dy2 + 3 * l1);
					ctx.stroke();

					ctx.moveTo(dx1 + l0, dy1);
					ctx.lineTo(dx1 + l0 - l1 / 2, dy1 - l1);
					ctx.lineTo(dx1 + l0 + l1 / 2, dy1 - l1);
					ctx.closePath();
					ctx.fillStyle = 'blue';
					ctx.fill();
					ctx.moveTo(dx1 + l0, dy2);
					ctx.lineTo(dx1 + l0 - l1 / 2, dy2 + l1);
					ctx.lineTo(dx1 + l0 + l1 / 2, dy2 + l1);
					ctx.closePath();
					ctx.fillStyle = 'blue';
					ctx.fill();
				} else {
					console.log('big');
					ctx.moveTo(dx1 + l0, dy1);
					ctx.lineTo(dx1 + l0, dy2);
					ctx.stroke();
					ctx.moveTo(dx1 + l0, dy1);
					ctx.lineTo(dx1 + l0 - l1 / 2, dy1 + l1);
					ctx.lineTo(dx1 + l0 + l1 / 2, dy1 + l1);
					ctx.closePath();
					ctx.fillStyle = 'blue';
					ctx.fill();
					ctx.moveTo(dx1 + l0, dy2);
					ctx.lineTo(dx1 + l0 - l1 / 2, dy2 - l1);
					ctx.lineTo(dx1 + l0 + l1 / 2, dy2 - l1);
					ctx.closePath();
					ctx.fillStyle = 'blue';
					ctx.fill();
				}
				ctx.font = '14px Arial';
				ctx.fillStyle = 'blue';
				// ctx.textAlign = 'center';
				ctx.save(); // 현재 상태 저장
				ctx.translate(dx1 + l0 - g0 / 2, (dy2 - dy1) / 2 + dy1); // 회전 중심을 텍스트 위치로 이동
				ctx.rotate(Math.PI / -2); // 90도 회전 (라디안 단위로)
				ctx.textAlign = 'center';
				ctx.fillText(((dy2 - dy1) / scaleCanvas).toFixed(3), 0, 0);
				ctx.restore();
				// ctx.fillText(((dy2 - dy1) / scaleCanvas).toFixed(3), dx1 + l0 + (g0 / 4), ((dy2 - dy1) / 2) + dy1);
			} else {
				ctx.moveTo(dx1 - g0, dy1);
				ctx.lineTo(dx1 - g0 - l0, dy1); //어느 x가 더 큰지 확인하여 선택
				ctx.moveTo(dx2 - g0, dy2);
				ctx.lineTo(dx1 - g0 - l0, dy2);
				ctx.moveTo(dx1 - l0, dy1);
				ctx.lineTo(dx1 - l0, dy2);
				ctx.stroke();
				ctx.moveTo(dx1 - l0, dy1);
				ctx.lineTo(dx1 - l0 - l1 / 2, dy1 + l1);
				ctx.lineTo(dx1 - l0 + l1 / 2, dy1 + l1);
				ctx.closePath();
				ctx.fillStyle = 'blue';
				ctx.fill();
				ctx.moveTo(dx1 - l0, dy2);
				ctx.lineTo(dx1 - l0 - l1 / 2, dy2 - l1);
				ctx.lineTo(dx1 - l0 + l1 / 2, dy2 - l1);
				ctx.closePath();
				ctx.fillStyle = 'blue';
				ctx.fill();
				ctx.font = '14px Arial';
				ctx.fillStyle = 'blue';
				ctx.save(); // 현재 상태 저장
				ctx.translate(dx1 - l0 - g0 / 2, (dy2 - dy1) / 2 + dy1); // 회전 중심을 텍스트 위치로 이동
				ctx.rotate(Math.PI / -2); // 90도 회전 (라디안 단위로)
				ctx.textAlign = 'center';
				ctx.fillText(((dy2 - dy1) / scaleCanvas).toFixed(3), 0, 0);
				ctx.restore();
			}
		}

		function drawDimRound(dx1, dy1, dR, angle, l1, pos) {
			let b1 = Math.sin(angle * (Math.PI / 180)) * dR;
			let c1 = Math.cos(angle * (Math.PI / 180)) * dR;
			let b11 = Math.cos((90 - angle - 30) * (Math.PI / 180)) * l1 ;
			let c11 = Math.sqrt(Math.pow(l1, 2) - Math.pow(b11, 2));
			let b111 = Math.cos(angle * (Math.PI / 180)) * l1 ;
			let c111 = Math.sqrt(Math.pow(l1, 2) - Math.pow(b111, 2));
			ctx.lineWidth = 0.5;
			ctx.strokeStyle = 'blue';
			ctx.setLineDash([]);
			ctx.beginPath();

			switch (pos) {
				case 1:
					ctx.moveTo(dx1, dy1);
					ctx.lineTo(dx1 + b1, dy1 - c1);
					ctx.stroke();
					ctx.moveTo(dx1 + b1, dy1 - c1);
					ctx.lineTo(dx1 + b1 - b11, dy1 - c1 + c11);
					ctx.lineTo(dx1 + b1 - b11 + b111, dy1 - c1 + c11 + c111);
					ctx.closePath();
					ctx.fillStyle = 'blue';
					ctx.fill();
					ctx.font = '14px Arial';
					ctx.fillStyle = 'blue';
					ctx.textAlign = 'center';
					ctx.fillText('r: ' + (dR / scaleCanvas).toFixed(3), dx1 + 40, dy1 - dR / 3);
					break;
				case 2:
					break;
				case 3:
					ctx.moveTo(dx1, dy1);
					ctx.lineTo(dx1 + b1, dy1 + c1);
					ctx.stroke();
					ctx.moveTo(dx1 + b1, dy1 + c1);
					ctx.lineTo(dx1 + b1 - b11, dy1 + c1 - c11);
					ctx.lineTo(dx1 + b1 - b11 + b111, dy1 + c1 - c11 - c111);
					// ctx.stroke()
					ctx.closePath();
					ctx.fillStyle = 'blue';
					ctx.fill();
					ctx.font = '14px Arial';
					ctx.fillStyle = 'blue';
					ctx.textAlign = 'center';
					ctx.fillText('r: ' + (dR / scaleCanvas).toFixed(3), dx1 + b1 + 20, dy1 + c1 + 20);
					break;
				case 4:
					ctx.moveTo(dx1, dy1);
					ctx.lineTo(dx1 - b1, dy1 + c1);
					ctx.stroke();

					ctx.moveTo(dx1 - b1, dy1 + c1);
					ctx.lineTo(dx1 - b1 + b11, dy1 + c1 - c11);
					ctx.lineTo(dx1 - b1 + b11 - b111, dy1 + c1 - c11 - c111);
					// ctx.stroke()
					ctx.closePath();
					ctx.fillStyle = 'blue';
					ctx.fill();
					ctx.font = '14px Arial';
					ctx.fillStyle = 'blue';
					ctx.textAlign = 'center';
					ctx.fillText('r: ' + (dR / scaleCanvas).toFixed(3), dx1 + 10, dy1 - 10);

					break;
			}
		}

		function drawF1() {
			let gR1, gR2, eR, d1;
			let x1, x1a, x2, x3, x3a, x4, x4a, x5, x5a, x6, x6a, y1, y2, y3, y4, y5, y6;
			// let x0 = 400;
			// let y0 = 160; // canvas.height: 630
			gR1 = sW * 0.575;
			gR2 = sW / PI / 2 + sT / 2.65;
			d1 = sW - 0.2 * scaleCanvas; // y0 to y6 dist
			eR = 1 * scaleCanvas;
			x1 = x0 - (sW * 0.6) / 2;
			x1a = x0 + (sW * 0.6) / 2;
			x4 = x0 - (sW + 0.15 * scaleCanvas) / 2;
			x4a = x0 + (sW + 0.15 * scaleCanvas) / 2;
			x5 = x4 - eR;
			x5a = x4a + eR;
			x6 = x5 - eR / 2;
			x6a = x5a + eR / 2;

			let dy1, dy2, a0, b0, angle, c0;
			a0 = Math.pow(gR1 + gR2, 2);
			b0 = Math.pow((sW * 0.6) / 2, 2);
			dy1 = Math.sqrt(a0 - b0);
			angle = Math.asin((sW * 0.6) / 2 / (gR1 + gR2));
			c0 = Math.sin(angle) * gR1; // to get x2
			dy2 = Math.sqrt(Math.pow(gR1, 2) - Math.pow(c0, 2));
			x2 = x0 - c0;
			let x2a = x0 + c0;
			let dy3 = sW * 0.25; // refer sketchup layout "forming for canvas"
			let a1, b1, c1;
			c1 = d1 - dy1 - dy3;
			b1 = (sW + 0.15 * scaleCanvas - sW * 0.6) / 2;
			a1 = Math.sqrt(Math.pow(c1, 2) + Math.pow(b1, 2));

			// Make Deatil for the calculation
			let angle1, angle2, angle3;
			angle1 = 0.7071; //?? from where
			angle2 = Math.asin(c1 / a1);
			angle3 = angle1 - angle2;

			// console.log(c0, (sW * 0.6) / 2)
			let b2, c2;
			c2 = Math.sin(angle3) * gR2;
			b2 = Math.cos(angle3) * gR2;
			x3 = x0 - (sW * 0.6) / 2 - b2;
			x3a = x0 + (sW * 0.6) / 2 + b2;
			y1 = y0 + eR;
			y2 = y0 + sW * 0.25;
			y3 = y0 + (sW - 0.2 * scaleCanvas) - dy1;
			y5 = y0 + (sW - 0.2 * scaleCanvas) - dy2;
			y6 = y0 + d1;
			y4 = y3 + c2;

			// Draw Bottom Roll Profile
			ctx.clearRect(0, 0, formingCanvas.width, formingCanvas.height);
			ctx.lineWidth = 2;
			ctx.strokeStyle = '#000000';
			ctx.fillStyle = 'hsl(0, 0%, 98%)';
			ctx.setLineDash([]);
			ctx.beginPath();
			ctx.moveTo(x6, y0);
			ctx.lineTo(x5, y0);
			ctx.arc(x5, y1, eR, (270 * PI) / 180, (360 * PI) / 180, false);
			ctx.moveTo(x4, y1);
			ctx.lineTo(x4, y2);
			ctx.lineTo(x3, y4);
			ctx.arc(x1, y3, gR2, (180 * PI) / 180 - angle3, (90 * PI) / 180 - angle, true);
			ctx.arc(x0, y6, gR1, (270 * PI) / 180 - angle, (270 * PI) / 180 + angle, false);
			ctx.arc(x1a, y3, gR2, (90 * PI) / 180 + angle, angle3, true);
			ctx.moveTo(x3a, y4);
			ctx.lineTo(x4a, y2);
			ctx.lineTo(x4a, y1);
			ctx.arc(x5a, y1, eR, (180 * PI) / 180, (270 * PI) / 180, false);
			ctx.lineTo(x6a, y0);
			ctx.stroke();

			drawDimTopHor(x4, y1, x4a, y1, 110, 10, 8, 0);

			// Top Roll Profile
			ctx.lineWidth = 2;
			ctx.strokeStyle = '#000000';
			let tx3 = x1 - (gR2 - sT);
			let tx4 = tx3 - eR;
			let tx3a = x1a + (gR2 - sT);
			let tx4a = tx3a + eR;
			ctx.beginPath();
			ctx.moveTo(x6, y0 - 0.2 * scaleCanvas);
			ctx.lineTo(tx4, y0 - 0.2 * scaleCanvas);
			ctx.arc(tx4, y1 - 0.2 * scaleCanvas, eR, (270 * PI) / 180, (360 * PI) / 180, false);
			ctx.moveTo(tx3, y1 - 0.2 * scaleCanvas);
			ctx.lineTo(tx3, y3);
			ctx.arc(x1, y3, gR2 - sT, (180 * PI) / 180, (90 * PI) / 180 - angle, true);
			ctx.arc(x0, y6, gR1 + sT, (270 * PI) / 180 - angle, (270 * PI) / 180 + angle, false);
			ctx.arc(x1a, y3, gR2 - sT, (90 * PI) / 180 + angle, (360 * PI) / 180, true);
			ctx.lineTo(tx3a, y1 - 0.2 * scaleCanvas);
			ctx.arc(tx4a, y1 - 0.2 * scaleCanvas, eR, (180 * PI) / 180, (270 * PI) / 180, false);
			ctx.lineTo(x6a, y0 - 0.2 * scaleCanvas);
			ctx.stroke();
			drawDimTopHor(tx3, y0 + eR - 0.2 * scaleCanvas, tx3a, y0 + eR - 0.2 * scaleCanvas, 74, 10, 8, 0);

			let canH = formingCanvas.height;
			let canW = formingCanvas.width;
			// Draw Center line
			ctx.strokeStyle = 'red';
			ctx.lineWidth = 0.5;
			ctx.setLineDash([10, 3, 2, 3]);
			ctx.beginPath();
			ctx.moveTo(x0, y0);
			ctx.lineTo(x0, canH);

			ctx.moveTo(x1 - 25, y3);
			ctx.lineTo(x1a + 25, y3);
			ctx.moveTo(x1, y3 - 25);
			ctx.lineTo(x1, y3 + 25);
			ctx.moveTo(x1a, y3 - 25);
			ctx.lineTo(x1a, y3 + 25);
			ctx.stroke();

			drawDimTopHor(x1, y3 - 25, x1a, y3 - 25, 130, 10, 8, 0);
			drawDimTopHor(x3, y4, x3a, y4, (x1a - x1) / 2, 10, 8, 1);
			drawDimVer(x6a, y0, x1a + 24, y3, (x6a - x5a) * 3.2, 10, 8, 0);
			drawDimVer(x6a, y0 - 0.2 * scaleCanvas, x6a, y0, (x6a - x5a) * 3.2, 10, 8, 0);
			drawDimVer(x6a, y0, x4a, y2, (x6a - x5a) * 1.8, 10, 8, 0);
			drawDimVer(x6, y0, x3, y4, (x6a - x5a) * 1.8, 10, 8, 1);
			drawDimRound(x0, y6, gR1, 5, 8, 1);
			drawDimRound(x1a, y3, gR2, 15, 8, 3);
			drawDimRound(x1, y3, gR2 - sT, 15, 8, 3);

			// console.log("SIN??", Math.sin(30 * (Math.PI / 180)))
		}

		function drawF2() {
			const wx1 = sW * 0.939 + 0.15 * scaleCanvas;
			const dy1 = sW * 0.59,
				dy2 = sW * 0.386,
				dy3 = sW * 0.11,
				dy4 = sW * 0.194,
				gR1 = dy2;
			const gR2 = gR1 - Math.sqrt(2 * Math.pow(dy3, 2));
			const gR3 = 1.5 * scaleCanvas;
			const refR = gR2 + gR3;
			const eR = 1 * scaleCanvas;

			const x5 = x0 - wx1 / 2;
			const x5a = x0 + wx1 / 2;
			const x6 = x5 - eR;
			const x6a = x5a + eR;
			const x1 = x0 - dy3;
			const x1a = x0 + dy3;
			const x2 = x0 - Math.sqrt(Math.pow(gR1, 2) / 2);
			const x2a = x0 + Math.sqrt(Math.pow(gR1, 2) / 2);
			const d01 = gR3 / Math.cos((35 * PI) / 180);
			const d1 = dy1 - dy4 - d01;
			const x7 = x6 - 50;
			const b1 = dy1 - dy4 - d01 - dy2 + dy3;
			const a1 = wx1 / 2 - dy3;
			// refR = gR2 + gR3;

			//  1.49x^2 + (1.4b1 - 2a1)x + (a^2 + b^2 - refR^2) = 0
			// 근의 공식 활용
			// 함수로 만들어 사용해야....

			const Coord = getCoord(a1, b1, refR);
			const valueX1 = Coord[0];
			const valueY1 = Coord[1];
			const valueX2 = Coord[2];
			const valueY2 = Coord[3];
			console.log('???', Coord);

			// 두해중 선택하는 조건문 작성해야 하나, 어느것을 선택해야 할 지 알고 있으므로 진행 결과를 보고....
			// 원의 중심점의 좌표 설정
			// 접선을 찾기 위한 센터 좌표
			const refCx = x5 + valueX2;
			const refCx1 = x5a - valueX2;
			const refCy = y0 + dy4 + d01 - valueY2;

			// 원과 선이 만난는 접점을 찾기 위해서 함수를 다시 적용해야 함
			// x5, dy4를 원점으로 원의 중심점과(a, b)과 gR3 값 필요
			// 해는 한개가 나와야 함. 해가 나오지 않을 경우 gR3 값을 조금 키워볼 필요 있음.
			// a2 = valueX2, b2 =d01+valueY2, R = gR3
			const coord2 = getCoord(valueX2, -(d01 - valueY2), gR3 + 0.01);
			const x4 = x5 + coord2[0];
			const x4a = x5a - coord2[0];
			const y3 = y0 + dy4 - coord2[1];
			const y6 = y0 + dy1 - dy2 + dy3;

			// gR2와 gR3과 만나는 점은 삼각함수를 이용하여 찾을것!!
			const c3 = dy4 + d01 - valueY2 - (dy1 - dy2 + dy3);
			const a3 = gR2 + gR3;
			const ang1 = (Math.asin(c3 / a3) * 180) / PI;

			// Bottom Roll Profile
			ctx.clearRect(0, 0, formingCanvas.width, formingCanvas.height);
			ctx.lineWidth = 2;
			ctx.strokeStyle = '#000000';
			ctx.setLineDash([]);
			ctx.beginPath();
			ctx.moveTo(x7, y0);
			ctx.lineTo(x6, y0);
			ctx.arc(x6, y0 + eR, eR, 270 * (PI / 180), 360 * (PI / 180), false);
			ctx.lineTo(x5, y0 + dy4);
			ctx.lineTo(x4, y3);
			// 각도값을 상수로 넣을 것!
			ctx.arc(refCx, refCy, gR3, 303 * (PI / 180), ((360 - ang1) * PI) / 180, false);
			ctx.arc(x1, y6, gR2, ((180 - ang1) * PI) / 180, (135 * PI) / 180, true);
			ctx.arc(x0, y0 + dy1 - dy2, gR1, (135 * PI) / 180, (45 * PI) / 180, true);
			ctx.arc(x1a, y6, gR2, (45 * PI) / 180, (ang1 * PI) / 180, true);
			ctx.arc(refCx1, refCy, gR3, (180 + ang1) * (PI / 180), (237 * PI) / 180, false);
			ctx.lineTo(x5a, y0 + dy4);
			ctx.lineTo(x5a, y0 + eR);
			ctx.arc(x6a, y0 + eR, eR, 180 * (PI / 180), 270 * (PI / 180), false);
			ctx.lineTo(x6a + 50, y0);
			ctx.stroke();

			// Top Roll Profile
			let trW = 0.46 * sW;
			let gR4 = gR1 - sT;
			let dh1 = Math.sqrt(Math.pow(gR4, 2) - Math.pow(trW / 2, 2));

			ctx.beginPath();
			ctx.moveTo(x7, y0 - 0.2 * scaleCanvas);
			ctx.lineTo(x0 - trW / 2 - eR, y0 - 0.2 * scaleCanvas);
			ctx.arc(x0 - trW / 2 - eR, y0 - 0.2 * scaleCanvas + eR, eR, 270 * (PI / 180), 360 * (PI / 180), false);
			ctx.lineTo(x0 - trW / 2, y0 + dy1 - dy2 + dh1);
			let tAng = Math.asin(dh1 / gR4) * (180 / Math.PI);
			ctx.arc(x0, y0 + dy1 - dy2, gR4, ((180 - tAng) * PI) / 180, ((90 - tAng) * PI) / 180, true);
			ctx.lineTo(x0 + trW / 2, y0 - 0.2 * scaleCanvas + eR);
			ctx.arc(x0 + trW / 2 + eR, y0 - 0.2 * scaleCanvas + eR, eR, 180 * (PI / 180), 270 * (PI / 180), false);
			ctx.lineTo(x6a + 50, y0 - 0.2 * scaleCanvas);
			ctx.stroke();

			//   Draw Center line
			ctx.strokeStyle = 'red';
			ctx.lineWidth = 0.5;
			ctx.setLineDash([10, 3, 2, 3]);
			ctx.beginPath();
			ctx.moveTo(x1 - 25, y0 + dy1 - dy2 + dy3);
			ctx.lineTo(x1a + 25, y0 + dy1 - dy2 + dy3);
			ctx.moveTo(x1, y0 + dy1 - dy2 + dy3 - 25);
			ctx.lineTo(x1, y0 + dy1 - dy2 + dy3 + 25);
			ctx.moveTo(x1a, y0 + dy1 - dy2 + dy3 - 25);
			ctx.lineTo(x1a, y0 + dy1 - dy2 + dy3 + 25);
			ctx.moveTo(x0, 100);
			ctx.lineTo(x0, formingCanvas.height - 20);
			ctx.moveTo(x0 - 25, y0 + dy1 - dy2);
			ctx.lineTo(x0 + 25, y0 + dy1 - dy2);
			ctx.stroke();

			drawDimTopHor(x1, y6 - 25, x1a, y6 - 25, x1a - x1, 15, 8, 0);
			drawDimTopHor(
				x0 - trW / 2,
				y0 - 0.2 * scaleCanvas + eR,
				x0 + trW / 2,
				y0 - 0.2 * scaleCanvas + eR,
				eR * 1.5,
				15,
				8,
				0
			);
			drawDimTopHor(x5, y0 + eR, x5a, y0 + eR, eR * 2.5, 10, 8, 0);
			drawDimVer(x6a + 50, y0, x5a, y0 + dy4, eR, 10, 8, 0);
			drawDimVer(x6a + 50, y0 - 0.2 * scaleCanvas, x6a + 50, y0, eR, 10, 8, 0);
			drawDimVer(x6, y0, x0 - 25, y0 + dy1 - dy2, eR, 10, 8, 1);
			drawDimVer(x7, y0, x1 - 25, y6, eR, 10, 8, 1);
			drawDimRound(x0, y0 + dy1 - dy2, gR1, 30, 8, 3);
			drawDimRound(x0, y0 + dy1 - dy2, gR4, 15, 8, 3);
			drawDimRound(x1a, y6, gR2, 60, 8, 3);
			drawDimRound(refCx, refCy, gR3, 45, 8, 1);
			// drawDimRound(x1, y3, gR2 - sT, 45, 8, 4)

			ctx.save(); // 현재 상태 저장
			ctx.translate(x5a, y0 + dy4 - 3); // 회전 중심을 텍스트 위치로 이동
			ctx.rotate(325 * (Math.PI / 180)); // 90도 회전 (라디안 단위로)

			ctx.font = '14px Arial';
			ctx.fillStyle = 'black';
			ctx.textAlign = 'right';
			ctx.fillText(`Shoulder 35°`, 0, 0);
			ctx.restore();
		}

		function drawFG1() {
			let x00, y00, x1, x1a, x2, x2a, x3, x3a, x4, x4a, y1, y2;
			let gR, eR;
			gR = sW * 0.29;
			eR = 0.4 * scaleCanvas;
			x00 = x0;
			y00 = y0 + sW * 0.59 - gR;
			let angle01 = Math.asin(eR / gR);
			// let b01 = Math.sin(angle01) * eR;
			// let c01 = Math.cos(angle01) * eR;
			let c02 = Math.cos(angle01) * (eR + gR);

			x3 = x00 - c02;
			x3a = x00 + c02;
			x4 = x3 - eR * 2;
			x4a = x3a + eR * 2;
			x1 = x00 - gR / 2;
			x1a = x00 + gR / 2;
			x2 = x1 - sT;
			x2a = x1a + sT;
			y2 = y00 - gR / 2;
			y1 = y2 + sT;
			ctx.clearRect(0, 0, formingCanvas.width, formingCanvas.height);
			ctx.lineWidth = 2;
			ctx.strokeStyle = '#000000';
			// ctx.fillStyle = "hsl(0, 0%, 98%)"
			ctx.setLineDash([]);
			ctx.beginPath();

			ctx.moveTo(x4, y2);
			ctx.lineTo(x2, y2);
			ctx.lineTo(x1, y1);
			ctx.lineTo(x1a, y1);
			ctx.lineTo(x2a, y2);
			ctx.lineTo(x4a, y2);
			ctx.moveTo(x4, y00);
			ctx.lineTo(x3, y00);
			ctx.arc(x3, y00 + eR, eR, 270 * (PI / 180), 360 * (PI / 180) - angle01, false);
			ctx.arc(x00, y00, gR, 180 * (PI / 180) - angle01, angle01, true);
			ctx.arc(x3a, y00 + eR, eR, 180 * (PI / 180) - angle01, 270 * (PI / 180), false);
			ctx.lineTo(x4a, y00);
			ctx.stroke();

			//   Draw Center line
			ctx.strokeStyle = 'red';
			ctx.lineWidth = 0.25;
			ctx.setLineDash([10, 3, 2, 3]);
			ctx.beginPath();
			ctx.moveTo(x00 - 25, y00);
			ctx.lineTo(x00 + 25, y00);
			ctx.moveTo(x00, 100);
			ctx.lineTo(x00, formingCanvas.height - 20);
			ctx.stroke();

			drawDimTopHor(x1, y1, x1a, y1, (x1a - x1) / 2, 10, 8, 0);
			drawDimTopHor(x2, y2, x2a, y2, (x1a - x1) / 2, 10, 8, 0);
			drawDimVer(x4a, y2, x2a, y1, eR * 2, 10, 8, 0);

			drawDimRound(x00, y00, gR, 35, 8, 3);
			drawDimRound(x3, y00 + eR, eR, 45, 8, 1);
		}

		function drawFG2() {
			let x00, y00, x1, x1a, y1, y2, y3, y4, y5, y6;
			let gR, eR;
			gR = sW * 0.26;
			eR = 0.4 * scaleCanvas;
			(x00 = x0), (y00 = y0 + sW * 0.59 - gR);
			let angle01 = Math.asin(eR / gR);
			let b01 = Math.sin(angle01) * eR;
			let c01 = Math.cos(angle01) * eR;
			let c02 = Math.cos(angle01) * (eR + gR);

			x1 = x00 - 0.1 * scaleCanvas;
			x1a = x00 + 0.1 * scaleCanvas;
			y3 = y00 + c02;
			y4 = y00 - c02;
			y5 = y3 + eR * 2;
			y6 = y4 - eR * 2;
			ctx.clearRect(0, 0, formingCanvas.width, formingCanvas.height);
			ctx.lineWidth = 2;
			ctx.strokeStyle = '#000000';
			ctx.setLineDash([]);
			ctx.beginPath();
			ctx.moveTo(x1, y5);
			ctx.lineTo(x1, y3);
			ctx.arc(x1 - eR, y3, eR, 0, 270 * (PI / 180) + angle01, true);
			ctx.arc(x00, y00, gR, 90 * (PI / 180) + angle01, 270 * (PI / 180) - angle01, false);
			ctx.arc(x1 - eR, y4, eR, 90 * (PI / 180) - angle01, 360 * (PI / 180), true);
			ctx.lineTo(x1, y6);
			ctx.moveTo(x1a, y6);
			ctx.lineTo(x1a, y4);
			ctx.arc(x1a + eR, y4, eR, 180 * (PI / 180), 90 * (PI / 180) + angle01, true);
			ctx.arc(x00, y00, gR, 270 * (PI / 180) + angle01, 90 * (PI / 180) - angle01, false);
			ctx.arc(x1a + eR, y3, eR, 270 * (PI / 180) - angle01, 180 * (PI / 180), true);
			ctx.lineTo(x1a, y5);
			ctx.stroke();

			//   Draw Center line
			ctx.strokeStyle = 'red';
			ctx.lineWidth = 0.5;
			ctx.setLineDash([10, 3, 2, 3]);
			ctx.beginPath();
			ctx.moveTo(x00 - 25, y00);
			ctx.lineTo(x00 + 25, y00);
			ctx.moveTo(x00, 30);
			ctx.lineTo(x00, formingCanvas.height - 5);
			ctx.stroke();
			drawDimTopHor(x1, y6, x1a, y6, eR * 2, 10, 8, 0);
			drawDimRound(x00, y00, gR, 45, 8, 3);
			drawDimRound(x1a + eR, y4, eR, 45, 8, 4);
		}
		function drawC1() {
			let x00, y00, x1, x1a, x2, x2a, x3, x3a, x4, x4a, y1, y2;
			let gR, eR;
			gR = sW * 0.25;
			eR = 0.4 * scaleCanvas;
			(x00 = x0), (y00 = y0 + sW * 0.59 - gR);
			let angle01 = Math.asin(eR / gR);
			let b01 = Math.sin(angle01) * eR;
			let c01 = Math.cos(angle01) * eR;
			let c02 = Math.cos(angle01) * (eR + gR);

			x3 = x00 - c02;
			x3a = x00 + c02;
			x4 = x3 - eR * 2;
			x4a = x3a + eR * 2;
			x1 = x00 - gR / 2;
			x1a = x00 + gR / 2;
			x2 = x1 - sT;
			x2a = x1a + sT;
			y2 = y00 - gR / 2;
			y1 = y2 + sT;

			ctx.clearRect(0, 0, formingCanvas.width, formingCanvas.height);
			ctx.lineWidth = 2;
			ctx.strokeStyle = '#000000';
			// ctx.fillStyle = "hsl(0, 0%, 98%)"
			ctx.setLineDash([]);
			ctx.beginPath();

			ctx.moveTo(x4, y2);
			ctx.lineTo(x4a, y2);
			ctx.moveTo(x4, y00);
			ctx.lineTo(x3, y00);
			ctx.arc(x3, y00 + eR, eR, 270 * (PI / 180), 360 * (PI / 180) - angle01, false);
			ctx.arc(x0, y00, gR, 180 * (PI / 180) - angle01, angle01, true);
			ctx.arc(x3a, y00 + eR, eR, 180 * (PI / 180) - angle01, 270 * (PI / 180), false);
			ctx.lineTo(x4a, y00);
			ctx.stroke();

			//   Draw Center line
			ctx.strokeStyle = 'red';
			ctx.lineWidth = 0.5;
			ctx.setLineDash([10, 3, 2, 3]);
			ctx.beginPath();
			ctx.moveTo(x00 - 25, y00);
			ctx.lineTo(x00 + 25, y00);
			ctx.moveTo(x00, 100);
			ctx.lineTo(x00, formingCanvas.height - 20);
			ctx.stroke();
			// drawDimTopHor(x1, y6, x1a, y6, eR * 2, 15, 8, 0)
			drawDimRound(x0, y00, gR, 45, 8, 3);
			drawDimRound(x3, y00 + eR, eR, 45, 8, 1);

			ctx.font = '14px Arial';
			ctx.fillStyle = 'black';
			ctx.textAlign = 'left';
			ctx.fillText(`IMPORTANT! A CRD Block contain C1 to C5 to make a simple closing stage.`, 40, 600);
		}

		function drawC2() {
			let x00, y00, x1, x1a, y3, y4, y5, y6;
			let gR, eR;
			gR = sW * 0.215;
			eR = 0.4 * scaleCanvas;
			(x00 = x0), (y00 = y0 + sW * 0.59 - gR);
			let angle01 = Math.asin(eR / gR);
			let b01 = Math.sin(angle01) * eR;
			let c01 = Math.cos(angle01) * eR;
			let c02 = Math.cos(angle01) * (eR + gR);

			x1 = x00 - 0.1 * scaleCanvas;
			x1a = x00 + 0.1 * scaleCanvas;
			y3 = y00 + c02;
			y4 = y00 - c02;
			y5 = y3 + eR * 2;
			y6 = y4 - eR * 2;
			ctx.clearRect(0, 0, formingCanvas.width, formingCanvas.height);
			ctx.lineWidth = 2;
			ctx.strokeStyle = '#000000';
			ctx.setLineDash([]);
			ctx.beginPath();
			ctx.moveTo(x1, y5);
			ctx.lineTo(x1, y3);
			ctx.arc(x1 - eR, y3, eR, 0, 270 * (PI / 180) + angle01, true);
			ctx.arc(x00, y00, gR, 90 * (PI / 180) + angle01, 270 * (PI / 180) - angle01, false);
			ctx.arc(x1 - eR, y4, eR, 90 * (PI / 180) - angle01, 360 * (PI / 180), true);
			ctx.lineTo(x1, y6);
			ctx.moveTo(x1a, y6);
			ctx.lineTo(x1a, y4);
			ctx.arc(x1a + eR, y4, eR, 180 * (PI / 180), 90 * (PI / 180) + angle01, true);
			ctx.arc(x00, y00, gR, 270 * (PI / 180) + angle01, 90 * (PI / 180) - angle01, false);
			ctx.arc(x1a + eR, y3, eR, 270 * (PI / 180) - angle01, 180 * (PI / 180), true);
			ctx.lineTo(x1a, y5);
			ctx.stroke();

			//   Draw Center line
			ctx.strokeStyle = 'red';
			ctx.lineWidth = 0.5;
			ctx.setLineDash([10, 3, 2, 3]);
			ctx.beginPath();
			ctx.moveTo(x00 - 25, y00);
			ctx.lineTo(x00 + 25, y00);
			ctx.moveTo(x00, 30);
			ctx.lineTo(x00, formingCanvas.height - 5);
			ctx.stroke();

			drawDimTopHor(x1, y6, x1a, y6, eR * 2, 10, 8, 0);
			drawDimRound(x00, y00, gR, 45, 8, 3);
			drawDimRound(x1a + eR, y4, eR, 45, 8, 4);

			ctx.font = '14px Arial';
			ctx.fillStyle = 'black';
			ctx.textAlign = 'left';
			ctx.fillText(`IMPORTANT! For Better Profile, Apply CRD Design of "Sizing" Profile.`, 40, 600);
		}

		function drawC3() {
			let op = sW * 0.2 * 2; // 그루브 지름
			let gap = 0.1 * scaleCanvas; // 롤 갭 (한개 - 센터에서)
			let eR = 0.4 * scaleCanvas; // 에지 라운드
			let y00 = y0 + sW * 0.59 - sW * 0.21; // y 축 센터
			let x00 = x0;
			let rF = 1.0; // 롤러다이스에서 러프 라운드 팩터
			let hOp = op / 2; // 그루브 반지름
			let gR = rF * (op / 2); // 인발롤 만들때 필요! 여기서는 필요없음
			let ang = 20; // 에지 각도 - 와이어 윤활을 위해

			let a0, b0, c0, b1, c1, b2, c2;
			a0 = gR; // groove radius
			b0 = Math.sin(ang * (PI / 180)) * gR; // y3 height
			c0 = Math.sqrt(Math.pow(gR, 2) - Math.pow(b0, 2)); //x1을 구하기 위한 삼각함수
			// a1 = eR; //
			b1 = Math.sin(ang * (PI / 180)) * eR; // y2를 구하기 위한 삼각함수
			c1 = Math.sqrt(Math.pow(eR, 2) - Math.pow(b1, 2)); // x2 구하기 위해
			c2 = b0 - eR - gap + b1; //y3을 구하기 위해
			b2 = Math.tan(ang * (PI / 180)) * c2; //x1을 구하기 위해
			ctx.clearRect(0, 0, formingCanvas.width, formingCanvas.height);
			const Selection = true;
			if (Selection) {
				let y1 = y00 - gap;
				let y1a = y00 + gap;
				let y2 = y00 - (gap + eR - b1);
				let y2a = y00 + (gap + eR - b1);
				let y3 = y00 - b0;
				let y3a = y00 + b0;
				let x1 = x00 - c0;
				let x1a = x00 + c0;
				let x2 = x1 - b2;
				let x2a = x1a + b2;
				let x3 = x2 - c1;
				let x3a = x2a + c1;
				let x4 = x3 - gR / 4;
				let x4a = x3a + gR / 4;

				// Upper Roll Grove
				// ctx.clearRect(0, 0, formingCanvas.width, formingCanvas.height);
				ctx.lineWidth = 2;
				ctx.strokeStyle = '#000000';
				ctx.fillStyle = 'hsl(0, 0%, 98%)';
				ctx.setLineDash([]);
				ctx.beginPath();
				ctx.moveTo(x4, y1);
				ctx.lineTo(x3, y1);
				ctx.arc(x3, y2 - b1, eR, (90 * PI) / 180, ((360 + ang) * PI) / 180, true);
				ctx.lineTo(x2, y2);
				ctx.arc(x00, y00, gR, ((180 + ang) * PI) / 180, ((360 - ang) * PI) / 180, false);
				ctx.lineTo(x1a, y3);
				ctx.arc(x3a, y2 - b1, eR, ((180 - ang) * PI) / 180, (90 * PI) / 180, true);
				ctx.lineTo(x3a, y1);
				ctx.lineTo(x4a, y1);
				ctx.stroke();

				// Bottom Roll Grove
				ctx.beginPath();
				ctx.moveTo(x4a, y1a);
				ctx.lineTo(x3a, y1a);
				ctx.arc(x3a, y2a + b1, eR, (270 * PI) / 180, ((180 + ang) * PI) / 180, true);
				ctx.lineTo(x1a, y3a);
				ctx.arc(x00, y00, gR, ((360 + ang) * PI) / 180, ((180 - ang) * PI) / 180, false);
				ctx.lineTo(x2, y2a);
				ctx.arc(x3, y2a + b1, eR, ((360 - ang) * PI) / 180, (270 * PI) / 180, true);
				ctx.lineTo(x3, y1a);
				ctx.lineTo(x4, y1a);
				ctx.stroke();
				// Draw Center line
				ctx.strokeStyle = 'red';
				ctx.lineWidth = 0.5;
				ctx.setLineDash([10, 3, 2, 3]);
				ctx.beginPath();
				ctx.moveTo(x00, y00 - 50);
				ctx.lineTo(x00, y00 + 50);
				ctx.moveTo(x4, y00);
				ctx.lineTo(x4a, y00);
				ctx.stroke();

				drawDimVer(x4a, y1, x4a, y1a, eR * 2, 10, 8, 0);
				drawDimRound(x00, y00, gR, 45, 8, 3);
				drawDimRound(x3a, y2 - b1, eR, 45, 8, 4);
			} else {
				y1 = y00 - c0;
				y1a = y00 + c0;
				y2 = y1 - b2;
				y2a = y1a + b2;
				y3 = y2 - c1;
				y3a = y2a + c1;
				y4 = y3 - gR / 4;
				y4a = y3a + gR / 4;
				x1 = x00 - gap;
				x1a = x00 + gap;
				x2 = x00 - (gap + eR - b1);
				x2a = x00 + (gap + eR - b1);
				x3 = x00 - b0;
				x3a = x00 + b0;

				ctx.lineWidth = 2;
				ctx.strokeStyle = '#000000';
				ctx.fillStyle = 'hsl(0, 0%, 98%)';
				ctx.setLineDash([]);
				ctx.beginPath();
				ctx.moveTo(x1a, y4);
				ctx.lineTo(x1a, y3);
				ctx.arc(x1a + eR, y3, eR, (180 * PI) / 180, ((90 + ang) * PI) / 180, true);
				ctx.lineTo(x3a, y1);
				ctx.arc(x00, y00, gR, ((270 + ang) * PI) / 180, ((90 - ang) * PI) / 180, false);
				ctx.lineTo(x2a, y2a);
				ctx.arc(x1a + eR, y3a, eR, ((270 - ang) * PI) / 180, (180 * PI) / 180, true);
				ctx.lineTo(x1a, y4a);
				// ctx.lineTo(x4a, y1);
				ctx.stroke();

				ctx.beginPath();
				ctx.moveTo(x1, y4);
				ctx.lineTo(x1, y3);
				ctx.arc(x1 - eR, y3, eR, (360 * PI) / 180, ((90 - ang) * PI) / 180, false);
				ctx.lineTo(x3, y1);
				ctx.arc(x0, y00, gR, ((270 - ang) * PI) / 180, ((90 + ang) * PI) / 180, true);
				ctx.lineTo(x2, y2a);
				ctx.arc(x1 - eR, y3a, eR, ((270 + ang) * PI) / 180, (360 * PI) / 180, false);
				ctx.lineTo(x1, y4a);
				// ctx.lineTo(x4a, y1);
				ctx.stroke();

				// Draw Center line
				ctx.strokeStyle = 'red';
				ctx.lineWidth = 0.5;
				ctx.setLineDash([10, 3, 2, 3]);
				ctx.beginPath();
				ctx.moveTo(x00 - 50, y00);
				ctx.lineTo(x00 + 50, y00);
				ctx.moveTo(x00, y4);
				ctx.lineTo(x00, y4a);
				ctx.stroke();
			}
			ctx.font = '14px Arial';
			ctx.fillStyle = 'black';
			ctx.textAlign = 'left';
			ctx.fillText(`IMPORTANT! For Better Profile, Apply CRD Design of "Sizing" Profile.`, 40, 600);
		}
		function drawC4() {
			let op = sW * 0.186 * 2; // 그루브 지름
			let gap = 0.1 * scaleCanvas; // 롤 갭 (한개 - 센터에서)
			let eR = 0.4 * scaleCanvas; // 에지 라운드
			let y00 = y0 + sW * 0.59 - sW * 0.21; // y 축 센터
			let x00 = x0;
			let rF = 1.0; // 롤러다이스에서 러프 라운드 팩터
			let hOp = op / 2; // 그루브 반지름
			let gR = rF * (op / 2); // 인발롤 만들때 필요! 여기서는 필요없음
			let ang = 20; // 에지 각도 - 와이어 윤활을 위해

			let a0, b0, c0, b1, c1, b2, c2;
			a0 = gR; // groove radius
			b0 = Math.sin(ang * (PI / 180)) * gR; // y3 height
			c0 = Math.sqrt(Math.pow(gR, 2) - Math.pow(b0, 2)); //x1을 구하기 위한 삼각함수
			// a1 = eR; //
			b1 = Math.sin(ang * (PI / 180)) * eR; // y2를 구하기 위한 삼각함수
			c1 = Math.sqrt(Math.pow(eR, 2) - Math.pow(b1, 2)); // x2 구하기 위해
			c2 = b0 - eR - gap + b1; //y3을 구하기 위해
			b2 = Math.tan(ang * (PI / 180)) * c2; //x1을 구하기 위해
			ctx.clearRect(0, 0, formingCanvas.width, formingCanvas.height);
			const Selection = false;
			if (Selection) {
				let y1 = y00 - gap;
				y1a = y00 + gap;
				y2 = y00 - (gap + eR - b1);
				y2a = y00 + (gap + eR - b1);
				y3 = y00 - b0;
				y3a = y00 + b0;
				x1 = x00 - c0;
				x1a = x00 + c0;
				x2 = x1 - b2;
				x2a = x1a + b2;
				x3 = x2 - c1;
				x3a = x2a + c1;
				x4 = x3 - gR / 4;
				x4a = x3a + gR / 4;

				// Upper Roll Grove
				// ctx.clearRect(0, 0, formingCanvas.width, formingCanvas.height);
				ctx.lineWidth = 2;
				ctx.strokeStyle = '#000000';
				ctx.fillStyle = 'hsl(0, 0%, 98%)';
				ctx.setLineDash([]);
				ctx.beginPath();
				ctx.moveTo(x4, y1);
				ctx.lineTo(x3, y1);
				ctx.arc(x3, y2 - b1, eR, (90 * PI) / 180, ((360 + ang) * PI) / 180, true);
				ctx.lineTo(x2, y2);
				ctx.arc(x00, y00, gR, ((180 + ang) * PI) / 180, ((360 - ang) * PI) / 180, false);
				ctx.lineTo(x1a, y3);
				ctx.arc(x3a, y2 - b1, eR, ((180 - ang) * PI) / 180, (90 * PI) / 180, true);
				ctx.lineTo(x3a, y1);
				ctx.lineTo(x4a, y1);
				ctx.stroke();

				// Bottom Roll Grove
				ctx.beginPath();
				ctx.moveTo(x4a, y1a);
				ctx.lineTo(x3a, y1a);
				ctx.arc(x3a, y2a + b1, eR, (270 * PI) / 180, ((180 + ang) * PI) / 180, true);
				ctx.lineTo(x1a, y3a);
				ctx.arc(x00, y00, gR, ((360 + ang) * PI) / 180, ((180 - ang) * PI) / 180, false);
				ctx.lineTo(x2, y2a);
				ctx.arc(x3, y2a + b1, eR, ((360 - ang) * PI) / 180, (270 * PI) / 180, true);
				ctx.lineTo(x3, y1a);
				ctx.lineTo(x4, y1a);
				ctx.stroke();
				// Draw Center line
				ctx.strokeStyle = 'red';
				ctx.lineWidth = 0.5;
				ctx.setLineDash([10, 3, 2, 3]);
				ctx.beginPath();
				ctx.moveTo(x00, y00 - 50);
				ctx.lineTo(x00, y00 + 50);
				ctx.moveTo(x4, y00);
				ctx.lineTo(x4a, y00);

				ctx.stroke();
			} else {
				let y1 = y00 - c0;
				let y1a = y00 + c0;
				let y2 = y1 - b2;
				let y2a = y1a + b2;
				let y3 = y2 - c1;
				let y3a = y2a + c1;
				let y4 = y3 - gR / 4;
				let y4a = y3a + gR / 4;
				let x1 = x00 - gap;
				let x1a = x00 + gap;
				let x2 = x00 - (gap + eR - b1);
				let x2a = x00 + (gap + eR - b1);
				let x3 = x00 - b0;
				let x3a = x00 + b0;

				ctx.lineWidth = 2;
				ctx.strokeStyle = '#000000';
				ctx.fillStyle = 'hsl(0, 0%, 98%)';
				ctx.setLineDash([]);
				ctx.beginPath();
				ctx.moveTo(x1a, y4);
				ctx.lineTo(x1a, y3);
				ctx.arc(x1a + eR, y3, eR, (180 * PI) / 180, ((90 + ang) * PI) / 180, true);
				ctx.lineTo(x3a, y1);
				ctx.arc(x00, y00, gR, ((270 + ang) * PI) / 180, ((90 - ang) * PI) / 180, false);
				ctx.lineTo(x2a, y2a);
				ctx.arc(x1a + eR, y3a, eR, ((270 - ang) * PI) / 180, (180 * PI) / 180, true);
				ctx.lineTo(x1a, y4a);
				// ctx.lineTo(x4a, y1);
				ctx.stroke();

				ctx.beginPath();
				ctx.moveTo(x1, y4);
				ctx.lineTo(x1, y3);
				ctx.arc(x1 - eR, y3, eR, (360 * PI) / 180, ((90 - ang) * PI) / 180, false);
				ctx.lineTo(x3, y1);
				ctx.arc(x00, y00, gR, ((270 - ang) * PI) / 180, ((90 + ang) * PI) / 180, true);
				ctx.lineTo(x2, y2a);
				ctx.arc(x1 - eR, y3a, eR, ((270 + ang) * PI) / 180, (360 * PI) / 180, false);
				ctx.lineTo(x1, y4a);
				// ctx.lineTo(x4a, y1);
				ctx.stroke();

				// Draw Center line
				ctx.strokeStyle = 'red';
				ctx.lineWidth = 0.5;
				ctx.setLineDash([10, 3, 2, 3]);
				ctx.beginPath();
				ctx.moveTo(x00 - 50, y00);
				ctx.lineTo(x00 + 50, y00);
				ctx.moveTo(x00, y4);
				ctx.lineTo(x00, y4a);
				ctx.stroke();

				drawDimTopHor(x1, y4, x1a, y4, eR * 2, 10, 8, 0);
				drawDimRound(x00, y00, gR, 45, 8, 3);
				drawDimRound(x1a + eR, y3, eR, 45, 8, 4);
			}
			ctx.font = '14px Arial';
			ctx.fillStyle = 'black';
			ctx.textAlign = 'left';
			ctx.fillText(`IMPORTANT! For Better Profile, Apply CRD Design of "Sizing" Profile.`, 40, 600);
		}
		function drawC5() {
			let op = sW * 0.175 * 2; // 그루브 지름
			let gap = 0.1 * scaleCanvas; // 롤 갭 (한개 - 센터에서)
			let eR = 0.4 * scaleCanvas; // 에지 라운드
			let y00 = y0 + sW * 0.59 - sW * 0.21; // y 축 센터
			let x00 = x0;
			let rF = 1.0; // 롤러다이스에서 러프 라운드 팩터
			let hOp = op / 2; // 그루브 반지름
			let gR = rF * (op / 2); // 인발롤 만들때 필요! 여기서는 필요없음
			let ang = 20; // 에지 각도 - 와이어 윤활을 위해

			let a0, b0, c0, b1, c1, b2, c2;
			a0 = gR; // groove radius
			b0 = Math.sin(ang * (PI / 180)) * gR; // y3 height
			c0 = Math.sqrt(Math.pow(gR, 2) - Math.pow(b0, 2)); //x1을 구하기 위한 삼각함수
			// a1 = eR; //
			b1 = Math.sin(ang * (PI / 180)) * eR; // y2를 구하기 위한 삼각함수
			c1 = Math.sqrt(Math.pow(eR, 2) - Math.pow(b1, 2)); // x2 구하기 위해
			c2 = b0 - eR - gap + b1; //y3을 구하기 위해
			b2 = Math.tan(ang * (PI / 180)) * c2; //x1을 구하기 위해
			ctx.clearRect(0, 0, formingCanvas.width, formingCanvas.height);
			const Selection = true;
			if (Selection) {
				let y1 = y00 - gap;
				let y1a = y00 + gap;
				let y2 = y00 - (gap + eR - b1);
				let y2a = y00 + (gap + eR - b1);
				let y3 = y00 - b0;
				let y3a = y00 + b0;
				let x1 = x00 - c0;
				let x1a = x00 + c0;
				let x2 = x1 - b2;
				let x2a = x1a + b2;
				let x3 = x2 - c1;
				let x3a = x2a + c1;
				let x4 = x3 - gR / 4;
				let x4a = x3a + gR / 4;

				// console.log(` y0: ${x0},\n y1: ${x1},\n y2: ${x2},\n y3: ${x3},\n y4: ${x4}`)

				// Upper Roll Grove
				// ctx.clearRect(0, 0, formingCanvas.width, formingCanvas.height);
				ctx.lineWidth = 2;
				ctx.strokeStyle = '#000000';
				ctx.fillStyle = 'hsl(0, 0%, 98%)';
				ctx.setLineDash([]);
				ctx.beginPath();
				ctx.moveTo(x4, y1);
				ctx.lineTo(x3, y1);
				ctx.arc(x3, y2 - b1, eR, (90 * PI) / 180, ((360 + ang) * PI) / 180, true);
				ctx.lineTo(x2, y2);
				ctx.arc(x00, y00, gR, ((180 + ang) * PI) / 180, ((360 - ang) * PI) / 180, false);
				ctx.lineTo(x1a, y3);
				ctx.arc(x3a, y2 - b1, eR, ((180 - ang) * PI) / 180, (90 * PI) / 180, true);
				ctx.lineTo(x3a, y1);
				ctx.lineTo(x4a, y1);
				ctx.stroke();

				// Bottom Roll Grove
				ctx.beginPath();
				ctx.moveTo(x4a, y1a);
				ctx.lineTo(x3a, y1a);
				ctx.arc(x3a, y2a + b1, eR, (270 * PI) / 180, ((180 + ang) * PI) / 180, true);
				ctx.lineTo(x1a, y3a);
				ctx.arc(x00, y00, gR, ((360 + ang) * PI) / 180, ((180 - ang) * PI) / 180, false);
				ctx.lineTo(x2, y2a);
				ctx.arc(x3, y2a + b1, eR, ((360 - ang) * PI) / 180, (270 * PI) / 180, true);
				ctx.lineTo(x3, y1a);
				ctx.lineTo(x4, y1a);
				ctx.stroke();
				// Draw Center line
				ctx.strokeStyle = 'red';
				ctx.lineWidth = 0.5;
				ctx.setLineDash([10, 3, 2, 3]);
				ctx.beginPath();
				ctx.moveTo(x00, y00 - 50);
				ctx.lineTo(x00, y00 + 50);
				ctx.moveTo(x4, y00);
				ctx.lineTo(x4a, y00);
				ctx.stroke();

				drawDimVer(x4a, y1, x4a, y1a, eR * 2, 10, 8, 0);
				drawDimRound(x00, y00, gR, 45, 8, 3);
				drawDimRound(x3a, y2 - b1, eR, 45, 8, 4);
			} else {
				y1 = y00 - c0;
				y1a = y00 + c0;
				y2 = y1 - b2;
				y2a = y1a + b2;
				y3 = y2 - c1;
				y3a = y2a + c1;
				y4 = y3 - gR / 4;
				y4a = y3a + gR / 4;
				x1 = x00 - gap;
				x1a = x00 + gap;
				x2 = x00 - (gap + eR - b1);
				x2a = x00 + (gap + eR - b1);
				x3 = x00 - b0;
				x3a = x00 + b0;

				ctx.lineWidth = 2;
				ctx.strokeStyle = '#000000';
				ctx.fillStyle = 'hsl(0, 0%, 98%)';
				ctx.setLineDash([]);
				ctx.beginPath();
				ctx.moveTo(x1a, y4);
				ctx.lineTo(x1a, y3);
				ctx.arc(x1a + eR, y3, eR, (180 * PI) / 180, ((90 + ang) * PI) / 180, true);
				ctx.lineTo(x3a, y1);
				ctx.arc(x00, y00, gR, ((270 + ang) * PI) / 180, ((90 - ang) * PI) / 180, false);
				ctx.lineTo(x2a, y2a);
				ctx.arc(x1a + eR, y3a, eR, ((270 - ang) * PI) / 180, (180 * PI) / 180, true);
				ctx.lineTo(x1a, y4a);
				// ctx.lineTo(x4a, y1);
				ctx.stroke();

				ctx.beginPath();
				ctx.moveTo(x1, y4);
				ctx.lineTo(x1, y3);
				ctx.arc(x1 - eR, y3, eR, (360 * PI) / 180, ((90 - ang) * PI) / 180, false);
				ctx.lineTo(x3, y1);
				ctx.arc(x00, y00, gR, ((270 - ang) * PI) / 180, ((90 + ang) * PI) / 180, true);
				ctx.lineTo(x2, y2a);
				ctx.arc(x1 - eR, y3a, eR, ((270 + ang) * PI) / 180, (360 * PI) / 180, false);
				ctx.lineTo(x1, y4a);
				// ctx.lineTo(x4a, y1);
				ctx.stroke();

				// Draw Center line
				ctx.strokeStyle = 'red';
				ctx.lineWidth = 0.5;
				ctx.setLineDash([10, 3, 2, 3]);
				ctx.beginPath();
				ctx.moveTo(x00 - 50, y00);
				ctx.lineTo(x00 + 50, y00);
				ctx.moveTo(x00, y4);
				ctx.lineTo(x00, y4a);
				ctx.stroke();
			}
			ctx.font = '14px Arial';
			ctx.fillStyle = 'black';
			ctx.textAlign = 'left';
			ctx.fillText(`IMPORTANT! For Better Profile, Apply CRD Design of "Sizing" Profile.`, 40, 600);
		}
	}
};

export default DrawFormingRoll;
