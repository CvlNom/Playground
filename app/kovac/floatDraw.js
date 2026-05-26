"use client";
import { useEffect, useState } from "react";

const FloatSimulation = () => {
  const [inputValues, setInputValues] = useState({
    input1: 2.62,
    input2: 2.195,
    input3: 28,
    input4: 30,
    input5: 25,
    input6: 25,
    input7: 2.38,
    input8: 1.987,
    input9: 2.2,
    input10: 12.0,
    input21: 5.2,
    input22: 3.5,
    input23: 170,
    input24: 0,
    input25: 0,
  });

  const [selectedRadio, setSelectedRadio] = useState("option2");
  const [selectedRadio0, setSelectedRadio0] = useState("option1");

  const handleChange = (event) => {
    const { name, value } = event.target;
    let numValue = parseFloat(value);

    // 특정 입력 필드(input10)에 대해서만 범위 제한
    if (name === "input10") {
      if (numValue < 11.5) numValue = 11.5;
      if (numValue > 12.0) numValue = 12.0;
    }
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
    // 변수 셋팅
    let scale, tube_OR, die_hR, dieB_H, dieB_OD, X0, Y0 // Origin Coordinate
    scale = inputValues.input23;
    dieB_H = inputValues.input22 * scale;
    dieB_OD = inputValues.input21 * scale;
    tube_OR = (inputValues.input1 / 2) * scale;
    die_hR = (inputValues.input2 / 2) * scale;
    
    // Define constants used in calculations
    const red_Angle = inputValues.input3 / 2;
    const bearing_L = (inputValues.input4 / 100) * die_hR * 2;
    const backRelief_L = (inputValues.input5 / 100) * die_hR * 2;
    const approach_L = (inputValues.input5 / 100) * die_hR * 2;
    const tube_IR = (inputValues.input7 / 2) * scale;
    const PI = Math.PI;
    const back_ANGLE = 30; // Convert degrees to radians
    const approach_ANGLE = 40;
    const dieCanvas = document.getElementById("dieCanvas");
    const ctx = dieCanvas.getContext("2d");
    ctx.clearRect(0, 0, dieCanvas.width, dieCanvas.height);
    X0 = (dieCanvas.width /2) + (inputValues.input24 * scale);
    Y0 = (dieCanvas.height * 0.9) - (inputValues.input25 * scale);
    const x1 = die_hR + backRelief_L * Math.tan((back_ANGLE * PI) / 180);
    const x2 = die_hR;
    const y1 = Y0 - backRelief_L;
    const y2 = Y0 - (backRelief_L + bearing_L);
    const x3 =
      die_hR + Math.tan((red_Angle * PI) / 180) * (dieB_H - (bearing_L + backRelief_L + approach_L));
    const y3 = Y0 - (dieB_H - approach_L);
    const x4 = x3 + approach_L * Math.tan((approach_ANGLE * PI) / 180);
    const y4 = Y0 - dieB_H;
    const x5 = dieB_OD / 2;
    
    // Draw the outline of the die
    ctx.strokeStyle = "#000000";
    ctx.fillStyle = "hsl(0, 0%, 80%)";
    ctx.setLineDash([]);
    ctx.lineWidth = 2.0;
    ctx.beginPath();
    ctx.moveTo(X0-x1, Y0);
    ctx.lineTo(X0-x2, y1);
    ctx.lineTo(X0-x2, y2);
    ctx.lineTo(X0-x3, y3);
    ctx.lineTo(X0-x4, y4);
    ctx.lineTo(X0-x5, y4);
    ctx.lineTo(X0-x5, Y0);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();    
    ctx.beginPath();
    ctx.moveTo(X0+x1, Y0);
    ctx.lineTo(X0+x2, y1);
    ctx.lineTo(X0+x2, y2);
    ctx.lineTo(X0+x3, y3);
    ctx.lineTo(X0+x4, y4);
    ctx.lineTo(X0+x5, y4);
    ctx.lineTo(X0+x5, Y0);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    // Draw divide line for nomenclature
    ctx.lineWidth = 0.6;
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(X0-x2 - 10, y1);
    ctx.lineTo(X0-x5 + 10, y1);
    ctx.moveTo(X0-x2 - 10, y2);
    ctx.lineTo(X0-x5 + 10, y2);
    ctx.moveTo(X0-x3 - 10, y3);
    ctx.lineTo(X0-x5 + 10, y3);
    ctx.stroke();

    // Draw PLUG ---------------------------------------
    // 그리는 방식이 달라짐 좌측과 우측을 X0 기준으로 마이너스 플러스
    let x21, x22, x23, x24, y11, y12, y13, y14, y15, y16;
    const wall_T = tube_OR - tube_IR; // wall thick = in tube OD  - in tube ID
    const plug_A = (inputValues.input8 / 2) * scale; // point1 = plug D /2
    const plug_B = (inputValues.input9 / 2) * scale; // point2 = plug body D / 2
    const p_Angle = Number(inputValues.input10); // plug_Angle : plug angle

    let meet_X, meet_Y;
    x21 = plug_A; //플러그 치수 A
    x22 = plug_A - (Math.tan((30 * PI) / 180) * (0.5 * scale)); // 플러그 B 앞 모따기 (정확한 계산 필요: 각도 30도?)
    x23 = plug_B; // 플러그 치수 B
    
    // 플러그 후면 모따기 위치 (15도에 1mm)
    x24 = plug_B - Math.tan((15 * PI) / 180) * (1.0 * scale);
    
    // 리덕션 플러그 안착 지점 y축 - reduction_Angle??
    y11 = y2 - Math.tan(((p_Angle / 2) * PI) / 180) * (die_hR - plug_A);

    // 플러그 B에서 A 만나는 점 y
    y14 = y11 - (plug_B - plug_A) / Math.tan((p_Angle * PI) / 180);
    // 플러그 치수 C - 도면 참조

    // 플러그 치수 도면에 따른 A 길이 및 전체 길이
    if (inputValues.input2 > 3.41) {
      y13 = y11 + (3.0 * scale);
    } else if (inputValues.input2 > 2.4 ) {
      y13 = y11 + (2.5 * scale);
    } else {
      y13 = y11 + (2.0 * scale);
    }

    if (inputValues.input2 > 2.75) {
      y16 = y13 - ( 11 * scale);
    } else {
      y16 = y13 - ( 10 * scale);
    }
  
    // 모따기 부분은 상세하게 각도를 그리지 않음. - 참조
    y12 = y13 - 0.4 * scale; // 플러그 모따기 후 y
    y15 = y16 + 1 * scale; // 플러그 후면 모따기 높이

    ctx.beginPath();
    ctx.lineWidth = 0.8;
    ctx.strokeStyle = "black";
    ctx.setLineDash([]);
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
    // End of Draw Plug ------------------------------------
    

    // Draw Tube ------------------------------------------- 
    // 외측 변수
    // 베아링에서 컨택트 점까지의 거리를 구하기 위함. 코놉티카 각도 검사 거리 파악
    let contactX = tube_OR - die_hR; //??
    let contactY = contactX / Math.tan((red_Angle * PI) / 180);
    
    let contactX1 = X0 - tube_OR;
    let contactX11 = X0 + tube_OR;

    // 리덕션에서 접촉할 때 y 좌표 및 내면 높이
    let contactY1 = Y0 - (contactY + bearing_L + backRelief_L);
    const idY = Math.tan(((red_Angle / 2) * PI) / 180) * (tube_OR - tube_IR);
    const x111 = contactX1 + wall_T; // ?? 튜브 내경 x111 = tube_IR
    const y111 = contactY1 - idY;
    






    // 플러그 앵글의 기울기
    const m1 = Math.tan(((p_Angle + 90) * Math.PI) / 180);
    // 리덕션 앵글의 기울기
    const m2 = Math.tan(((red_Angle + 90) * PI) / 180);
    
    // 두 직선이 만나는 점 구하기 - 어떻게 구했는지 생각이 안남, 직선 방정식 y = ax + b??
    let a1, a2, a3, b1, b2, b3;
    a2 = -(X0 - x111);
    b2 = Y0 - y111;
    a1 = -(X0 - (X0 - x21));
    b1 = Y0 - y11;
    const meet_x = (m1 * a1 - b1 - m2 * a2 + b2) / (m1 - m2);
    const meet_y = m1 * meet_x - m1 * a1 + b1;
    
    
    
    
    // m3 : 어프로치 앵글의 기울기
    const m3 = Math.tan((130 * PI) / 180);
    console.log(`변수: ${a1} , ${a2}, ${b1}, ${b2},`);
    
    // 조건이 많음. 어프로치 내면 각도가 플러그 경사면을 만날 경우
    let idY2 = Math.tan((50 * PI) / 180) * (contactX1 - (X0-x3));
    let contactY2 = y3 + idY2
    a3 = a2;
    b3 = Y0 - (contactY2 - idY2 ); // contactY2 번수 정리

    let idY3 = Math.tan((40 *PI)/180) * (tube_IR-plug_B);


    // 어프로치 내면 각도가 내려가다 플러그 경사를 아직 만나지 않고
    // 리덕션 내면 경사가 플러그 경사와 만날 경우
    // 어프로치 내면 각도가 플러그 몸통과 만날 경우



    // const meet_x = (m1 * a1 - b1 - m2 * a2 + b2) / (m1 - m2);
    // const meet_y = m1 * meet_x - m1 * a1 + b1;
    
    // 내면 컨택트 비율을 구하기 위함
    let plugContactRatio = ((meet_y - b1) / (Y0 - y14 - b1)) * 100;

    // 리덕션 구간에서 만날 때 내면 컨택트가 바디에서 만날 때
    let bodyContactY = (tube_IR-x23) / Math.tan(((red_Angle) * PI) / 180) 


    // 좌측 튜브 ------------------------
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "blue";
    ctx.setLineDash([]);
    ctx.fillStyle = "rgba(43, 147, 233, 0.22)";
    // 조건 문
    ctx.moveTo(contactX1, -15);
    if (contactY1 > y3){
      // 리덕션 컨택
      ctx.lineTo(contactX1, contactY1);
    } else {
      // 어프로치 컨택
      ctx.lineTo(contactX1, contactY2);
      ctx.lineTo(X0-x3, y3);
      // 경고 문구
      ctx.font = "20px Arial";
      ctx.fillStyle = "red";
      ctx.textAlign = "center";
      ctx.fillText(`ALERT!! Increase die blank size!!!`, X0, dieCanvas.height/2);
    }
    ctx.lineTo(X0-x2, y2);
    ctx.lineTo(X0-x2, dieCanvas.height+15);
    ctx.lineTo(X0 - x21, dieCanvas.height+15);
    ctx.lineTo(X0 - x21, y11);
    if (Y0-meet_y > y14){
      // console.log(`True: Y0-meet_y: ${Y0-meet_y}, y14: ${y14}`);
      
        ctx.lineTo(X0 + meet_x, Y0 - meet_y);
        ctx.lineTo(X0-tube_IR, y111);
        ctx.lineTo(X0-tube_IR, -15);
        ctx.lineTo(contactX1, -15)
        ctx.stroke();
        ctx.fill();
       
    } else {
      // console.log(`False: Y0-meet_y: ${Y0-meet_y}, y14: ${y14}`);
      ctx.lineTo(X0 - x23, y14);
      ctx.lineTo(X0 - x23, y111 +bodyContactY);
      ctx.lineTo(X0-tube_IR, y111);
      ctx.lineTo(X0-tube_IR, -15);
      ctx.lineTo(contactX1, -15)
      ctx.stroke();
      ctx.fill();

    }
    // 좌측 튜브 완료 ----------------------
    
    // 우측 튜브 ------------------------
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "blue";
    ctx.setLineDash([]);
    ctx.fillStyle = "rgba(43, 147, 233, 0.22)";
    // 조건 문
    ctx.moveTo(contactX11, -15);
    if (contactY1 > y3){
      // 리덕션 컨택
      ctx.lineTo(contactX11, contactY1);
    } else {
      // 어프로치 컨택
      ctx.lineTo(contactX11, contactY2);
      ctx.lineTo(X0+x3, y3);
      // 경고 문구
      ctx.font = "20px Arial";
      ctx.fillStyle = "red";
      ctx.textAlign = "center";
      ctx.fillText(`ALERT!! Increase die blank size!!!`, X0, dieCanvas.height/2);
    }
    ctx.lineTo(X0+x2, y2);
    ctx.lineTo(X0+x2, dieCanvas.height+15);
    ctx.lineTo(X0 + x21, dieCanvas.height+15);
    ctx.lineTo(X0 + x21, y11);
    if (Y0-meet_y > y14){
      let plugContact = ((meet_y - b1) / (Y0 - y14 - b1)) * 100;
      // console.log(`True: Y0-meet_y: ${Y0-meet_y}, y14: ${y14}`);
      
        ctx.lineTo(X0 - meet_x, Y0 - meet_y);
        ctx.lineTo(X0 +tube_IR, y111);
        ctx.lineTo(X0 + tube_IR, -15);
        ctx.lineTo(contactX11, -15)
        ctx.stroke();
        ctx.fill();

        // 지시선 및 코멘트
        ctx.beginPath();
        ctx.lineWidth = 0.8;
        ctx.setLineDash([5, 2]);
        ctx.strokeStyle = "red";
        ctx.moveTo(X0 + meet_x , Y0 - meet_y);
        ctx.lineTo(X0 + meet_x + 30, Y0 - meet_y);
        ctx.stroke();
        ctx.font = "12px Arial";
        ctx.fillStyle = "blue";
        ctx.textAlign = "left";
        ctx.fillText(
          `플러그 컨택트 포인트: ${plugContact.toFixed(1)}%`,
          X0 + meet_x + 35,
          Y0 - meet_y +5
        );
       
    } else {
      // console.log(`False: Y0-meet_y: ${Y0-meet_y}, y14: ${y14}`);
      ctx.lineTo(X0 + x23, y14);
      ctx.lineTo(X0 + x23, y111 +bodyContactY);
      ctx.lineTo(X0+tube_IR, y111);
      ctx.lineTo(X0+tube_IR, -15);
      ctx.lineTo(contactX11, -15)
      ctx.stroke();
      ctx.fill();

      ctx.beginPath();
      ctx.lineWidth = 0.8;
      ctx.setLineDash([5, 2]);
      ctx.strokeStyle = "red";
      ctx.moveTo(X0-plug_B+5, y111+bodyContactY);
      ctx.lineTo(X0-plug_B+30, y111+bodyContactY);
      ctx.stroke();

      ctx.font = "12px Arial";
      ctx.strokeStyle = "blue";
      ctx.fillStyle = "red";
      ctx.textAlign = "left";
      ctx.fillText(`튜브 내면이 플러그 몸통에 접촉합니다`, X0 - x21 + 25 , y111+bodyContactY+5 );



    }
    // 좌측 튜브 완료 ----------------------
    
   
     // Draw Center line

    ctx.strokeStyle = "red";
    ctx.lineWidth = 0.6;
    ctx.setLineDash([20, 6, 4, 6]);
    ctx.beginPath();
    ctx.moveTo(X0, -15);
    ctx.lineTo(X0, dieCanvas.height + 15);
    ctx.stroke();
    ctx.beginPath();
    // ctx.moveTo(X0-50, Y0);
    // ctx.lineTo(X0+50, Y0);
    // ctx.stroke();
    //-----------------------------------------------------------------

    
    let contactPoint = -(contactY / (y3 - y2)) * 100;
    //Write contact point Text
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 3]);
    ctx.moveTo(contactX11, contactY1);
    ctx.lineTo(contactX11 + 25, contactY1);
    ctx.stroke();
    ctx.font = "12px Arial";
    ctx.textAlign = "left";
    if (contactPoint >= 100){
      ctx.fillStyle = "red";
      ctx.fillText(
        `Alert!! 더 큰 블랭크를 적용하세요!`,
        contactX11 + 30,
        contactY1 + 2
      );
    } else {
      ctx.fillStyle = "blue";
      ctx.fillText(
        `Die Contact: ${contactPoint.toFixed(1)}%`,
        contactX11 + 30,
        contactY1 + 2
      );
    }


    // 컨택트가 어프로치에 부딪히면 조건문으로 2개의 컨택트를 그릴 것!! 260520

    
    
    let inArea, outArea;

    inArea = tube_OR * tube_OR * PI - tube_IR * tube_IR * PI;
    outArea = die_hR * die_hR * PI - plug_A * plug_A * PI;
    const rRate = ((inArea - outArea) / inArea) * 100;
    const eRate = (inArea / outArea - 1) * 100;
    const gapTB = (tube_IR - plug_B) / scale;

 

    //Write contact point Text
    // 외경 변화율 추가 필요 2026. 05. 18.
    ctx.font = "14px Arial";
    ctx.fillStyle = "black";
    ctx.textAlign = "left";
    ctx.fillText(`감면율: ${rRate.toFixed(2)}%`, 800, 20);
    ctx.fillText(`연신율: ${eRate.toFixed(2)}%`, 800, 40);
    ctx.fillText(`내경 vs. 플러그 Gap: ${gapTB.toFixed(3)}mm`, 800, 60);
    const distContact = (y2 - contactY1)/scale;
    ctx.fillText(`베아링 to 컨택트 거리: ${distContact.toFixed(3)}mm`, 800, 100);
    const rateDia = ((tube_OR/die_hR)-1)*100;
    ctx.fillText(`외경 변화율: ${rateDia.toFixed(1)}%`, 800, 80);

    if (scale > 100){
      ctx.fillText(`Back Length (⍺:60°)`, X0 - x5 + 10, Y0 - (Y0 - y1) / 2 + 3);
      ctx.fillText(`Bearing Length`, X0 - x5 + 10, y1 - (y1 - y2) / 2 + 3);
      ctx.fillText(`Reduction Length`, X0 - x5 + 10, y2 - (y2 - y3) / 2 + 3);
      ctx.fillText(`Approach(80°)`, X0 - x5 + 10, y3 - (y3 - y4) / 2 + 3);

    }


    // 컨택트 포인트와 델타변수에 의한 다이스 내부 색상 변화 (Good, not good, Bad)
    // 감면율, 연신율, 델타변수 캔버스 우측 상단에 텍스트로 표시


    // 다이스의 구간 표시 및 치수? --------------------------------
    drawDimVer(X0+x5, y4, X0+x5, Y0, dieB_H * -0.04, 0, 7, 0);
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
          //console.log("big");
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
              튜브 심인 시뮬레이션
            </h3>
          </div>
        </div>

        <div className="pl-4 py-1">
          <div className="flex flex-row justify-stretch py-1">
            <div className="w-52">
              <label className="text-slate-500 text-sm mr-2.5">
                튜브 외경(mm) :
              </label>
              <input
                className="w-16 border-gray-700  bg-white border text-center text-sm text-slate-600"
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
                className="w-16 border-gray-700  bg-white border text-center text-sm text-slate-600"
                type="number"
                name="input7"
                step="0.001"
                value={inputValues.input7}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex flex-row justify-stretch ">
            <div className="w-52">
              <label className="text-slate-500 text-sm mr-3">
                다이스 경(mm):
              </label>
              <input
                className="w-16 border-gray-700 bg-white border text-center text-sm text-slate-600"
                type="number"
                name="input2"
                step="0.001"
                value={inputValues.input2}
                onChange={handleChange}
              />
            </div>
            <div className="w-100">
              <label className="text-slate-500 text-sm mr-2.5">
                플러그 경(mm) :
              </label>
              <input
                className="w-16 border-gray-700  bg-white border text-center text-sm text-slate-600"
                type="number"
                name="input8"
                step="0.001"
                value={inputValues.input8}
                onChange={handleChange}
              />
              <label className="text-slate-500 text-sm mr-2.5 ml-2.5">x</label>
              <input
                className="w-16 border-gray-700  bg-white border text-center text-sm text-slate-600"
                type="number"
                name="input9"
                step="0.001"
                value={inputValues.input9}
                onChange={handleChange}
              />
            </div>
            
          </div>

          <div className="flex flex-row justify-stretch py-1">
            <div className="w-44">
              <label className="text-slate-500 text-sm mr-4">
                리덕션 각도(°) :
              </label>
              <input
                className="w-16 border-gray-700  bg-white border text-center text-sm text-slate-600"
                type="number"
                name="input3"
                step="0.5"
                value={inputValues.input3}
                onChange={handleChange}
              />
            </div>
            <div className="w-52">
             <label className="text-slate-500 text-sm mr-2.5 ml-5">
                플러그 반각(°) :
              </label>
              <input
                className="w-16 border-gray-700 border text-center text-sm text-slate-600"
                type="number"
                name="input10"
                step="0.1"
                min="11.0"
                max="12.5"
                value={inputValues.input10}
                onChange={handleChange}
              />
            </div>
            <div className="w-52">
              <label className="text-slate-500 text-sm mr-2.5 ml-5">
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
            <div className="w-60">
              <label className="text-slate-500 text-sm mr-2.5 ml-5">
                Appr&Back 비율(%):
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
          <div className="flex flex-row justify-stretch ">
            <div className="w-44">
              <label className="text-slate-500 text-sm mr-4">
                Blank D(mm) :
              </label>
              <input
                className="w-16 border-gray-700  bg-white border text-center text-sm text-slate-600"
                type="number"
                name="input21"
                step="0.1"
                value={inputValues.input21}
                onChange={handleChange}
              />
            </div>
            <div className="w-52">
             <label className="text-slate-500 text-sm mr-2.5 ml-5">
                Blank H(mm) :
              </label>
              <input
                className="w-16 border-gray-700 border text-center text-sm text-slate-600"
                type="number"
                name="input22"
                step="0.1"
                min="1"
                max="12.0"
                value={inputValues.input22}
                onChange={handleChange}
              />
            </div>
            
          </div>
          
        </div>

        {/* <div className=" pl-4 py-4 " id="radio">
          <fieldset className="w-[1000px] border-gray-900 border flex flex-row justify-left h-14 items-center pb-2 rounded-md">
            <legend className="mx-2 px-2 ">확대 시 축 이동</legend>
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
              스케일: 125
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
              스케일: 175
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
              스케일: 500
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
        </div> */}


      </div>
      <div className="m-2 p-1">
        <canvas
          className="bg-slate-100 rounded-xl shadow-lg"
          id="dieCanvas"
          width="1000"
          height="800"
        ></canvas>
      </div>
      
      <div className="flex flex-row justify-stretch ">
      <div className="w-52">
              <label className="text-slate-500 text-sm mr-2.5 ml-5">
                X0 좌표이동:
              </label>
              <input
                className="w-16 border-gray-700 border text-center text-sm text-slate-600"
                type="number"
                name="input24"
                step="0.1"
                min="-3"
                max="+3"
                value={inputValues.input24}
                onChange={handleChange}
              />
            </div>
            <div className="w-60">
              <label className="text-slate-500 text-sm mr-2.5 ml-5">
                Y0 좌표이동:
              </label>
              <input
                className="w-16 border-gray-700 border text-center text-sm text-slate-600"
                type="number"
                name="input25"
                step="0.1"
                min="-3"
                max="+3"
                value={inputValues.input25}
                onChange={handleChange}
              />
            </div>
            <div className="w-52">
             <label className="text-slate-500 text-sm mr-2.5 ml-5">
                스케일 :
              </label>
              <input
                className="w-16 border-gray-700 border text-center text-sm text-slate-600"
                type="number"
                name="input23"
                step="10"
                min="50"
                max="800"
                value={inputValues.input23}
                onChange={handleChange}
              />
            </div>
      </div>



      <p className="mt-2 text-sm text-slate-600">
        note: 이 시뮬레이션은 기하학적으로 표현한 것이며, 실제 심인에서는 내면 컨택트 포인트가 더 높아질 것임!!</p>
    </div>
  );
};

export default FloatSimulation;
