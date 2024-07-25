'use client';
import { useState } from 'react';
import { useEffect } from 'react';

const InputCRD = () => {
	const [inputValues, setInputValues] = useState({
		input1: '3.0',
		input2: '2.88',
		input3: '0.1',
		input4: '0.4',
	});

	const [selectedRadio, setSelectedRadio] = useState('option1');

	const handleChange = (event) => {
		const { name, value } = event.target;
		setInputValues({
			...inputValues,
			[name]: value,
		});
	};

	useEffect(() => {
		// console.log(selectedRadio, inputValues);
		const newValues = ß;
		selectedRadio === 'option2'
			? {
					input1: '3.0',
					input2: '2.94',
					input3: '0.05',
					input4: '0.2',
			  }
			: {
					input1: '3.0',
					input2: '2.88',
					input3: '0.1',
					input4: '0.4',
			  };
		setInputValues(newValues);

		drawProfile();
	}, [inputValues, selectedRadio]);

	const handleRadioChange = (event) => {
		const value = event.target.value;
		setSelectedRadio(value);
	};

	function drawProfile() {
		// Define constants used in calculations
		const crdCanvas = document.getElementById('crdCanvas');
		const ctx = crdCanvas.getContext('2d');
		const PI = Math.PI;

		let scaleCanvas = '';

		const rollDiameter = inputValues.input2;
		console.log(rollDiameter);
		if (rollDiameter < 3.0) {
			scaleCanvas = 100;
		} else {
			scaleCanvas = 80;
		}

		const ip = inputValues.input1 * scaleCanvas;
		const op = inputValues.input2 * scaleCanvas;
		const gap = inputValues.input3 * scaleCanvas;
		const eR = inputValues.input4 * scaleCanvas;

		// IP Size : ip, OP Size: op, D/2:hOp, R factor: rF, G/2: gap, H:rH, R: rR, r:eR
		let hOp, rF, rH, rR, ang, x0, y0;
		let x1, x2, x3, x4, x5, x6, x7, x8, y1, y2, y3, y4, y5, y6;
		let h, hx1, hy1, hx2, hy2;
		// Center Point Co-ordinate
		x0 = 400;
		y0 = 250;
		let spanX = crdCanvas.width / 10;
		let spanY = crdCanvas.height * 0.8;

		// Function to get the area reduction rate
		const rRate = (d1, d2) => (1 - Math.pow(d2, 2) / Math.pow(d1, 2)) * 100;

		// Depending on the radio selection, draw the roll groove
		const radios = document.querySelectorAll('input[type="radio"]');
		let selectedValue;
		for (const radio of radios) {
			if (radio.checked) {
				selectedValue = radio.value;
				break;
			}
		}
		switch (selectedRadio) {
			case 'option1':
				rF = 1.065;
				hOp = op / 2;
				rH = hOp - gap;
				rR = rF * hOp;
				console.log('rR', rR / scaleCanvas);
				y1 = y0 + (rR - hOp);
				y2 = y0 - (hOp - rH);
				y3 = y0 - (gap + eR);
				y4 = y0 - (rR - hOp);
				y5 = y0 + (hOp - rH);
				y6 = y0 + (gap + eR);
				x3 = x0 - Math.sqrt(Math.pow(rR + eR, 2) - Math.pow(eR + gap + rR - hOp, 2));
				x4 = x0 + Math.sqrt(Math.pow(rR + eR, 2) - Math.pow(eR + gap + rR - hOp, 2));

				let c = (eR + gap + rR - hOp) / (rR + eR);
				ang = (Math.asin(c) * 180) / PI;
				let bb = Math.sin(ang * (PI / 180)) * rR;

				x1 = x0 - Math.sqrt(Math.pow(rR, 2) - Math.pow(bb, 2));
				x2 = x0 + Math.sqrt(Math.pow(rR, 2) - Math.pow(bb, 2));
				x5 = x0 - rR * 1.3;
				x6 = x0 + rR * 1.3;

				// Upper Roll Grove
				ctx.clearRect(0, 0, 800, 600);
				ctx.lineWidth = 3;
				ctx.strokeStyle = '#000000';
				ctx.fillStyle = 'hsl(0, 0%, 98%)';
				ctx.setLineDash([]);
				ctx.beginPath();
				ctx.moveTo(x5, y2);
				ctx.lineTo(x3, y2);
				ctx.arc(x3, y3, eR, (90 * PI) / 180, ((360 + ang) * PI) / 180, true);
				ctx.arc(x0, y1, rR, ((180 + ang) * PI) / 180, ((360 - ang) * PI) / 180, false);
				ctx.arc(x4, y3, eR, ((180 - ang) * PI) / 180, (90 * PI) / 180, true);
				ctx.moveTo(x4, y2);
				ctx.lineTo(x6, y2);
				ctx.stroke();

				// Bottom Roll Grove
				ctx.beginPath();
				ctx.moveTo(x6, y5);
				ctx.lineTo(x4, y5);
				ctx.arc(x4, y6, eR, (270 * PI) / 180, ((180 + ang) * PI) / 180, true);
				ctx.arc(x0, y4, rR, ((360 + ang) * PI) / 180, ((180 - ang) * PI) / 180, false);
				ctx.arc(x3, y6, eR, ((360 - ang) * PI) / 180, (270 * PI) / 180, true);
				ctx.moveTo(x3, y5);
				ctx.lineTo(x5, y5);
				ctx.stroke();

				// Draw Center line
				ctx.strokeStyle = 'red';
				ctx.lineWidth = 0.5;
				ctx.setLineDash([10, 3, 2, 3]);
				ctx.beginPath();
				ctx.moveTo(x0, 60);
				ctx.lineTo(x0, 450);
				ctx.moveTo(x5, y0);
				ctx.lineTo(x6, y0);
				ctx.moveTo(x0 - 20, y1);
				ctx.lineTo(x0 + 20, y1);
				ctx.stroke();
				// Draw inner circle which is OP
				ctx.strokeStyle = 'blue';
				ctx.lineWidth = 0.4;
				ctx.setLineDash([5, 3]);
				ctx.beginPath();

				ctx.arc(x0, y0, hOp, 0, 2 * PI, true);
				ctx.stroke();
				// Draw previous wire diameter
				ctx.strokeStyle = 'grey';
				ctx.lineWidth = 0.6;
				ctx.setLineDash([5, 3]);
				ctx.beginPath();
				ctx.arc(x0, y0, ip / 2, 0, 2 * PI, true);
				ctx.stroke();

				// Write text
				ctx.font = '16px Arial';
				ctx.fillStyle = 'black';
				ctx.textAlign = 'center';
				// ctx.fillText(`Reduction Rate  : ${rRate(ip, op).toFixed(1)}%`, 600, 50);
				// ctx.fillText(`h(Roll height)   : ${(rH / scaleCanvas).toFixed(3)}mm `, 600, 75);
				// ctx.fillText(`rR(Groove R)  : ${(rR / scaleCanvas).toFixed(3)}mm`, 600, 100);
				ctx.fillText(`IP`, spanX, spanY);
				ctx.fillText(`OP`, spanX * 2, spanY);
				ctx.fillText(`Type`, spanX * 3, spanY);
				ctx.fillText(`R rate`, spanX * 4, spanY);
				ctx.fillText(`rR`, spanX * 5, spanY);
				ctx.fillText(`G/2`, spanX * 6, spanY);
				ctx.fillText(`h`, spanX * 7, spanY);
				ctx.fillText(`h + G/2`, spanX * 8, spanY);
				ctx.fillText(`eR`, spanX * 9, spanY);

				ctx.fillText(inputValues.input1, spanX, spanY + 30);
				ctx.fillText(inputValues.input2, spanX * 2, spanY + 30);
				ctx.fillText(`R`, spanX * 3, spanY + 30);
				ctx.fillText(rRate(ip, op).toFixed(1), spanX * 4, spanY + 30);
				ctx.fillText((rR / scaleCanvas).toFixed(3), spanX * 5, spanY + 30);
				ctx.fillText(inputValues.input3, spanX * 6, spanY + 30);
				ctx.fillText((rH / scaleCanvas).toFixed(3), spanX * 7, spanY + 30);
				ctx.fillText((hOp / scaleCanvas).toFixed(3), spanX * 8, spanY + 30);
				ctx.fillText(inputValues.input4, spanX * 9, spanY + 30);

				ctx.lineWidth = 1;
				ctx.strokeStyle = 'blue';
				ctx.fillStyle = 'hsl(0, 0%, 98%)';
				ctx.setLineDash([5, 3]);
				ctx.beginPath();
				ctx.moveTo(spanX / 2, spanY + 10);
				ctx.lineTo(spanX * 9.5, spanY + 10);
				ctx.stroke();

				// Draw dimension line
				// rR dimension line
				h = Math.sin(45 * (PI / 180)) * rR;
				hx1 = Math.sin(25 * (PI / 180)) * 15;
				hy1 = Math.cos(25 * (PI / 180)) * 15;
				ctx.lineWidth = 1;
				ctx.strokeStyle = 'blue';
				ctx.fillStyle = 'hsl(0, 0%, 98%)';
				ctx.setLineDash([]);
				ctx.beginPath();
				ctx.moveTo(x0, y1);
				ctx.lineTo(x0 + h, y1 - h);
				ctx.lineTo(x0 + h - hx1, y1 - h + hy1);
				ctx.lineTo(x0 + h - hy1, y1 - h + hx1);
				ctx.lineTo(x0 + h, y1 - h);
				ctx.stroke();

				ctx.font = '16px Arial';
				ctx.fillStyle = 'blue';
				ctx.fillText('rR', x0 + h + 5, y1 - h - 5);

				// hOp
				ctx.beginPath();
				ctx.moveTo(x0 - 50, y1 - rR);
				ctx.lineTo(x5 - 50, y1 - rR);
				hx1 = Math.cos(70 * (PI / 180)) * 15;
				hy1 = Math.sin(70 * (PI / 180)) * 15;
				ctx.moveTo(x5 - 10, y2);
				ctx.lineTo(x5 - 50, y2);
				ctx.moveTo(x5 - 35, y1 - rR);
				ctx.lineTo(x5 - 35 + hx1, y1 - rR + hy1);
				ctx.lineTo(x5 - 35 - hx1, y1 - rR + hy1);
				ctx.lineTo(x5 - 35, y1 - rR);
				ctx.lineTo(x5 - 35, y2);
				ctx.lineTo(x5 - 35 + hx1, y2 - hy1);
				ctx.lineTo(x5 - 35 - hx1, y2 - hy1);
				ctx.lineTo(x5 - 35, y2);
				// G/2
				ctx.moveTo(x6 + 10, y2);
				ctx.lineTo(x6 + 45, y2);
				ctx.moveTo(x6 + 10, y0);
				ctx.lineTo(x6 + 45, y0);
				ctx.moveTo(x6 + 30, y0 + 40);
				ctx.lineTo(x6 + 30, y2 - 40);
				ctx.moveTo(x6 + 30, y0);
				ctx.lineTo(x6 + 30 + hx1, y0 + hy1);
				ctx.lineTo(x6 + 30 - hx1, y0 + hy1);
				ctx.lineTo(x6 + 30, y0);
				ctx.moveTo(x6 + 30, y2);
				ctx.lineTo(x6 + 30 + hx1, y2 - hy1);
				ctx.lineTo(x6 + 30 - hx1, y2 - hy1);
				ctx.lineTo(x6 + 30, y2);
				hx1 = Math.sin(45 * (PI / 180)) * eR;
				ctx.moveTo(x4 - hx1, y2 - eR + hx1);
				hx2 = Math.sin(25 * (PI / 180)) * 15;
				hy2 = Math.cos(25 * (PI / 180)) * 15;
				ctx.lineTo(x4 - hx1 + hx2, y2 - eR + hx1 - hy2);
				ctx.lineTo(x4 - hx1 + hy2, y2 - eR + hx1 - hx2);
				ctx.lineTo(x4 - hx1, y2 - eR + hx1);
				hy1 = Math.sin(45 * (PI / 180)) * 50;
				ctx.lineTo(x4 - hx1 + hy1, y2 - eR + hx1 - hy1);
				ctx.stroke();
				// Write text
				ctx.fillText('G/2', x6 + 55, y0 - 2);
				ctx.fillText('h', x5 - 25, y0 - rR / 2);
				ctx.fillText(`eR`, x4 - hx1 + hy1 + 5, y2 - eR + hx1 - hy1 - 5);

				break;

			case 'option2':
				rF = 1.0;
				hOp = op / 2;
				rH = hOp - gap;
				rR = rF * (op / 2);
				ang = 20;

				let a0, b0, c0, a1, b1, c1, b2, c2;
				a0 = rR;
				b0 = Math.sin(ang * (PI / 180)) * rR;
				c0 = Math.sqrt(Math.pow(rR, 2) - Math.pow(b0, 2));
				a1 = eR;
				b1 = Math.sin(ang * (PI / 180)) * eR;
				c1 = Math.sqrt(Math.pow(eR, 2) - Math.pow(b1, 2));
				c2 = b0 - eR - gap + b1;
				b2 = Math.tan(ang * (PI / 180)) * c2;
				y1 = y0 - gap;
				y2 = y0 - (gap + eR - b1);
				y3 = y0 - b0;
				y4 = y0 + gap;
				y5 = y0 + (gap + eR - b1);
				y6 = y0 + b0;

				x1 = x0 - c0;
				x2 = x0 + c0;
				x3 = x1 - b2;
				x4 = x2 + b2;
				x5 = x3 - c1;
				x6 = x4 + c1;
				x7 = x5 - rR / 4;
				x8 = x6 + rR / 4;

				// Upper Roll Grove
				ctx.clearRect(0, 0, 800, 600);
				ctx.lineWidth = 3;
				ctx.strokeStyle = '#000000';
				ctx.fillStyle = 'hsl(0, 0%, 98%)';
				ctx.setLineDash([]);
				ctx.beginPath();
				ctx.moveTo(x7, y1);
				ctx.lineTo(x5, y1);
				ctx.arc(x5, y2 - b1, eR, (90 * PI) / 180, ((360 + ang) * PI) / 180, true);
				ctx.lineTo(x3, y2);
				ctx.arc(x0, y0, rR, ((180 + ang) * PI) / 180, ((360 - ang) * PI) / 180, false);
				ctx.lineTo(x2, y3);
				ctx.arc(x6, y2 - b1, eR, ((180 - ang) * PI) / 180, (90 * PI) / 180, true);
				ctx.lineTo(x6, y1);
				ctx.lineTo(x8, y1);
				ctx.stroke();

				// Bottom Roll Grove
				ctx.beginPath();
				ctx.moveTo(x8, y4);
				ctx.lineTo(x6, y4);
				ctx.arc(x6, y5 + b1, eR, (270 * PI) / 180, ((180 + ang) * PI) / 180, true);
				ctx.lineTo(x2, y6);
				ctx.arc(x0, y0, rR, ((360 + ang) * PI) / 180, ((180 - ang) * PI) / 180, false);
				ctx.lineTo(x3, y5);
				ctx.arc(x5, y5 + b1, eR, ((360 - ang) * PI) / 180, (270 * PI) / 180, true);
				ctx.lineTo(x5, y4);
				ctx.lineTo(x7, y4);
				ctx.stroke();

				// Draw Center line
				ctx.strokeStyle = 'red';
				ctx.lineWidth = 0.5;
				ctx.setLineDash([10, 3, 2, 3]);
				ctx.beginPath();
				ctx.moveTo(x0, 60);
				ctx.lineTo(x0, 450);
				ctx.moveTo(x7, y0);
				ctx.lineTo(x8, y0);
				ctx.stroke();

				ctx.strokeStyle = 'blue';
				ctx.lineWidth = 0.4;
				ctx.setLineDash([5, 3]);
				ctx.beginPath();
				ctx.arc(x0, y0, hOp, 0, 2 * PI, true);
				ctx.stroke();

				ctx.strokeStyle = 'black';
				ctx.lineWidth = 1;
				ctx.setLineDash([5, 3]);
				ctx.beginPath();
				ctx.arc(x0, y0, ip / 2, 0, 2 * PI, true);
				ctx.stroke();

				ctx.font = '16px Arial';
				ctx.fillStyle = 'black';
				ctx.textAlign = 'center';
				// ctx.fillText(`Reduction Rate : ${rRate(ip, op).toFixed(1)}%`, 600, 50);
				// ctx.fillText(`h(Roll height) : ${(rH / scaleCanvas).toFixed(3)}mm `, 600, 75);
				// ctx.fillText(`rR(Groove R)  : ${(rR / scaleCanvas).toFixed(3)}mm`, 600, 100);

				ctx.fillText(`IP`, spanX - spanX * 0.7, spanY);
				ctx.fillText(`OP`, spanX * 2 - spanX * 0.7, spanY);
				ctx.fillText(`Type`, spanX * 3 - spanX * 0.7, spanY);
				ctx.fillText(`R rate`, spanX * 4 - spanX * 0.7, spanY);
				ctx.fillText(`rR`, spanX * 5 - spanX * 0.7, spanY);
				ctx.fillText(`G/2`, spanX * 6 - spanX * 0.7, spanY);
				ctx.fillText(`h`, spanX * 7 - spanX * 0.7, spanY);
				ctx.fillText(`h + G/2`, spanX * 8 - spanX * 0.7, spanY);
				ctx.fillText(`eR`, spanX * 9 - spanX * 0.7, spanY);
				ctx.fillText(`2⍺`, spanX * 10 - spanX * 0.7, spanY);

				ctx.fillText(inputValues.input1, spanX - spanX * 0.7, spanY + 30);
				ctx.fillText(inputValues.input2, spanX * 2 - spanX * 0.7, spanY + 30);
				ctx.fillText(`R`, spanX * 3 - spanX * 0.7, spanY + 30);
				ctx.fillText(rRate(ip, op).toFixed(1), spanX * 4 - spanX * 0.7, spanY + 30);
				ctx.fillText((rR / scaleCanvas).toFixed(3), spanX * 5 - spanX * 0.7, spanY + 30);
				ctx.fillText(inputValues.input3, spanX * 6 - spanX * 0.7, spanY + 30);
				ctx.fillText((rH / scaleCanvas).toFixed(3), spanX * 7 - spanX * 0.7, spanY + 30);
				ctx.fillText((hOp / scaleCanvas).toFixed(3), spanX * 8 - spanX * 0.7, spanY + 30);
				ctx.fillText(inputValues.input4, spanX * 9 - spanX * 0.7, spanY + 30);
				ctx.fillText('40°', spanX * 10 - spanX * 0.7, spanY + 30);

				ctx.lineWidth = 1;
				ctx.strokeStyle = 'blue';
				ctx.fillStyle = 'hsl(0, 0%, 98%)';
				ctx.setLineDash([5, 3]);
				ctx.beginPath();
				ctx.moveTo(spanX * 0.1, spanY + 10);
				ctx.lineTo(spanX * 9.5, spanY + 10);
				ctx.stroke();

				// Draw dimension line
				// rR dimension line
				h = Math.sin(45 * (PI / 180)) * rR;
				hx1 = Math.sin(25 * (PI / 180)) * 15;
				hy1 = Math.cos(25 * (PI / 180)) * 15;
				ctx.lineWidth = 1;
				ctx.strokeStyle = 'blue';
				ctx.fillStyle = 'hsl(0, 0%, 98%)';
				ctx.setLineDash([]);
				ctx.beginPath();
				ctx.moveTo(x0, y0);
				ctx.lineTo(x0 + h, y0 - h);
				ctx.lineTo(x0 + h - hx1, y0 - h + hy1);
				ctx.lineTo(x0 + h - hy1, y0 - h + hx1);
				ctx.lineTo(x0 + h, y0 - h);
				ctx.stroke();

				ctx.font = '16px Arial';
				ctx.fillStyle = 'blue';
				ctx.fillText('rR', x0 - 20, y0 + 20);

				// hOp
				ctx.beginPath();
				ctx.moveTo(x0 - 50, y0 - rR);
				ctx.lineTo(x7 - 50, y0 - rR);
				hx1 = Math.cos(70 * (PI / 180)) * 15;
				hy1 = Math.sin(70 * (PI / 180)) * 15;
				ctx.moveTo(x7 - 10, y1);
				ctx.lineTo(x7 - 50, y1);
				ctx.moveTo(x7 - 35, y0 - rR);
				ctx.lineTo(x7 - 35 + hx1, y0 - rR + hy1);
				ctx.lineTo(x7 - 35 - hx1, y0 - rR + hy1);
				ctx.lineTo(x7 - 35, y0 - rR);
				ctx.lineTo(x7 - 35, y1);
				ctx.lineTo(x7 - 35 + hx1, y1 - hy1);
				ctx.lineTo(x7 - 35 - hx1, y1 - hy1);
				ctx.lineTo(x7 - 35, y1);

				// // G/2
				ctx.moveTo(x8 + 10, y1);
				ctx.lineTo(x8 + 45, y1);
				ctx.moveTo(x8 + 10, y0);
				ctx.lineTo(x8 + 45, y0);
				ctx.moveTo(x8 + 30, y0 + 40);
				ctx.lineTo(x8 + 30, y1 - 40);
				ctx.moveTo(x8 + 30, y0);
				ctx.lineTo(x8 + 30 + hx1, y0 + hy1);
				ctx.lineTo(x8 + 30 - hx1, y0 + hy1);
				ctx.lineTo(x8 + 30, y0);
				ctx.moveTo(x8 + 30, y1);
				ctx.lineTo(x8 + 30 + hx1, y1 - hy1);
				ctx.lineTo(x8 + 30 - hx1, y1 - hy1);
				ctx.lineTo(x8 + 30, y1);
				hx1 = Math.sin(45 * (PI / 180)) * eR;
				ctx.moveTo(x6 - hx1, y1 - eR + hx1);
				let hx2 = Math.sin(25 * (PI / 180)) * 15;
				let hy2 = Math.cos(25 * (PI / 180)) * 15;
				ctx.lineTo(x6 - hx1 + hx2, y1 - eR + hx1 - hy2);
				ctx.lineTo(x6 - hx1 + hy2, y1 - eR + hx1 - hx2);
				ctx.lineTo(x6 - hx1, y1 - eR + hx1);
				hy1 = Math.sin(45 * (PI / 180)) * 50;
				ctx.lineTo(x6 - hx1 + hy1, y1 - eR + hx1 - hy1);
				ctx.stroke();
				// angle dimension
				let angleY0 = (x0 - x1) / 0.3639;
				console.log('y0', y0, y0 - y3 + angleY0);
				let dR = y0 - (y3 - angleY0) - rR - 20;
				let dx = Math.sin(20 * (PI / 180)) * dR;
				let dy = Math.cos(20 * (PI / 180)) * dR;
				ctx.moveTo(x1 + 10, y3 - 27);
				ctx.lineTo(x1 + 10 + x1 / 2, y3 - 27 - (x1 + 10) / 2 / 0.36397);
				ctx.moveTo(x2 - 10, y3 - 27);
				ctx.lineTo(x2 - 10 - x2 / 2, y3 - 27 - (x2 - 10) / 2 / 0.36397);
				ctx.moveTo(x0 - dx, y0 - rR - 20 - (dR - dy));
				ctx.arc(x0, y3 - angleY0, dR, (110 * PI) / 180, (70 * PI) / 180, true);
				ctx.lineTo(x0 + dx - 13, y0 - rR - 20 - (dR - dy) + 12);
				ctx.moveTo(x0 - dx, y0 - rR - 20 - (dR - dy));
				ctx.lineTo(x0 - dx + 13, y0 - rR - 20 - (dR - dy) + 12);

				ctx.stroke();
				// Write text
				ctx.fillText('G/2', x8 + 55, y0 - 2);
				ctx.fillText('h', x7 - 25, y0 - rR / 2);
				ctx.fillText(`eR`, x6 - hx1 + hy1 + 5, y1 - eR + hx1 - hy1 - 10);
				ctx.fillText('2⍺', x0 - 10, y0 - rR - 30);
				break;
		}
	}

	return (
		<div className='container'>
			<div className='input_CRD'>
				<div>
					<label>In Wire(IP):</label>
					<input type='number' name='input1' step='0.01' value={inputValues.input1} onChange={handleChange} />
				</div>
				<div>
					<label>Out Wire(OP):</label>
					<input type='number' name='input2' step='0.01' value={inputValues.input2} onChange={handleChange} />
				</div>
				<div>
					<label>Roll Gap(G/2):</label>
					<input type='number' name='input3' step='0.01' value={inputValues.input3} onChange={handleChange} />
				</div>
				<div>
					<label>Edge Round(eR):</label>
					<input type='number' name='input4' step='0.1' value={inputValues.input4} onChange={handleChange} />
				</div>
			</div>

			<div className='radioButton' id='radio'>
				<fieldset>
					<legend>Choose Groove Type</legend>
					<input
						type='radio'
						id='choice1'
						name='radioGroup'
						value='option1'
						checked={selectedRadio === 'option1'}
						onChange={handleRadioChange}
					/>
					<label htmlFor='choice1'>Rough Round (R)</label>
					<input type='radio' id='choice2' name='radioGroup' value='option2' onChange={handleRadioChange} />
					<label htmlFor='choice2'>Sizing (S)</label>
				</fieldset>
			</div>
			<div className='crdCanvas'>
				<br />
				<canvas id='crdCanvas' width='800' height='600'></canvas>
			</div>
			{/* 
      <p>Input 1 value: {inputValues.input1}</p>
      <p>Input 2 value: {inputValues.input2}</p>
      <p>Input 3 value: {inputValues.input3}</p>
      <p>Input 4 value: {inputValues.input4}</p>
      <p>Input 5 value: {inputValues.input5}</p>
      <p>Input 6 value: {inputValues.input6}</p>
      <p>Selected radio option: {selectedRadio}</p> */}
		</div>
	);
};

export default InputCRD;
