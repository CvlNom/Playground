"use client";
import { useEffect, useState } from "react";

const Inputs = () => {
  const [inputValues, setInputValues] = useState({
    input1: "2.2",
    input2: "2.0",
    input3: "14",
    input4: "30",
    input5: "25",
    input6: "25",
  });
  const [inputBlank, setInputBlank] = useState({
    input1: "5.8",
    input2: "8.0",
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
  }, [inputValues, selectedRadio, selectedRadio0, inputBlank]);

  function drawProfile() {
    let scale, iW, hD;
    let dieH, dieOD;

    // 선택된 값에 따라 콘솔에 문자 출력
    if (selectedRadio0 === "option1") {
      switch (selectedRadio) {
        case "option1":
          scale = 80;
          dieH = 2.5 * scale;
          dieOD = 5.2 * scale;
          iW = (inputValues.input1 / 2) * scale;
          hD = (inputValues.input2 / 2) * scale;
          break;
        case "option2":
          scale = 80;
          dieH = 3.5 * scale;
          dieOD = 5.2 * scale;
          iW = (inputValues.input1 / 2) * scale;
          hD = (inputValues.input2 / 2) * scale;
          break;
        case "option3":
          scale = 60;
          dieH = 3.86 * scale;
          dieOD = 6.8 * scale;
          iW = (inputValues.input1 / 2) * scale;
          hD = (inputValues.input2 / 2) * scale;
          break;
        case "option4":
          scale = 60;
          dieH = 5.3 * scale;
          dieOD = 6.8 * scale;
          iW = (inputValues.input1 / 2) * scale;
          hD = (inputValues.input2 / 2) * scale;
          break;
        case "option5":
          scale = 40;
          dieH = 8.7 * scale;
          dieOD = 12.5 * scale;
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

    // const iW = (inputValues.input1 / 2) * scale;
    // const hD = (inputValues.input2 / 2) * scale;
    const rAngle = inputValues.input3 / 2;
    const bL = (inputValues.input4 / 100) * hD * 2;
    const brL = (inputValues.input5 / 100) * hD * 2;
    const aL = (inputValues.input6 / 100) * hD * 2;

    // Define constants used in calculations
    const PI = Math.PI;
    const BACK_ANGLE = 30; // Convert degrees to radians
    const AP_ANGLE = 40;
    const dieCanvas = document.getElementById("dieCanvas");
    const ctx = dieCanvas.getContext("2d");

    // console.log(selectedRadio0);

    // console.log('dieH', dieH);

    // Clear the canvas
    ctx.clearRect(0, 0, dieCanvas.width, dieCanvas.height);

    // Define some helper variables
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

    // Set line width and color
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#000000";
    ctx.fillStyle = "hsl(0, 0%, 98%)";
    ctx.setLineDash([]);

    // Draw the outline of the die
    ctx.fillStyle = "hsl(0, 0%, 98%)";
    ctx.fillRect(x5, y4, dieOD, dieH);
    ctx.strokeRect(x5, y4, dieOD, dieH);

    ctx.lineWidth = 4;
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

    // Draw line for each area
    ctx.lineWidth = 0.25;
    ctx.strokeStyle = "grey";
    ctx.beginPath();
    ctx.moveTo(x1, Y0);
    ctx.lineTo(x11, Y0);
    ctx.moveTo(x2, y1);
    ctx.lineTo(x12, y1);
    ctx.moveTo(x2, y2);
    ctx.lineTo(x12, y2);
    ctx.moveTo(x3, y3);
    ctx.lineTo(x13, y3);
    ctx.moveTo(x4, y4);
    ctx.lineTo(x14, y4);
    ctx.stroke();

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
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 3]);
    ctx.beginPath();
    ctx.moveTo(X0, dieCanvas.height * 0.04);
    ctx.lineTo(X0, dieCanvas.height * 0.96);
    ctx.stroke();

    // Draw Wire
    let contactX = iW - hD;
    let contactX1 = X0 - iW;
    let contactX11 = X0 + iW;
    let contactY = contactX / Math.tan((rAngle * PI) / 180);
    let contactY1 = Y0 - (contactY + bL + brL);

    ctx.beginPath();
    ctx.lineWidth = 0.4;
    ctx.strokeStyle = "blue";
    ctx.setLineDash([]);
    ctx.fillStyle = "rgba(43, 147, 233, 0.12)";

    ctx.moveTo(contactX1, dieCanvas.height * 0.05);
    ctx.lineTo(contactX1, contactY1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x2, dieCanvas.height * 0.95);
    ctx.lineTo(x12, dieCanvas.height * 0.95);
    ctx.lineTo(x12, y2);
    ctx.lineTo(contactX11, contactY1);
    ctx.lineTo(contactX11, dieCanvas.height * 0.05);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    let contactPoint = -(contactY / (y3 - y2)) * 100;
    // console.log(`${contactPoint}, ${contactX1} ${contactX11}, ${contactY}, ${contactY1}`)

    //Write contact point Text
    ctx.setLineDash([5, 3]);
    ctx.moveTo(contactX11, contactY1);
    ctx.lineTo(contactX11 + 15, contactY1);
    ctx.stroke();
    ctx.font = "11px Arial";
    ctx.fillStyle = "red";
    ctx.textAlign = "left";
    ctx.fillText(
      `Contact Point: ${contactPoint.toFixed(1)}%`,
      contactX11 + 10,
      contactY1
    );

    const rRate = (d1, d2) => (1 - Math.pow(d2, 2) / Math.pow(d1, 2)) * 100;
    const eRate = (d1, d2) => (Math.pow(d1, 2) / Math.pow(d2, 2) - 1) * 100;
    const deltaF = (R, ang) => {
      let fX0 = 1 / (R / 100);
      let fX1 = 1 + Math.sqrt(1 - R / 100);
      let fX2 = Math.sin(ang * (PI / 180));
      return fX0 * Math.pow(fX1, 2) * fX2;
    };

    //Write contact point Text

    ctx.font = "11px Arial";
    ctx.fillStyle = "black";
    ctx.textAlign = "left";
    ctx.fillText(`Reduction Rate: ${rRate(iW, hD).toFixed(1)}%`, 500, 50);
    ctx.fillText(`Elongation Rate: ${eRate(iW, hD).toFixed(1)}%`, 500, 65);
    ctx.fillText(
      `Delta Factor: ${deltaF(rRate(iW, hD), rAngle).toFixed(2)}`,
      500,
      80
    );

    ctx.fillText(`Back Length (⍺:60°)`, x5 + 1, Y0 - (Y0 - y1) / 2 + 3);
    ctx.fillText(`Bearing Length`, x5 + 1, y1 - (y1 - y2) / 2 + 3);
    ctx.fillText(`Reduction Length`, x5 + 1, y2 - (y2 - y3) / 2 + 3);
    ctx.fillText(`Approach L (⍺:80°)`, x5 + 1, y3 - (y3 - y4) / 2 + 3);

    // console.log(rRate(iW, hD).toFixed(1));
    // console.log(eRate(iW, hD).toFixed(1));
    // console.log(deltaF(rRate(iW, hD), rAngle).toFixed(2));

    // 컨택트 포인트와 델타변수에 의한 다이스 내부 색상 변화 (Good, not good, Bad)
    // 감면율, 연신율, 델타변수 캔버스 우측 상단에 텍스트로 표시
    // 다이스의 구간 표시 및 치수?
    drawDimVer(x15, y4, x15, Y0, dieH*0.15, 10, 6, 0)
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
				ctx.font = '12px Arial';
				ctx.fillStyle = 'blue';
				// ctx.textAlign = 'center';
				ctx.save(); // 현재 상태 저장
				ctx.translate(dx1 + l0 - g0 / 2, (dy2 - dy1) / 2 + dy1); // 회전 중심을 텍스트 위치로 이동
				ctx.rotate(Math.PI / -2); // 90도 회전 (라디안 단위로)
				ctx.textAlign = 'center';
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
				ctx.fillText(((dy2 - dy1) / scale).toFixed(3), 0, 0);
				ctx.restore();
			}
		}
  }

  return (
    <div>
      <div className="w-[700px]">
        <div className="flex flex-row items-center">
          <div>
            <h3 className="px-4 text-2xl text-slate-600 font-bold py-4">
              Design PCD profile By
            </h3>
          </div>
          <div className="pl-2 pt-1 w-96 text-slate-600 font-semibold" id="radioChoice">
          
            <input
              className="ml-4 mr-1 "
              type="radio"
              id="selection1"
              name="radioGroup2"
              value="option1"
              checked={selectedRadio0 === "option1"}
              onChange={handleRadioChange0}
            />
            <label htmlFor="selection1" className="text-blue-500 ml-1 mr-8 text-lg">
              Blank Type
            </label>
            <input
              className="ml-4 mr-1 "
              type="radio"
              id="selection2"
              name="radioGroup2"
              value="option2"
              checked={selectedRadio0 === "option2"}
              onChange={handleRadioChange0}
            />
            <label htmlFor="selection2" className="text-blue-500 ml-1 mr-8 text-lg">
              User Input
            </label>
            <br />
          
        </div>
        </div>

        <div className="pl-4 py-2">
          <div className="flex flex-row justify-stretch py-1">
            <div className="w-52">
              <label className="text-slate-500 text-sm mr-2.5">
                In Wire (mm) :
              </label>
              <input
                className="w-16 border-gray-700 border text-center text-sm text-slate-600"
                type="number"
                name="input1"
                step="0.01"
                value={inputValues.input1}
                onChange={handleChange}
              />
            </div>
            <div className="w-52">
              <label className="text-slate-500 text-sm mr-2.5">
                Hole Size :
              </label>
              <input
                className="w-16 border-gray-700 border text-center text-sm text-slate-600"
                type="number"
                name="input2"
                step="0.01"
                value={inputValues.input2}
                onChange={handleChange}
              />
            </div>
            <div className="w-52">
              <label className="text-slate-500 text-sm mr-2.5">
                Draw Angle (°) :
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
          </div>

          <div className="flex flex-row justify-stretch py-1">
            <div className="w-52">
              <label className="text-slate-500 text-sm mr-2.5">
                Bearing L (%):
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
                Back L(%):
              </label>
              <input
                className="w-16 border-gray-700 border text-center text-sm text-slate-600"
                type="number"
                name="input5"
                value={inputValues.input5}
                onChange={handleChange}
              />
            </div>
            <div className="w-52">
              <label className="text-slate-500 text-sm mr-2.5">
                Approach L(%) :
              </label>
              <input
                className="w-16 border-gray-700 border text-center text-sm text-slate-600"
                type="number"
                name="input6"
                value={inputValues.input6}
                onChange={handleChange}
              />
            </div>
          </div>
          {/* <p> note: L of Bearing, Back and Approach are a length ratio of hole diameter.</p> */}
        </div>

        {/* <hr className="border-1 border-gray-400"/> */}

        {selectedRadio0 === "option2" ? (
          <div className="pl-4 pt-2 pb-2 w-[400px]">
            <fieldset className="border-gray-700 border flex flex-row justify-center h-14 items-center pb-2 rounded-md">
              <legend className="mx-2 px-2 ">User Input</legend>
              {/* <div className="flex flex-row justify-stretch"> */}
                <div className="w-52">
                  <label className="text-slate-500 text-sm mr-2.5">
                    Height(mm):
                  </label>
                  <input
                    className="w-16 border-gray-700 border text-center text-sm text-slate-600"
                    type="number"
                    name="input1"
                    step="0.1"
                    value={inputBlank.input1}
                    onChange={handleChange0}
                  />
                </div>
                <div className="w-50">
                  <label className="text-slate-500 text-sm mr-2.5">
                    Diameter(mm):
                  </label>
                  <input
                    className="w-16 border-gray-700 border text-center text-sm text-slate-600"
                    type="number"
                    name="input2"
                    step="0.1"
                    value={inputBlank.input2}
                    onChange={handleChange0}
                  />
                </div>
              {/* </div> */}
            </fieldset>
          </div>
        ) : (
          <div className="pl-4 ml-4 mt-2 mb-4 py-4 " id="radio">
            <fieldset className="border-gray-700 border flex flex-row justify-left h-14 items-center pb-2 rounded-md">
              <legend className="mx-2 px-2 ">Blank Type</legend>
              <input
                className="ml-2 mr-1 "
                type="radio"
                id="choice1"
                name="radioGroup"
                value="option1"
                checked={selectedRadio === "option1"}
                onChange={handleBlankSize}
              />
              <label htmlFor="choice1" className="ml-1 mr-2 text-sm">
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
              <label htmlFor="choice2" className="ml-1 mr-2 text-sm">
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
              <label htmlFor="choice3" className="ml-1 mr-2 text-sm">
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
              <label htmlFor="choice4" className="ml-1 mr-2 text-sm">
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
                D27 (ø12.5 - 8.7)
              </label>
            </fieldset>
          </div>
        )}
      </div>
      <div className="m-2 p-1">
        <canvas
          className="bg-slate-100 rounded-xl shadow-lg"
          id="dieCanvas"
          width="650"
          height="600"
        ></canvas>
      </div>
    </div>
  );
};

export default Inputs;
