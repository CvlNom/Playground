"use client";

import { useEffect } from "react";

const DrawGraph = (props) => {

  console.log("--------props", props)
  useEffect(() => {
    // DOM이 렌더링된 후 실행
    const graphCanvas = document.getElementById("graphCanvas");
    if (!graphCanvas) return;

    const ctx = graphCanvas.getContext("2d");
    if (!ctx) return;

    // 초기 설정
    ctx.clearRect(0, 0, graphCanvas.width, graphCanvas.height); // 기존 내용 지우기
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#000000";
    ctx.fillStyle = "hsl(0, 0%, 98%)";
    ctx.setLineDash([]);

    ctx.font = "14px Arial";
    ctx.fillStyle = "blue";
    ctx.textAlign = "left";
    ctx.fillText(`Trends of ${props.name}`, 400,30);

    // 데이터에 따라 그래프 그리기
    const data = props.data1 || [];
    if (data.length > 0) {
      ctx.lineWidth = 2;
      ctx.beginPath();

      const h = 300;
      const w = 900;

      let x1 = w/28;
      let x2 = w/14;
      let x3 = w - (w/28);
      let y1 = h/6 -  h/12;
      let y2 = h - (h/6);
      let y3 = h - (h/12);

      ctx.moveTo(x1, y2);
      ctx.lineTo(x3, y2);
      ctx.moveTo(x2, y1);
      ctx.lineTo(x2, y3);
      ctx.stroke(); // 선 그리기

      for (let i = 0; i < 4; i++){
        ctx.lineWidth = 0.5;
        let px1 = (w/14) -5;
        let px2 = (w - w/28);
        let py= (1+i) *h / 6;

        ctx.beginPath();
        ctx.moveTo(px1, py);
        ctx.lineTo(px2, py);
        ctx.stroke();

        let index = 40 - (10 * i);
        ctx.font = "11px Arial";
        ctx.fillStyle = "black";
        ctx.textAlign = "left";
        ctx.fillText(`${index}%`, px1-25,py+5);
      }

      for (let i =0; i <= props.data1.length -1; i++) {
        ctx.lineWidth = 0.5;
        let px = (2+i)*(w/14);
        let py = 5*(h/6)-(4*(h/6) * props.data1[i] / 40)
        
        ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.moveTo(px, y2-5);
        ctx.lineTo(px, y2+5);
        ctx.stroke();

        
        if (props.data1[i] != 0) {
          ctx.font = "11px Arial";
          ctx.fillStyle = "black";
          ctx.textAlign = "left";
          ctx.fillText(`${props.data1[i]}%`, px-15,py-15);
          ctx.fillText(`#${i +1}`, px-5,y2+20);

          
          let ppx = (1+i)*(w/14);
          let ppy = 5*(h/6)-(4*(h/6) * props.data1[i-1] / 40)
          
          ctx.beginPath();
          ctx.arc(px, py, 5, 0, Math.PI*2)
          ctx.fillStyle='red';
          ctx.fill()

          
          
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.strokeStyle = "red";
          ctx.moveTo(ppx, ppy);
          ctx.lineTo(px, py);
          ctx.stroke();

        }

      }

      



    }
  }, [props.data1]); // `props.data1` 변경 시 그래프 다시 그리기

  return (
    <div className="m-2 p-1">
      <canvas
        className="bg-slate-100 rounded-xl shadow-lg"
        id="graphCanvas"
        width="900"
        height="300"
      ></canvas>
    </div>
  );
};

export default DrawGraph;
