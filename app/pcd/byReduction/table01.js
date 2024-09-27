"use client";
import { useState } from "react";
import { useEffect } from "react";

const CheckTable = (props) => {
  // 초기 상태 설정
  const initialRows = Array.from({ length: 12 }, (_, index) => ({
    rowNumber: index + 1,
    column2: "",
    column3: "",
    column4: "",
    column5: "select",
    column6: "14",
    column7: "30",
    column8: "25",
    column9: "25",
    result1: "",
    result2: "",
    result3: "",
  }));

  const [rows, setRows] = useState(initialRows);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setRows(initialRows);
    setIsClient(true);
  }, []);

  useEffect(() => {
    // 모든 행에 대해 초기 결과 계산
    const newRows = [...rows];
    newRows.forEach((_, index) => calculateResult(newRows, index));
    setRows(newRows);
  }, [isClient]); // isClient가 true일 때만 실행

  // 인풋 변경 핸들러
  const handleInputChange = (rowIndex, columnName, value) => {
    const newRows = [...rows];
    newRows[rowIndex][columnName] = value;
    calculateResult(newRows, rowIndex);
    setRows(newRows);
  };

  // 드롭다운 변경 핸들러
  const handleDropdownChange = (rowIndex, value) => {
    const newRows = [...rows];
    newRows[rowIndex].column5 = value;
    calculateResult(newRows, rowIndex);
    setRows(newRows);
  };

  // ****************
  // 결과 계산 함수, 로딩시
  const calculateResult = (newRows, rowIndex) => {
    const { column6, column7, column8, column9 } = newRows[rowIndex];
    const angle = parseFloat(column6) || 0;
    const bear = parseFloat(column7) || 0;
    const back = parseFloat(column8) || 0;
    const appr = parseFloat(column9) || 0;

    let dieH = 5.13;
    switch (rows[rowIndex].column5) {
      case "CRD":
        break;
      case "H5":
        dieH = 18;
        break;
      case "D27":
        dieH = 8.7;
        break;
      case "D24":
        dieH = 5.3;
        break;
      case "D21":
        dieH = 3.86;
        break;
      case "D18":
        dieH = 3.5;
        break;
      case "D15":
        dieH = 2.5;
        break;
      default:
        break;
    }

    if (
      rows[rowIndex].column5 === "CRD" ||
      rows[rowIndex].column5 === "select"
    ) {
      newRows[rowIndex].result1 = "";
      newRows[rowIndex].result2 = "";
      newRows[rowIndex].result3 = "";
      //TODO: 인풋을 비 활성화 시키는 방법
    } else {
      let a = props.data1[rowIndex] / 100;
      let b = ((angle / 2) * Math.PI) / 180;
      let dia1 = props.data[rowIndex];
      let dia2 = props.data[rowIndex + 1];
      let dia = dia2;
      let redH =
        dieH - dia * (back / 100) - dia * (bear / 100) - dia * (appr / 100);
      let contactH = (dia1 - dia2) / 2 / Math.tan(b);
      const result1 = (
        (1 / a) *
        Math.pow(1 + Math.sqrt(1 - a), 2) *
        Math.sin(b)
      ).toFixed(2); // 예시로 합계를 결과로 설정
      const result2 = (
        ((((dia1 - dia2) / 2) * (1 / Math.tan(b))) / dia2) *
        100
      ).toFixed(1); // 예시로 곱셈을 결과로 설정
      const result3 = ((contactH / redH) * 100).toFixed(1); // 예시로 평균을 결과로 설정

      newRows[rowIndex].result1 = result1;
      newRows[rowIndex].result2 = result2;
      newRows[rowIndex].result3 = result3;
    }
  };

  if (!isClient) {
    return null;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>No </th>
          <th>Size</th>
          <th>
            <sup>*1)</sup> R rate
          </th>
          <th>
            <sup>*2)</sup>E rate
          </th>
          <th>
            <sup>*3)</sup>Type
          </th>
          <th>
            <sup>*4)</sup>angle
          </th>
          <th>
            <sup>*5)</sup>Bearing
          </th>
          <th>
            <sup>*5)</sup>Back
          </th>
          <th>
            <sup>*5)</sup>Approach
          </th>
          <th>
            <sup>*6)</sup>𝜟
          </th>
          <th>
            <sup>*7)</sup>RCL
          </th>
          <th>
            <sup>*8)</sup>CP
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {Array.from({ length: 12 }, (_, colIndex) => {
              const cellStyle = {
                width: "80px",
                backgroundColor: "white",
                textAlign: "center",
              };
              if (colIndex === 9) {
                cellStyle.backgroundColor =
                  row.result1 < 1.6 && row.result1 > 0.1
                    ? "lightgreen"
                    : "rgb(200, 200, 200)";
              }
              if (colIndex === 10) {
                cellStyle.backgroundColor =
                  row.result2 < 100 && row.result2 > 65
                    ? "lightgreen"
                    : "rgb(200, 200, 200)";
              }
              if (colIndex === 11) {
                cellStyle.backgroundColor =
                  row.result3 < 70 && row.result2 > 15
                    ? "lightgreen"
                    : "rgba(203, 139, 99, 0.616)";
              }
              if (colIndex === 0) {
                return (
                  <td
                    key={colIndex}
                    style={{ width: "45px", backgroundColor: "lightgray" }}
                  >
                    {row.rowNumber}
                  </td>
                );
              } else if (colIndex === 1) {
                return (
                  <td
                    key={colIndex}
                    style={{ width: "100px", backgroundColor: "lightgray" }}
                  >
                    {props.data[row.rowNumber]} mm
                  </td>
                );
              } else if (colIndex === 2) {
                return (
                  <td
                    key={colIndex}
                    style={{ width: "80px", backgroundColor: "lightgray" }}
                  >
                    {props.data1[row.rowNumber - 1]}%
                  </td>
                );
              } else if (colIndex === 3) {
                return (
                  <td
                    key={colIndex}
                    style={{ width: "80px", backgroundColor: "lightgray" }}
                  >
                    {props.data2[row.rowNumber - 1]}%
                  </td>
                );
              } else if (colIndex === 4) {
                return (
                  <td key={colIndex} style={{ width: "80px" }}>
                    <select
                      value={row.column5}
                      onChange={(e) =>
                        handleDropdownChange(rowIndex, e.target.value)
                      }
                    >
                      <option value="select">select!</option>
                      <option value="CRD">CRD</option>
                      <option value="H5">H5</option>
                      <option value="D27">D27</option>
                      <option value="D24">D24</option>
                      <option value="D21">D21</option>
                      <option value="D18">D18</option>
                      <option value="D15">D15</option>
                    </select>
                  </td>
                );
              } else if (colIndex >= 5 && colIndex <= 8) {
                return (
                  <td key={colIndex} style={{ width: "70px" }}>
                    <input
                      style={{ width: "70px", textAlign: "right" }}
                      type="number"
                      value={row[`column${colIndex + 1}`]}
                      onChange={(e) =>
                        handleInputChange(
                          rowIndex,
                          `column${colIndex + 1}`,
                          e.target.value
                        )
                      }
                    />
                  </td>
                );
              } else if (colIndex === 9) {
                return (
                  <td key={colIndex} style={cellStyle}>
                    {row.result1}
                  </td>
                );
              } else if (colIndex === 10) {
                return (
                  <td key={colIndex} style={cellStyle}>
                    {row.result2}
                  </td>
                );
              } else if (colIndex === 11) {
                return (
                  <td key={colIndex} style={cellStyle}>
                    {row.result3}
                  </td>
                );
              } else {
                return <td key={colIndex}></td>;
              }
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CheckTable;
