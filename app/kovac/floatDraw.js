"use client";
import { useEffect, useState } from "react";

const FloatSimulation = () => {
  const [inputValues, setInputValues] = useState({
    input1: 2.195,
    input2: 1.97,
    input3: 30,
    input4: 30,
    input5: 25,
    input6: 25,
    input7: 1.977,
    input8: 1.776,
    input9: 1.97,
    input10: 12,
  });

  const [selectedRadio, setSelectedRadio] = useState("option2");
  const [selectedRadio0, setSelectedRadio0] = useState("option1");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };
  const handleChange0 = (event) => {
    const { name, value } = event.target;
    setInputBlank({
      ...inputBlank,
      [name]: value,
    });
  };

  const handleRadioChange0 = (event) => {
    setSelectedRadio0(event.target.value);
    // console.log('selection', selectedRadio0);
  };

  const handleBlankSize = (event) => {
    setSelectedRadio(event.target.value);
  };

  useEffect(() => {
    // console.log(selectedRadio, inputValues);
    drawProfile();
  }, [inputValues, selectedRadio, selectedRadio0]);

  function drawProfile() {
    let scale, iW, hD;
    let dieH, dieOD;

    // 라디오버튼 블랭크 타입 선택 시 닙 사이즈 및 스케일 설정
    if (selectedRadio0 === "option1") {
      switch (selectedRadio) {
        case "option1":
          scale = 170;
          dieH = 2.5 * scale;
          dieOD = 5.2 * scale;
          iW = (inputValues.input1 / 2) * scale;
          hD = (inputValues.input2 / 2) * scale;
          break;
        case "option2":
          scale = 170;
          dieH = 3.5 * scale;
          dieOD = 5.2 * scale;
          iW = (inputValues.input1 / 2) * scale;
          hD = (inputValues.input2 / 2) * scale;
          break;
        case "option3":
          scale = 140;
          dieH = 3.86 * scale;
          dieOD = 6.8 * scale;
          iW = (inputValues.input1 / 2) * scale;
          hD = (inputValues.input2 / 2) * scale;
          break;
        case "option4":
          scale = 120;
          dieH = 5.3 * scale;
          dieOD = 6.8 * scale;
          iW = (inputValues.input1 / 2) * scale;
          hD = (inputValues.input2 / 2) * scale;
          break;
        case "option5":
          scale = 250;
          dieH = 5.3 * scale;
          dieOD = 6.8 * scale;
          iW = (inputValues.input1 / 2) * scale;
          hD = (inputValues.input2 / 2) * scale;
          break;
      }
    } else {
      scale = 50;
      dieH = inputBlank.input1 * scale;
      dieOD = inputBlank.input2 * scale;
      iW = (inputValues.input1 / 2) * scale;
      hD = (inputValues.input2 / 2) * scale;
    }

    // Define constants used in calculations
    const rAngle = inputValues.input3 / 2;
    const bL = (inputValues.input4 / 100) * hD * 2;
    const brL = (inputValues.input5 / 100) * hD * 2;
    const aL = (inputValues.input5 / 100) * hD * 2;
    const tID = (inputValues.input7 / 2) * scale;
    const PI = Math.PI;
    const BACK_ANGLE = 30; // Convert degrees to radians
    const AP_ANGLE = 40;
    const dieCanvas = document.getElementById("dieCanvas");
    const ctx = dieCanvas.getContext("2d");
    ctx.clearRect(0, 0, dieCanvas.width, dieCanvas.height);

    // Define some coordinate variables
    const X0 = dieCanvas.width / 2;
    const Y0 = dieCanvas.height * 0.9;
    const x1 = X0 - hD - brL * Math.tan((BACK_ANGLE * PI) / 180);
    const x2 = X0 - hD;
    const y1 = Y0 - brL;
    const y2 = Y0 - (brL + bL);
    const x3 =
      X0 - hD - Math.tan((rAngle * PI) / 180) * (dieH - (bL + brL + aL));
    const y3 = Y0 - (dieH - aL);
    const x4 = x3 - aL * Math.tan((AP_ANGLE * PI) / 180);
    const y4 = Y0 - dieH;
    const x5 = X0 - dieOD / 2;

    const x11 = X0 + hD + brL * Math.tan((BACK_ANGLE * PI) / 180);
    const x12 = X0 + hD;
    const x13 =
      X0 + hD + Math.tan((rAngle * PI) / 180) * (dieH - (bL + brL + aL));
    const x14 = x13 + aL * Math.tan((AP_ANGLE * PI) / 180);
    const x15 = X0 + dieOD / 2;

    // Draw the outline of the die
    // Set line width and color
    ctx.lineWidth = 0.6;
    ctx.strokeStyle = "#000000";
    ctx.fillStyle = "hsl(0, 0%, 98%)";
    ctx.setLineDash([]);
    ctx.fillStyle = "hsl(0, 0%, 98%)";
    // ctx.fillRect(x5, y4, dieOD, dieH);
    // ctx.strokeRect(x5, y4, dieOD, dieH);
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x1, Y0);
    ctx.lineTo(x2, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.lineTo(x4, y4);
    ctx.lineTo(x5, y4);
    ctx.lineTo(x5, Y0);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(x11, Y0);
    ctx.lineTo(x12, y1);
    ctx.lineTo(x12, y2);
    ctx.lineTo(x13, y3);
    ctx.lineTo(x14, y4);
    ctx.lineTo(x15, y4);
    ctx.lineTo(x15, Y0);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    // Draw divide line for nomenclature
    ctx.lineWidth = 0.6;
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(x2 - 10, y1);
    ctx.lineTo(x5 + 10, y1);
    ctx.moveTo(x2 - 10, y2);
    ctx.lineTo(x5 + 10, y2);
    ctx.moveTo(x3 - 10, y3);
    ctx.lineTo(x5 + 10, y3);
    ctx.stroke();

    // Draw Center line
    ctx.strokeStyle = "red";
    ctx.lineWidth = 0.6;
    ctx.setLineDash([5, 3]);
    ctx.beginPath();
    ctx.moveTo(X0, dieCanvas.height * 0.04);
    ctx.lineTo(X0, dieCanvas.height * 0.96);
    ctx.stroke();

    // Draw PLUG
    let x21, x22, x23, x24, y11, y12, y13, y14, y15, y16;
    const wT = iW - tID;
    const p1 = (inputValues.input8 / 2) * scale;
    const p2 = (inputValues.input9 / 2) * scale;
    const pa = inputValues.input10;
    let meet_X, meet_Y;
    x21 = p1; //플러그 치수 B
    x22 = p1 - 0.15 * scale; // 플러그 B 앞 모따기
    x23 = p2; // 플러그 치수 A
    // 플러그 후면 모따기 위치 (15도에 1mm)
    x24 = p2 - Math.tan((15 * PI) / 180) * (1.0 * scale);
    // 플러그 안착 지점 y축
    y11 = y2 - Math.tan(((pa / 2) * PI) / 180) * (hD - p1);
    // 플러그 B에서 A 만나는 점 y
    y14 = y11 - (p2 - p1) / Math.tan((pa * PI) / 180);
    // 플러그 치수 C - 도면 참조
    y13 = y11 + 1.5 * scale;
    y12 = y13 - 0.15 * scale; // 플러그 모따기 후 y
    y16 = y13 - 5.5 * scale; // 플러그 전체 길이
    y15 = y16 + 0.3 * scale; // 플러그 후면 모따기 높이

    ctx.beginPath();
    ctx.lineWidth = 0.6;
    ctx.strokeStyle = "gray";
    ctx.setLineDash([]);
    ctx.fillStyle = "rgba(43, 147, 233, 0.22)";

    ctx.moveTo(X0, y13);
    ctx.lineTo(X0 - x22, y13);
    ctx.lineTo(X0 - x21, y12);
    ctx.lineTo(X0 - x21, y11);
    ctx.lineTo(X0 - x23, y14);
    ctx.lineTo(X0 - x23, y15);
    ctx.lineTo(X0 - x24, y16);
    ctx.lineTo(X0, y16);
    ctx.lineTo(X0 + x24, y16);
    ctx.lineTo(X0 + x23, y15);
    ctx.lineTo(X0 + x23, y14);
    ctx.lineTo(X0 + x21, y11);
    ctx.lineTo(X0 + x21, y12);
    ctx.lineTo(X0 + x22, y13);
    ctx.lineTo(X0, y13);
    ctx.stroke();
    ctx.fill();

    //---------------------------------------------
    // Draw Wire - 외경
    let contactX = iW - hD;
    let contactX1 = X0 - iW;
    let contactX11 = X0 + iW;
    let contactY = contactX / Math.tan((rAngle * PI) / 180);
    let contactY1 = Y0 - (contactY + bL + brL);

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "blue";
    ctx.setLineDash([]);
    ctx.fillStyle = "rgba(43, 147, 233, 0.12)";

    ctx.moveTo(contactX1, dieCanvas.height * 0.03);
    ctx.lineTo(contactX1, contactY1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x2, dieCanvas.height * 0.98);
    ctx.stroke();

    ctx.moveTo(x12, dieCanvas.height * 0.98);
    ctx.lineTo(x12, y2);
    ctx.lineTo(contactX11, contactY1);
    ctx.lineTo(contactX11, dieCanvas.height * 0.03);
    ctx.stroke();
    //-----------------------------------------------------------------
    // 내경
    const idY = Math.tan(((rAngle / 2) * PI) / 180) * (iW - tID);
    const x111 = contactX1 + wT;
    const y111 = contactY1 - idY;
    const x222 = contactX11 - wT;

    // 튜브 내면이 꺽이는 점 (x111, y111), 기울기 tan(90 + rAngle)
    // 플러그 꺽이는 점 (x21, Y0-y11)
    const plugAngle = inputValues.input10 + 90;
    const m2 = Math.tan(((rAngle + 90) * PI) / 180);
    let m1;
    if (plugAngle % 180 === 90) {
      m1 = null; // 무한 기울기 (수직선)
    } else {
      m1 = Math.tan((plugAngle * Math.PI) / 180);
    }
    
    // const m1 = Math.tan((plugAngle * PI) / 180);
    let a1, a2, b1, b2;
    a2 = -(X0 - x111);
    b2 = Y0 - y111;
    a1 = -(X0 - (X0 - x21));
    b1 = Y0 - y11;
    const meet_x = (m1 * a1 - b1 - m2 * a2 + b2) / (m1 - m2);
    const meet_y = m1 * meet_x - m1 * a1 + b1;

    ctx.beginPath();
    ctx.lineWidth = 0.8;
    ctx.strokeStyle = "blue";

    // 좌측 내면
    ctx.moveTo(x111, dieCanvas.height * 0.03);
    ctx.lineTo(x111, y111);
    // 조건문으로 meet_x가 x21 범위를 벗어났을 때 메시지 표시 및 그리기 Bypass하도록...

    if (meet_y > b1 && meet_y < Y0-y14 && meet_x > a2 && meet_x < a1){
      let plugContact = ((meet_y - b1) / (Y0-y14 - b1))*100

      ctx.lineTo(X0 + meet_x, Y0 - meet_y);
      ctx.lineTo(X0 - x21, y11);
      ctx.lineTo(X0 - x21, dieCanvas.height * 0.98);
      ctx.stroke();

      ctx.beginPath();
      ctx.lineWidth = 0.15;
      ctx.setLineDash([5, 2]);
      ctx.strokeStyle = "red";
      ctx.moveTo(X0 + meet_x + 5, Y0 - meet_y);
      ctx.lineTo(X0 + meet_x + 45, Y0 - meet_y);
      ctx.stroke();
      ctx.font = "11px Arial";
      ctx.fillStyle = "red";
      ctx.textAlign = "left";
      ctx.fillText(
        `내면 컨택트 포인트: ${plugContact.toFixed(1)}%`,
        X0 + meet_x + 55, Y0 - meet_y
      );
    } else {
      ctx.lineTo(X0 - x21, y11);
      ctx.lineTo(X0 - x21, dieCanvas.height * 0.98);
      ctx.stroke();
    }

    // 우측 내면

    ctx.lineWidth = 0.8;
    ctx.setLineDash([]);
    ctx.strokeStyle = "blue";
    ctx.moveTo(x222, dieCanvas.height * 0.03);
    ctx.lineTo(x222, y111);
    // 조건문으로 meet_x가 x21 범위를 벗어났을 때 메시지 표시 및 그리기 Bypass하도록...

    if (meet_y > b1 && meet_y < Y0-y14 && meet_x > a2 && meet_x < a1){
      ctx.lineTo(X0 - meet_x, Y0 - meet_y);
      ctx.lineTo(X0 + x21, y11);
      ctx.lineTo(X0 + x21, dieCanvas.height * 0.98);
      ctx.stroke();
    } else {
      ctx.lineTo(X0 + x21, y11);
      ctx.lineTo(X0 + x21, dieCanvas.height * 0.98);
      ctx.stroke();
    } 
    console.log(
      `a1: ${a1}, b1: ${b1}, a2: ${a2}, b2: ${b2}, _x: ${meet_x}, _y${meet_y}`
    );
    //-----------------------------------------------------------------

    let contactPoint = -(contactY / (y3 - y2)) * 100;
    

    //Write contact point Text
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 3]);
    ctx.moveTo(contactX11, contactY1);
    ctx.lineTo(contactX11 + 25, contactY1);
    ctx.stroke();
    ctx.font = "11px Arial";
    ctx.fillStyle = "red";
    ctx.textAlign = "left";
    ctx.fillText(
      `Die Contact: ${contactPoint.toFixed(1)}%`,
      contactX11 + 30,
      contactY1
    );
    
    let inArea, outArea

    inArea = (iW * iW * PI) - (tID * tID * PI);
    outArea = (hD * hD * PI)-(p1 * p1 * PI);
    const rRate = ((inArea - outArea) / inArea) * 100; 
    const eRate = ((inArea / outArea) -1 ) * 100
    const gapTB = (tID - p2) / scale;

    // const rRate = (d1, d2) => (1 - Math.pow(d2, 2) / Math.pow(d1, 2)) * 100;
    // const eRate = (d1, d2) => (Math.pow(d1, 2) / Math.pow(d2, 2) - 1) * 100;
    

    //Write contact point Text
    ctx.font = "14px Arial";
    ctx.fillStyle = "black";
    ctx.textAlign = "left";
    ctx.fillText(`감면율: ${rRate.toFixed(2)}%`, 800, 20);
    ctx.fillText(`연신율: ${eRate.toFixed(2)}%`, 800, 40);
    ctx.fillText(`내경 vs. 플러그 Gap: ${gapTB.toFixed(3)}mm`, 800, 60);
    

    ctx.fillText(`Back Length (⍺:60°)`, x5 + 10, Y0 - (Y0 - y1) / 2 + 3);
    ctx.fillText(`Bearing Length`, x5 + 10, y1 - (y1 - y2) / 2 + 3);
    ctx.fillText(`Reduction Length`, x5 + 10, y2 - (y2 - y3) / 2 + 3);
    ctx.fillText(`Approach(80°)`, x5 + 10, y3 - (y3 - y4) / 2 + 3);

    // console.log(rRate(iW, hD).toFixed(1));
    // console.log(eRate(iW, hD).toFixed(1));
    // console.log(deltaF(rRate(iW, hD), rAngle).toFixed(2));

    // 컨택트 포인트와 델타변수에 의한 다이스 내부 색상 변화 (Good, not good, Bad)
    // 감면율, 연신율, 델타변수 캔버스 우측 상단에 텍스트로 표시
    // 다이스의 구간 표시 및 치수?
    drawDimVer(x15, y4, x15, Y0, dieH * -0.07, 0, 6, 0);
    function drawDimVer(dx1, dy1, dx2, dy2, l0, g0, l1, pos) {
      // x값이 큰쪽을 먼저 지정
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = "blue";
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
          console.log("small");
          ctx.beginPath();
          ctx.moveTo(dx1 + l0, dy1 - 3 * l1);
          ctx.lineTo(dx1 + l0, dy2 + 3 * l1);
          ctx.stroke();

          ctx.moveTo(dx1 + l0, dy1);
          ctx.lineTo(dx1 + l0 - l1 / 2, dy1 - l1);
          ctx.lineTo(dx1 + l0 + l1 / 2, dy1 - l1);
          ctx.closePath();
          ctx.fillStyle = "blue";
          ctx.fill();
          ctx.moveTo(dx1 + l0, dy2);
          ctx.lineTo(dx1 + l0 - l1 / 2, dy2 + l1);
          ctx.lineTo(dx1 + l0 + l1 / 2, dy2 + l1);
          ctx.closePath();
          ctx.fillStyle = "blue";
          ctx.fill();
        } else {
          console.log("big");
          ctx.moveTo(dx1 + l0, dy1);
          ctx.lineTo(dx1 + l0, dy2);
          ctx.stroke();
          ctx.moveTo(dx1 + l0, dy1);
          ctx.lineTo(dx1 + l0 - l1 / 2, dy1 + l1);
          ctx.lineTo(dx1 + l0 + l1 / 2, dy1 + l1);
          ctx.closePath();
          ctx.fillStyle = "blue";
          ctx.fill();
          ctx.moveTo(dx1 + l0, dy2);
          ctx.lineTo(dx1 + l0 - l1 / 2, dy2 - l1);
          ctx.lineTo(dx1 + l0 + l1 / 2, dy2 - l1);
          ctx.closePath();
          ctx.fillStyle = "blue";
          ctx.fill();
        }
        ctx.font = "12px Arial";
        ctx.fillStyle = "blue";
        // ctx.textAlign = 'center';
        ctx.save(); // 현재 상태 저장
        ctx.translate(dx1 + l0 - g0 / 2, (dy2 - dy1) / 2 + dy1); // 회전 중심을 텍스트 위치로 이동
        ctx.rotate(Math.PI / -2); // 90도 회전 (라디안 단위로)
        ctx.textAlign = "center";
        ctx.fillText(((dy2 - dy1) / scale).toFixed(2), 0, 0);
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
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.moveTo(dx1 - l0, dy2);
        ctx.lineTo(dx1 - l0 - l1 / 2, dy2 - l1);
        ctx.lineTo(dx1 - l0 + l1 / 2, dy2 - l1);
        ctx.closePath();
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.font = "14px Arial";
        ctx.fillStyle = "blue";
        ctx.save(); // 현재 상태 저장
        ctx.translate(dx1 - l0 - g0 / 2, (dy2 - dy1) / 2 + dy1); // 회전 중심을 텍스트 위치로 이동
        ctx.rotate(Math.PI / -2); // 90도 회전 (라디안 단위로)
        ctx.textAlign = "center";
        ctx.fillText(((dy2 - dy1) / scale).toFixed(3), 0, 0);
        ctx.restore();
      }
    }
  }

  return (
    <div>
      <div className="w-[1000px]">
        <div className="flex flex-row items-center">
          <div>
            <h3 className="px-4 text-2xl text-slate-600 font-bold py-2">
              Simulate Floating Plug Drawing
            </h3>
          </div>
          
        </div>

        <div className="pl-4 py-2">
          <div className="flex flex-row justify-stretch py-1">
            <div className="w-52">
              <label className="text-slate-500 text-sm mr-2.5">
                튜브 외경(mm) :
              </label>
              <input
                className="w-16 border-gray-700 border text-center text-sm text-slate-600"
                type="number"
                name="input1"
                step="0.001"
                value={inputValues.input1}
                onChange={handleChange}
              />
            </div>
            <div className="w-52">
              <label className="text-slate-500 text-sm mr-2.5">
                튜브 내경(mm) :
              </label>
              <input
                className="w-16 border-gray-700 border text-center text-sm text-slate-600"
                type="number"
                name="input7"
                step="0.001"
                value={inputValues.input7}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex flex-row justify-stretch py-1">
            <div className="w-52">
              <label className="text-slate-500 text-sm mr-3">
                다이스 경(mm):
              </label>
              <input
                className="w-16 border-gray-700 border text-center text-sm text-slate-600"
                type="number"
                name="input2"
                step="0.001"
                value={inputValues.input2}
                onChange={handleChange}
              />
            </div>
            <div className="w-52">
              <label className="text-slate-500 text-sm mr-4">
                리덕션 각도(°) :
              </label>
              <input
                className="w-16 border-gray-700 border text-center text-sm text-slate-600"
                type="number"
                name="input3"
                step="0.5"
                value={inputValues.input3}
                onChange={handleChange}
              />
            </div>
            <div className="w-52">
              <label className="text-slate-500 text-sm mr-2.5">
                베아링 길이(%):
              </label>
              <input
                className="w-16 border-gray-700 border text-center text-sm text-slate-600"
                type="number"
                name="input4"
                value={inputValues.input4}
                onChange={handleChange}
              />
            </div>
            <div className="w-52">
              <label className="text-slate-500 text-sm mr-2.5">
                백 & 어프로치 비율(%):
              </label>
              <input
                className="w-16 border-gray-700 border text-center text-sm text-slate-600"
                type="number"
                name="input5"
                value={inputValues.input5}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex flex-row justify-stretch py-1">
            <div className="w-100">
              <label className="text-slate-500 text-sm mr-2.5">
                플러그 치수(mm) :
              </label>
              <input
                className="w-16 border-gray-700 border text-center text-sm text-slate-600"
                type="number"
                name="input8"
                step="0.001"
                value={inputValues.input8}
                onChange={handleChange}
              />
              <label className="text-slate-500 text-sm mr-2.5 ml-2.5">x</label>
              <input
                className="w-16 border-gray-700 border text-center text-sm text-slate-600"
                type="number"
                name="input9"
                step="0.001"
                value={inputValues.input9}
                onChange={handleChange}
              />
            </div>
            <div className="w-100">
              <label className="text-slate-500 text-sm mr-2.5 ml-10">
                플러그 각도(°) :
              </label>
              <input
                className="w-16 border-gray-700 border text-center text-sm text-slate-600"
                type="number"
                name="input10"
                step="0.5"
                value={inputValues.input10}
                onChange={handleChange}
              />
            </div>
          </div>
          <p className="mt-2 text-sm text-slate-600"> note: 플러그 각도 조절 후, 표시가 제대로 되지 않으면 리프레쉬 버튼을 눌러주세요. 프로그램 연산 오류 !!!</p>
        </div>

          <div className=" pl-4 ml-4 mt-2 mb-4 py-4 " id="radio">
            <fieldset className="w-[1000px] border-gray-900 border flex flex-row justify-left h-14 items-center pb-2 rounded-md">
              <legend className="mx-2 px-2 ">다이스 타입 선택 및 확대</legend>
              <input
                className="ml-2 mr-1"
                type="radio"
                id="choice1"
                name="radioGroup"
                value="option1"
                checked={selectedRadio === "option1"}
                onChange={handleBlankSize}
              />
              <label htmlFor="choice1" className="ml-1 mr-8 text-sm">
                D15 (ø5.2 - 2.5)
              </label>
              <input
                className="ml-2 mr-1 "
                type="radio"
                id="choice2"
                name="radioGroup"
                value="option2"
                checked={selectedRadio === "option2"}
                onChange={handleBlankSize}
              />
              <label htmlFor="choice2" className="ml-1 mr-8 text-sm">
                D18 (ø5.2 - 3.5)
              </label>
              <input
                className="ml-2 mr-1 "
                type="radio"
                id="choice3"
                name="radioGroup"
                value="option3"
                checked={selectedRadio === "option3"}
                onChange={handleBlankSize}
              />
              <label htmlFor="choice3" className="ml-1 mr-8 text-sm">
                D21 (ø6.8 - 3.86)
              </label>
              <input
                className="ml-2 mr-1 "
                type="radio"
                id="choice4"
                name="radioGroup"
                value="option4"
                checked={selectedRadio === "option4"}
                onChange={handleBlankSize}
              />
              <label htmlFor="choice4" className="ml-1 mr-8 text-sm">
                D24 (ø6.8 - 5.3)
              </label>
              <input
                className="ml-2 mr-1 "
                type="radio"
                id="choice5"
                name="radioGroup"
                value="option5"
                checked={selectedRadio === "option5"}
                onChange={handleBlankSize}
              />
              <label htmlFor="choice5" className="ml-1 mr-4 text-sm">
                확대 점검
              </label>
            </fieldset>
          </div>
        
      </div>
      <div className="m-2 p-1">
        <canvas
          className="bg-slate-100 rounded-xl shadow-lg"
          id="dieCanvas"
          width="1000"
          height="800"
        ></canvas>
      </div>
    </div>
  );
};

export default FloatSimulation;
