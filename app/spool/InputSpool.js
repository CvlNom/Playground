'use client';
import { useEffect, useState } from 'react';

const InputSpool = ({ calculatedValue }) => {
	const [inputValues, setInputValues] = useState({
		input1: 1.19,
		input2: 8.53,
		input3: 104,
		input4: 6.5,
		input5: 300,
		input6: 10.0,
		input7: 15.0,
	});
  console.log('-----------', calculatedValue)
	
	const [selectedRadio, setSelectedRadio] = useState('option1');

	const handleChange = (event) => {
		const { name, value } = event.target;
		setInputValues({ ...inputValues, [name]: value });
	};

	const [selDetail, setSelDetail] = useState('option1');

	const handleChange1 = (event) => {
		const { name, value } = event.target;
		setInputValues({ ...inputValues, [name]: value });
	};

	useEffect(() => {
		drawGroove();
	}, [inputValues, selectedRadio, selDetail]);

	const handleRadioChange = (event) => {
		setSelectedRadio(event.target.value);
	};
	const handleRadioChange1 = (event) => {
		setSelDetail(event.target.value);
	};
	// console.log(selDetail, inputValues);

	function drawGroove() {
		const spoolCanvas = document.getElementById('spoolCanvas');
		const ctx = spoolCanvas.getContext('2d');
		const PI = Math.PI;
		let scaleCanvas = 1;

		const wDia = inputValues.input1 * scaleCanvas;
		const wWeight = inputValues.input2 * 1;
		const spWidth = inputValues.input3 * scaleCanvas;
		const flThk = inputValues.input4 * scaleCanvas;
		const spDia = inputValues.input5 * scaleCanvas;
		const needDist = inputValues.input6 * scaleCanvas;
		const gPitch = wDia + 0.01;
		const windWidth = spWidth - 2 * flThk;
		const lastSpan = gPitch / 2;
		const gSpan = windWidth - lastSpan;
		const calWidth = (windWidth - gPitch / 2) / gPitch;
		const windWeight = inputValues.input7;

		const lastDia = spDia - 2 * needDist - wDia; //계산하기 위한 마지막 경
		// 레이어 층간 거리
		const belowHeight = Math.sqrt(Math.pow(wDia, 2) - Math.pow(wDia / 2 + 0.005, 2));
		const nextDia = lastDia - belowHeight * 2; //
		let lapNo;
		let accumulatedWeight = 0;
		let startDia = 0;
		let count = 0;

		for (let i = lastDia; i > 100; i = i - belowHeight * 2) {
			count = count + 1;
			selectedRadio === 'option1' ? (lapNo = Math.ceil(calWidth)) : (lapNo = Math.floor(calWidth));
			let wireL = (i * Math.PI * (lapNo + 0.5)) / 1000;
			let wireW = (wireL * wWeight) / 1000;
			accumulatedWeight = accumulatedWeight + wireW;
			// console.log('---------------------????', count, i, wireW, accumulatedWeight);
			if (accumulatedWeight > windWeight) {
				startDia = i - wDia;
				break;
			}
		}

		if (selDetail === 'option1') {
			// console.log('?????????????????????????????');
			scaleCanvas = 4;
			let x0 = spoolCanvas.width / 2;
			let y0 = spoolCanvas.height * 1.05;
			let y1 = y0 - 25.5 * scaleCanvas;
			let y2 = y1 - 3.5 * scaleCanvas;
			let y3 = y2 - startDia * 0.1 * scaleCanvas;
			let y6 = y0 - (startDia / 2) * scaleCanvas;
			let y5 = y6 + (flThk / 1.5) * scaleCanvas;
			let y4 = y6 + startDia * 0.1 * scaleCanvas;
			let y8 = y0 - (spDia / 2) * scaleCanvas;
			let y7 = y8 + needDist * scaleCanvas;
			let x1 = x0 - (spWidth / 4) * scaleCanvas;
			let x1a = x0 + (spWidth / 4) * scaleCanvas;
			let x2 = x0 - ((gPitch * lapNo + gPitch / 2) / 2) * scaleCanvas;
			let x2a = x0 + ((gPitch * lapNo + gPitch / 2) / 2) * scaleCanvas;
			let x4 = x0 - (spWidth / 2) * scaleCanvas;
			let x4a = x0 + (spWidth / 2) * scaleCanvas;
			let x3 = x4 + 1 * scaleCanvas;
			let x3a = x4a - 1 * scaleCanvas;

			ctx.clearRect(0, 0, 800, 800);
			ctx.lineWidth = 2;
			ctx.strokeStyle = '#000000';
			ctx.fillStyle = 'lightgrey';
			ctx.setLineDash([]);
			ctx.beginPath();
			ctx.moveTo(x3, y1);
			ctx.lineTo(x3, y2);
			ctx.lineTo(x1, y3);
			ctx.lineTo(x1, y4);
			ctx.lineTo(x4, y5);
			ctx.lineTo(x4, y6 - 10);
			ctx.lineTo(x4 + 10, y8 + 20);
			ctx.lineTo(x4, y8 + 12);
			ctx.lineTo(x4, y8 + 3);
			ctx.lineTo(x4 + 3, y8);
			ctx.lineTo(x2 - 3, y8);
			ctx.lineTo(x2, y8 + 3);
			ctx.lineTo(x2, y6);
			ctx.lineTo(x2a, y6);
			ctx.lineTo(x2a, y8 + 3);
			ctx.lineTo(x2a + 3, y8);
			ctx.lineTo(x4a - 3, y8);
			ctx.lineTo(x4a, y8 + 3);
			ctx.lineTo(x4a, y8 + 12);
			ctx.lineTo(x4a - 10, y8 + 20);
			ctx.lineTo(x4a, y6 - 10);
			// ctx.lineTo(x4a, y8);
			ctx.lineTo(x4a, y5);
			ctx.lineTo(x1a, y4);
			ctx.lineTo(x1a, y3);
			ctx.lineTo(x3a, y2);
			ctx.lineTo(x3a, y1);
			ctx.lineTo(x3, y1);
			ctx.closePath();
			ctx.fillStyle = 'white';
			ctx.fill();
			ctx.stroke();

			ctx.lineWidth = 0.5;
			ctx.strokeStyle = '#000000';
			ctx.fillStyle = 'lightgrey';
			ctx.setLineDash([]);
			ctx.beginPath();
			ctx.moveTo(x2, y6);
			ctx.lineTo(x2, y7);
			ctx.lineTo(x2a, y7);
			ctx.lineTo(x2a, y6);
			ctx.lineTo(x2, y6);
			ctx.closePath();
			ctx.fill();
			ctx.stroke();

			ctx.lineWidth = 0.6;
			ctx.strokeStyle = 'red';
			ctx.beginPath();
			for (let i = 1; i < 6; i++) {
				ctx.moveTo(x2 + 20 * i, y6 - 10);
				ctx.arc(x2 + 10 * 2 * i - 10, y6 - 10, 10, 0, (2 * PI) / 180, true);
			}
			ctx.moveTo(x2a - 10, y6 - 10);
			ctx.arc(x2a - 20, y6 - 10, 10, 0, (2 * PI) / 180, true);
			let layerH = Math.sqrt(Math.pow(20, 2) - Math.pow(10, 2));
			ctx.moveTo(x2a, y6 - 10 - layerH);
			ctx.arc(x2a - 10, y6 - 10 - layerH, 10, 0, (2 * PI) / 180, true);
			ctx.moveTo(x2a - 10, y6 - 10 - layerH * 2);
			ctx.arc(x2a - 20, y6 - 10 - layerH * 2, 10, 0, (2 * PI) / 180, true);
			ctx.moveTo(x2a, y6 - 10 - layerH * 3);
			ctx.arc(x2a - 10, y6 - 10 - layerH * 3, 10, 0, (2 * PI) / 180, true);
			ctx.closePath();
			ctx.fill();
			ctx.stroke();

			ctx.beginPath();
			ctx.moveTo(x3, y1);
			ctx.lineTo(x3, y0 + 100);
			ctx.moveTo(x3a, y1);
			ctx.lineTo(x3a, y0 + 100);
			ctx.stroke();

			ctx.strokeStyle = 'red';
			ctx.lineWidth = 0.5;
			ctx.setLineDash([10, 3, 2, 3]);
			ctx.beginPath();
			ctx.moveTo(x0 - spWidth * 0.7 * scaleCanvas, y0);
			ctx.lineTo(x0 + spWidth * 0.7 * scaleCanvas, y0);
			ctx.stroke();

			ctx.lineWidth = 1;
			ctx.strokeStyle = 'blue';
			ctx.setLineDash([5, 3]);
			ctx.beginPath();
			ctx.moveTo(x3, y2);
			ctx.lineTo(x3a, y2);
			ctx.moveTo(x4, y5);
			ctx.lineTo(x4a, y5);
			ctx.stroke();

			drawDimHor(x2, y8, x2a, y8, needDist * scaleCanvas, 1, '', 0, scaleCanvas);
			drawDimHor(x4, y8, x4a, y8, 2 * needDist * scaleCanvas, 1, '', 0, scaleCanvas);
			drawDimHor(x4, y8, x2, y8, needDist * scaleCanvas, 1, '', 0, scaleCanvas);
			drawDimVer(x4, y8, x2, y7, needDist * scaleCanvas, 1, '', 1, scaleCanvas);
			drawDimVer(x4, y8, x2, y6, 2 * needDist * scaleCanvas, 1, '', 1, scaleCanvas);

			ctx.setLineDash([]);
			ctx.beginPath();
			ctx.moveTo(x4a + 5, y8);
			ctx.lineTo(x4a + 12 * needDist, y8);
			ctx.moveTo(x2a + 5, y6);
			ctx.lineTo(x2a + 10 * needDist, y6);
			ctx.stroke();

			drawDimLead(x4a + 11.5 * needDist, y0 - spDia, spDia, 0, 1, `ø${spDia.toFixed(1)}`, 0, scaleCanvas);
			drawDimLead(x3a + 7.5 * needDist, y0 - startDia, startDia, 0, 1, `ø${startDia.toFixed(1)}`, 0, scaleCanvas);
			console.log('---------------????', startDia, scaleCanvas);

			ctx.font = '15px Arial';
			ctx.fillStyle = 'black';
			ctx.textAlign = 'left';
			ctx.fillText(`No. of Lap: ${lapNo + 0.5}`, x2 + 10, y6 - 30);
			ctx.fillText(`  No. of Layer: ${count}mm `, x0, y8 + (y6 - y8) / 1.5);
			let flangeThickness = (spWidth - gPitch * (lapNo + 0.5)) / 2;
			ctx.fillText(`Flange Thickness: ${flangeThickness.toFixed(1)}`, x2 + 10, y8 + 20);
		} else {
			// console.log('---------------------????');

			scaleCanvas = 50;
			let gP = gPitch * scaleCanvas;
			let bb = Math.sqrt(Math.pow(gP, 2) - Math.pow(gP / 2, 2));
			let dd = bb - gP / 2;
			let ee = Math.sqrt(Math.pow(gP / 2, 2) - Math.pow(dd, 2));
			let ff = gP - 2 * ee;
			let x0 = spoolCanvas.width / 8;
			let x00 = x0 * 7;
			let y0 = 250;
			let result1 = ee / (gP / 2);
			let radian1 = Math.asin(result1);
			let angle1 = radian1 * (180 / Math.PI);

			// console.log('angle?????', gP / 2, ee, angle1);

			let x1 = x0 + ee + ff;
			let x2;
			let x3;
			let xc = spoolCanvas.width / 2;

			ctx.clearRect(0, 0, 800, 800);
			ctx.lineWidth = 2;
			ctx.strokeStyle = '#000000';
			ctx.fillStyle = 'lightgrey';
			ctx.setLineDash([]);
			ctx.beginPath();
			ctx.moveTo(x0, 100);
			ctx.lineTo(x0, y0);
			for (let i = x1; i < xc; i = i + gP) {
				ctx.lineTo(i, y0);
				ctx.arc(i + ee, y0 + dd, gP / 2, ((270 - angle1) * PI) / 180, ((270 + angle1) * PI) / 180, false);
				x2 = i + 2 * ee;
			}
			ctx.stroke();

			// console.log(x2 + 2 * ee);
			let gg = (gP / 2) * 0.2;
			let rr = (gP / 2) * 0.8;
			let x01 = x00 - gg - rr - ee - ff;
			ctx.beginPath();
			ctx.moveTo(x00, 100);
			ctx.lineTo(x00, y0 - gP / 1.5);
			ctx.lineTo(x00 - gg, y0 - gP / 1.5);
			ctx.arc(x00 - gg, y0 - gP / 1.5 + rr, rr, (270 * PI) / 180, (180 * PI) / 180, true);
			ctx.lineTo(x00 - gg - rr, y0);
			for (let i = x01; i > xc + gP; i = i - gP) {
				ctx.lineTo(i, y0);
				ctx.arc(i - ee, y0 + dd, gP / 2, ((270 + angle1) * PI) / 180, ((270 - angle1) * PI) / 180, true);
				x3 = i - 2 * ee;
			}
			ctx.stroke();

			ctx.beginPath();
			ctx.moveTo(x2 + gP * 0.25, y0);
			ctx.lineTo(x3, y0);
			ctx.stroke();

			ctx.lineWidth = 1;
			ctx.strokeStyle = 'blue';
			ctx.fillStyle = 'lightgrey';
			ctx.setLineDash([8, 2, 2]);
			ctx.beginPath();
			ctx.moveTo(x2 + gP / 2, y0 - gP);
			ctx.lineTo(x2 - gP / 2, y0 + gP);
			ctx.moveTo(x2 + gP / 2 + gP * 0.25, y0 - gP);
			ctx.lineTo(x2 - gP / 2 + gP * 0.25, y0 + gP);
			ctx.stroke();

			ctx.lineWidth = 0.4;
			ctx.strokeStyle = 'red';
			ctx.setLineDash([]);
			// ctx.fillStyle = 'lightgrey';
			let wD = wDia * scaleCanvas;
			ctx.beginPath();
			for (let i = x0 + gP / 2; i < xc; i = i + gP) {
				ctx.moveTo(i + gP / 2, y0 - gP / 2);
				ctx.arc(i, y0 - gP / 2, wD / 2, 0, 2 * PI);
				ctx.moveTo(i + gP, y0 - gP / 2 - bb);
				ctx.arc(i + gP / 2, y0 - gP / 2 - bb, wD / 2, 0, 2 * PI);
			}
			ctx.stroke();

			for (let i = x00 - gP; i > xc + gP; i = i - gP) {
				ctx.moveTo(i + gP / 2, y0 - gP / 2);
				ctx.arc(i, y0 - gP / 2, wD / 2, 0, 2 * PI);
				ctx.moveTo(i + gP, y0 - gP / 2 - bb);
				ctx.arc(i + gP / 2, y0 - gP / 2 - bb, wD / 2, 0, 2 * PI);
			}
			ctx.stroke();

			ctx.strokeStyle = 'red';
			ctx.lineWidth = 0.5;
			ctx.setLineDash([10, 3, 2, 3]);
			ctx.beginPath();
			ctx.moveTo(x0 + ee + ff, y0 + dd);
			ctx.lineTo(x0 + gP + ee + gP, y0 + dd);
			ctx.moveTo(x0 + gP, y0);
			ctx.lineTo(x0 + gP, y0 + dd + dd);
			ctx.moveTo(x0 + gP * 2, y0);
			ctx.lineTo(x0 + gP * 2, y0 + dd + dd);
			ctx.moveTo(x00 - ee - ff - gP / 2, y0 + dd);
			ctx.lineTo(x00 - ee - gP * 2.5, y0 + dd);
			ctx.moveTo(x00 - gP * 1.5, y0);
			ctx.lineTo(x00 - gP * 1.5, y0 + dd + dd);
			ctx.moveTo(x00 - gP * 2.5, y0);
			ctx.lineTo(x00 - gP * 2.5, y0 + dd + dd);
			ctx.stroke();

			drawDimHor(x0, y0, x0 + gP, y0, gP * 2, 3, '', 0, scaleCanvas);
			drawDimHor(x0 + gP, y0, x0 + 2 * gP, y0, gP * 2, 3, '', 0, scaleCanvas);
			let layerWidth = (gP * lapNo + gP / 2) / scaleCanvas;
			drawDimHor(x0, 100, x00, 100, gP, 1, `Layer Width: ${layerWidth}`, 0, scaleCanvas);
			drawDimVer(x0, y0, x0 + ee + ff, y0 + dd, gP / 2, 1, ``, 1, scaleCanvas);
			drawDimVer(x00, y0 - gP / 1.5, x00 - gP / 2, y0, gP / 2, 1, ``, 0, scaleCanvas);
			drawDimHor(x00 - 2.5 * gP, y0 + 2 * dd, x00 - 1.5 * gP, y0 + 2 * dd, gP, 3, '', 1, scaleCanvas);
			drawDimHor(x00 - 1.5 * gP, y0 + 2 * dd, x00 - 0.5 * gP, y0 + 2 * dd, gP, 3, '', 1, scaleCanvas);
			drawDimHor(x00 - 0.5 * gP, y0 + 2 * dd, x00, y0 + 2 * dd, gP, 3, '', 1, scaleCanvas);
			drawDimLead(x0 + gP, y0 + dd, gP / 2, 20, 3, '', 0, scaleCanvas);
		}

		function drawDimHor(px1, py1, px2, py2, lead, toFix, text, pos, scaleCanvas) {
			// const el = document.getElementById('myCanvas');
			// const ctx = el.getContext('2d');
			let gap = 8;
			let arrow = 6;

			ctx.lineWidth = 0.5;
			ctx.strokeStyle = 'blue';
			ctx.setLineDash([]);
			ctx.beginPath();
			if (pos == 0) {
				ctx.moveTo(px1, py1 - gap);
				ctx.lineTo(px1, py1 - gap - lead);
				ctx.moveTo(px2, py2 - gap);
				ctx.lineTo(px2, py1 - gap - lead);

				// 치수선 간격이 화살표 보다 작을 때 처리
				if ((px2 - px1) / 2 < 3 * arrow) {
					ctx.moveTo(px1 - 3 * arrow, py1 - lead);
					ctx.lineTo(px2 + 3 * arrow, py1 - lead);
					ctx.stroke();
					ctx.moveTo(px1, py1 - lead);
					ctx.lineTo(px1 - arrow, py1 - lead - arrow / 2);
					ctx.lineTo(px1 - arrow, py1 - lead + arrow / 2);
					ctx.closePath();
					ctx.fillStyle = 'blue';
					ctx.fill();
					ctx.moveTo(px2, py1 - lead);
					ctx.lineTo(px2 + arrow, py1 - lead - arrow / 2);
					ctx.lineTo(px2 + arrow, py1 - lead + arrow / 2);
					ctx.closePath();
					ctx.fillStyle = 'blue';
					ctx.fill();
				} else {
					ctx.moveTo(px1, py1 - lead);
					ctx.lineTo(px2, py1 - lead);
					ctx.stroke();
					ctx.moveTo(px1, py1 - lead);
					ctx.lineTo(px1 + arrow, py1 - lead - arrow / 2);
					ctx.lineTo(px1 + arrow, py1 - lead + arrow / 2);
					ctx.closePath();
					ctx.fillStyle = 'blue';
					ctx.fill();
					ctx.moveTo(px2, py1 - lead);
					ctx.lineTo(px2 - arrow, py1 - lead - arrow / 2);
					ctx.lineTo(px2 - arrow, py1 - lead + arrow / 2);
					ctx.closePath();
					ctx.fillStyle = 'blue';
					ctx.fill();
				}
				// Dimension Text
				// console.log(Math.abs(-10 / 2));
				ctx.font = '14px Arial';
				ctx.fillStyle = 'blue';
				ctx.textAlign = 'center';
				let textPositionX = (px2 - px1) / 2 + px1;
				if (text === '') {
					ctx.fillText(((px2 - px1) / scaleCanvas).toFixed(toFix), textPositionX, py1 - lead - gap * 1.2);
				} else {
					ctx.fillText(text, textPositionX, py1 - lead - gap * 1.2);
				}
			} else {
				ctx.moveTo(px1, py1 + gap);
				ctx.lineTo(px1, py1 + gap + lead);
				ctx.moveTo(px2, py2 + gap);
				ctx.lineTo(px2, py1 + gap + lead);

				if ((px2 - px1) / 2 < 3 * arrow) {
					ctx.moveTo(px1 - 3 * arrow, py1 + lead);
					ctx.lineTo(px2 + 3 * arrow, py1 + lead);
					ctx.stroke();
					ctx.moveTo(px1, py1 + lead);
					ctx.lineTo(px1 - arrow, py1 + lead - arrow / 2);
					ctx.lineTo(px1 - arrow, py1 + lead + arrow / 2);
					ctx.closePath();
					ctx.fillStyle = 'blue';
					ctx.fill();
					ctx.moveTo(px2, py1 + lead);
					ctx.lineTo(px2 + arrow, py1 + lead - arrow / 2);
					ctx.lineTo(px2 + arrow, py1 + lead + arrow / 2);
					ctx.closePath();
					ctx.fillStyle = 'blue';
					ctx.fill();
				} else {
					ctx.moveTo(px1, py1 + lead);
					ctx.lineTo(px2, py1 + lead);
					ctx.stroke();
					ctx.moveTo(px1, py1 + lead);
					ctx.lineTo(px1 + arrow, py1 + lead - arrow / 2);
					ctx.lineTo(px1 + arrow, py1 + lead + arrow / 2);
					ctx.closePath();
					ctx.fillStyle = 'blue';
					ctx.fill();
					ctx.moveTo(px2, py1 + lead);
					ctx.lineTo(px2 - arrow, py1 + lead - arrow / 2);
					ctx.lineTo(px2 - arrow, py1 + lead + arrow / 2);
					ctx.closePath();
					ctx.fillStyle = 'blue';
					ctx.fill();
				}
				ctx.font = '14px Arial';
				ctx.fillStyle = 'blue';
				ctx.textAlign = 'center';
				let textPositionX = (px2 - px1) / 2 + px1;
				if (text === '') {
					ctx.fillText(((px2 - px1) / scaleCanvas).toFixed(toFix), textPositionX, py1 + lead + gap * 2.5);
				} else {
					ctx.fillText(text, textPositionX, py1 + lead + gap * 2.5);
				}
			}
		}

		function drawDimVer(px1, py1, px2, py2, lead, toFix, text, pos, scaleCanvas) {
			// const el = document.getElementById('myCanvas');
			// const ctx = el.getContext('2d');
			let gap = 8;
			let arrow = 6;

			// x값이 큰쪽을 먼저 지정
			ctx.lineWidth = 0.5;
			ctx.strokeStyle = 'blue';
			ctx.setLineDash([]);
			ctx.beginPath();
			if (pos == 0) {
				ctx.moveTo(px1 + gap, py1);
				ctx.lineTo(px1 + gap + lead, py1); //어느 x가 더 큰지 확인하여 선택
				ctx.moveTo(px2 + gap, py2);
				ctx.lineTo(px1 + gap + lead, py2);
				// ctx.moveTo(px1 + lead, py1)
				// ctx.lineTo(px1 + lead, py2)
				ctx.stroke();
				// draw arrow
				if ((py2 - py1) / 2 < 3 * arrow) {
					// console.log('small');
					ctx.beginPath();
					ctx.moveTo(px1 + lead, py1 - 3 * arrow);
					ctx.lineTo(px1 + lead, py2 + 3 * arrow);
					ctx.stroke();

					ctx.moveTo(px1 + lead, py1);
					ctx.lineTo(px1 + lead - arrow / 2, py1 - arrow);
					ctx.lineTo(px1 + lead + arrow / 2, py1 - arrow);
					ctx.closePath();
					ctx.fillStyle = 'blue';
					ctx.fill();
					ctx.moveTo(px1 + lead, py2);
					ctx.lineTo(px1 + lead - arrow / 2, py2 + arrow);
					ctx.lineTo(px1 + lead + arrow / 2, py2 + arrow);
					ctx.closePath();
					ctx.fillStyle = 'blue';
					ctx.fill();
				} else {
					// console.log('big');
					ctx.moveTo(px1 + lead, py1);
					ctx.lineTo(px1 + lead, py2);
					ctx.stroke();
					ctx.moveTo(px1 + lead, py1);
					ctx.lineTo(px1 + lead - arrow / 2, py1 + arrow);
					ctx.lineTo(px1 + lead + arrow / 2, py1 + arrow);
					ctx.closePath();
					ctx.fillStyle = 'blue';
					ctx.fill();
					ctx.moveTo(px1 + lead, py2);
					ctx.lineTo(px1 + lead - arrow / 2, py2 - arrow);
					ctx.lineTo(px1 + lead + arrow / 2, py2 - arrow);
					ctx.closePath();
					ctx.fillStyle = 'blue';
					ctx.fill();
				}
				ctx.font = '14px Arial';
				ctx.fillStyle = 'blue';
				ctx.textAlign = 'center';
				let textPositionY = (py2 - py1) / 2 + py1;
				// ctx.textAlign = 'center';
				ctx.save(); // 현재 상태 저장
				ctx.translate(px1 + lead + gap * 2, textPositionY + 5); // 회전 중심을 텍스트 위치로 이동
				// console.log(py1 + lead + gap * 14.5, textPositionY + 5);
				ctx.rotate(Math.PI / -2); // 90도 회전 (라디안 단위로)

				if (text === '') {
					ctx.fillText(((py2 - py1) / scaleCanvas).toFixed(toFix), 0, 0);
				} else {
					ctx.fillText(text, 0, 0);
				}
				ctx.restore();
			} else {
				ctx.moveTo(px1 - gap, py1);
				ctx.lineTo(px1 - gap - lead, py1); //어느 x가 더 큰지 확인하여 선택
				ctx.moveTo(px2 - gap, py2);
				ctx.lineTo(px1 - gap - lead, py2);
				// ctx.moveTo(px1 - lead, py1);
				// ctx.lineTo(px1 - lead, py2);
				ctx.stroke();

				if ((py2 - py1) / 2 < 3 * arrow) {
					// console.log('small');
					ctx.beginPath();
					ctx.moveTo(px1 - lead, py1 - 3 * arrow);
					ctx.lineTo(px1 - lead, py2 + 3 * arrow);
					ctx.stroke();

					ctx.moveTo(px1 - lead, py1);
					ctx.lineTo(px1 - lead - arrow / 2, py1 - arrow);
					ctx.lineTo(px1 - lead + arrow / 2, py1 - arrow);
					ctx.closePath();
					ctx.fillStyle = 'blue';
					ctx.fill();
					ctx.moveTo(px1 - lead, py2);
					ctx.lineTo(px1 - lead - arrow / 2, py2 + arrow);
					ctx.lineTo(px1 - lead + arrow / 2, py2 + arrow);
					ctx.closePath();
					ctx.fillStyle = 'blue';
					ctx.fill();
				} else {
					console.log('big');
					ctx.moveTo(px1 - lead, py1);
					ctx.lineTo(px1 - lead, py2);
					ctx.stroke();
					ctx.moveTo(px1 - lead, py1);
					ctx.lineTo(px1 - lead - arrow / 2, py1 + arrow);
					ctx.lineTo(px1 - lead + arrow / 2, py1 + arrow);
					ctx.closePath();
					ctx.fillStyle = 'blue';
					ctx.fill();
					ctx.moveTo(px1 - lead, py2);
					ctx.lineTo(px1 - lead - arrow / 2, py2 - arrow);
					ctx.lineTo(px1 - lead + arrow / 2, py2 - arrow);
					ctx.closePath();
					ctx.fillStyle = 'blue';
					ctx.fill();
				}
				ctx.font = '14px Arial';
				ctx.fillStyle = 'blue';
				ctx.textAlign = 'center';
				let textPositionY = (py2 - py1) / 2 + py1;
				// ctx.textAlign = 'center';
				ctx.save(); // 현재 상태 저장
				ctx.translate(px1 - lead - gap, textPositionY + 5); // 회전 중심을 텍스트 위치로 이동
				console.log(py1 - lead - gap * 14.5, textPositionY + 5);
				ctx.rotate(Math.PI / -2); // 90도 회전 (라디안 단위로)

				if (text === '') {
					ctx.fillText(((py2 - py1) / scaleCanvas).toFixed(toFix), 0, 0);
				} else {
					ctx.fillText(text, 0, 0);
				}
				ctx.restore();
			}
		}

		// 문자 위치, 문자 각도, 한쪽 리드선만 표시,
		function drawDimLead(px1, py1, radius, angle, toFix, text, pos, scaleCanvas) {
			let lead = 8;
			let b1 = Math.sin(angle * (Math.PI / 180)) * radius;
			let c1 = Math.cos(angle * (Math.PI / 180)) * radius;
			let b11 = Math.cos((90 - angle - 30) * (Math.PI / 180)) * lead;
			let c11 = Math.sqrt(Math.pow(lead, 2) - Math.pow(b11, 2));
			let b111 = Math.cos(angle * (Math.PI / 180)) * lead;
			let c111 = Math.sqrt(Math.pow(lead, 2) - Math.pow(b111, 2));

			ctx.lineWidth = 0.5;
			ctx.strokeStyle = 'blue';
			ctx.setLineDash([]);
			ctx.beginPath();

			switch (pos) {
				case 0:
					ctx.moveTo(px1, py1);
					ctx.lineTo(px1 + b1, py1 - c1);
					ctx.stroke();
					if (angle >= 0) {
						ctx.moveTo(px1 + b1, py1 - c1);
						ctx.lineTo(px1 + b1 - b11, py1 - c1 + c11);
						ctx.lineTo(px1 + b1 - b11 + b111, py1 - c1 + c11 + c111);
					} else {
						ctx.moveTo(px1 + b1, py1 - c1);
						ctx.lineTo(px1 + b1 - b11, py1 - c1 + c11);
						ctx.lineTo(px1 + b1 - b11 + b111, py1 - c1 + c11 - c111);
					}
					ctx.closePath();
					ctx.fillStyle = 'blue';
					ctx.fill();
					ctx.font = '14px Arial';
					ctx.fillStyle = 'blue';
					ctx.textAlign = 'center';
					if (text === '') {
						ctx.fillText('r: ' + (radius / scaleCanvas).toFixed(toFix), px1, py1 + lead * 2);
					} else {
						ctx.fillText(text, px1, py1 + lead * 2);
					}
					break;
				case 1:
					ctx.moveTo(px1, py1);
					ctx.lineTo(px1 + b1, py1 + c1);
					ctx.stroke();
					if (angle >= 0) {
						ctx.moveTo(px1 + b1, py1 + c1);
						ctx.lineTo(px1 + b1 - b11, py1 + c1 - c11);
						ctx.lineTo(px1 + b1 - b11 + b111, py1 + c1 - c11 - c111);
					} else {
						ctx.moveTo(px1 + b1, py1 + c1);
						ctx.lineTo(px1 + b1 - b11, py1 + c1 - c11);
						ctx.lineTo(px1 + b1 - b11 + b111, py1 + c1 - c11 + c111);
					}
					ctx.stroke();
					ctx.closePath();
					ctx.fillStyle = 'blue';
					ctx.fill();
					ctx.font = '14px Arial';
					ctx.fillStyle = 'blue';
					ctx.textAlign = 'center';
					if (text === '') {
						ctx.fillText('r: ' + (radius / scaleCanvas).toFixed(toFix), px1, py1 - lead);
					} else {
						ctx.fillText(text, px1, py1 - lead);
					}
					break;
			}
		}
	}

	return (
		<div>
			<div className='pl-4 py-2'>
				<div className="flex flex-row justify-stretch py-1">
					<div className="w-[480px]">
						<img src='./spool_page.png' alt='drawing of spool section' className='border-slate-600 rounded-lg w-[350px] border' />
					</div>
					<div className="w-[300px] text-slate-500 text-sm ">
						<div className='flex justify-end mb-2'>
							<label>Wire diameter(mm):</label>
							<input className="w-16 text-slate-700 ml-2 text-right border-slate-600 border"
							type='number' name='input1' step='0.01' value={inputValues.input1} onChange={handleChange} />
						</div>
						<div className='flex justify-end my-2'>
							<label>Wire weight (g/M):</label>
							<input className="w-16 text-slate-700 ml-2 text-right border-slate-600 border"
							type='number' name='input2' step='0.1' value={inputValues.input2} onChange={handleChange} />
							{/* <label>Wire weight (g/M):</label>
							<input type='number' name='input2' step='0.1' value={calculatedValue}  /> */}
						</div>
						<div className='flex justify-end my-2'>
							<label>Winding weight (kg):</label>
							<input className="w-16 text-slate-700 ml-2 text-right border-slate-600 border"
							type='number' name='input7' value={inputValues.input7} onChange={handleChange} />
						</div>
						<div className='flex justify-end my-2'>
							<label>Spool Width(mm):</label>
							<input className="w-16 text-slate-700 ml-2 text-right border-slate-600 border"
							type='number' name='input3' value={inputValues.input3} onChange={handleChange} />
						</div>
						<div className='flex justify-end my-2'>
							<label>Flange Thickness(mm):</label>
							<input className="w-16 text-slate-700 ml-2 text-right border-slate-600 border"
							type='number' name='input4' step='0.1' value={inputValues.input4} onChange={handleChange} />
						</div>
						<div className='flex justify-end my-2'>
							<label>Spool Diameter(mm):</label>
							<input className="w-16 text-slate-700 ml-2 text-right border-slate-600 border"
							type='number' name='input5' value={inputValues.input5} onChange={handleChange} />
						</div>
						<div className='flex justify-end my-2'>
							<label>*Needed Dist.(mm):</label>
							<input className="w-16 text-slate-700 ml-2 text-right border-slate-600 border"
							type='number' name='input6' value={inputValues.input6} onChange={handleChange} />
						</div>

						<fieldset className="border-gray-700 border rounded-md flex flex-row justify-left h-14 items-center pb-2 mb-2">
							<legend className="m-2 pl-2 text-slate-500 text-sm ">Select Layer Lap </legend>
							<input className="ml-4 mr-1"
								type='radio'
								id='choice1'
								name='radioGroup'
								value='option1'
								checked={selectedRadio === 'option1'}
								onChange={handleRadioChange}
							/>
							<label htmlFor='choice1' className="">Thinner Flange</label>
							<input className="ml-4 mr-1 " type='radio' id='choice2' name='radioGroup' value='option2' onChange={handleRadioChange} />
							<label htmlFor='choice2'>Thicker Flange</label>
						</fieldset>
						<fieldset className="border-gray-700 border rounded-md flex flex-row justify-left h-14 items-center pb-2">
							<legend className="m-2 pl-2 text-slate-500 text-sm ">Show Details of </legend>
							<input className="ml-4 mr-1"
								type='radio'
								id='detail1'
								name='draft'
								value='option1'
								checked={selDetail === 'option1'}
								onChange={handleRadioChange1}
							/>
							<label htmlFor='detail1' className="mr-2">Spool Flange</label>
							<input className="ml-4 mr-1 " type='radio' id='detail2' name='draft' value='option2' onChange={handleRadioChange1} />
							<label htmlFor='detail2'>Bottom Groove</label>
						</fieldset>
					</div>
				</div>
				{/* <div className='spool_display_container'>
					<p>{inputValues.input1}</p>
					<p>{selectedRadio}</p>
				</div> */}
				<br />
			</div>
			<div className='mt-1 ml-2'>
				<canvas className="bg-slate-100 rounded-xl shadow-lg"  id='spoolCanvas' width='800' height='680'></canvas>
			</div>
		</div>
	);
};

export default InputSpool;
