"use client";
import { useEffect, useState } from "react";

const CalCapacity = ({ setCalculatedValue }) => {
  const [dia, setDia] = useState(1.18);
  const [density, setDensity] = useState(7.8);
  const [weight, setWeight] = useState(1); // Initialize to a non-zero value
  const [parameter, setParameter] = useState({
    finalSpeed: 5,
    efficiency: 85,
    shiftHour: 8,
    shiftNo: 2,
    workdayMonth: 20,
  });

  const [shiftC, setShiftC] = useState();
  const [dayC, setDayC] = useState();
  const [monthC, setMonthC] = useState();


  //   const [length, setLength] = useState(0);
  const [selectedOption, setSelectedOption] = useState("8.53");

  const handleChange = (event) => {
    const { value } = event.target;
    setDia(value);
  };

  const handleChange0 = (event) => {
    const { name, value } = event.target;
    setParameter({
      ...parameter,
      [name]: value,
    });
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    setDensity(event.target.value); // Update density based on selected option
  };

  const handleSelectChangePackage = (event) => {
    setSelectedPackage(event.target.value);
  };

  useEffect(() => {
    const weightPerMeter = (Math.PI * Math.pow(dia / 2, 2) * density).toFixed(2);
    setWeight(weightPerMeter);

	const shiftCapacity = weightPerMeter * parameter.finalSpeed * 60 * 60 * parameter.shiftHour * (parameter.efficiency/100) / 1000;
	setShiftC(shiftCapacity.toFixed(1))
	const dayCapacity = shiftCapacity * parameter.shiftNo / 1000;
	setDayC(dayCapacity.toFixed(1))
	const monthCapacity = dayCapacity * parameter.workdayMonth;
	setMonthC(monthCapacity.toFixed(1))
	console.log("-----------------", monthCapacity)
    // setCalculatedValue(weightPerMeter);
  }, [dia, selectedOption, parameter]);

  const wireTypeOptions = [
    { id: "choice1", label: "Carbon Steel", value: "7.85" },
    { id: "choice2", label: "Aluminum", value: "2.7" },
    { id: "choice3", label: "Copper", value: "8.96" },
    { id: "choice4", label: "STS304", value: "7.9" },
    { id: "choice5", label: "STS316", value: "9.945" },
    { id: "choice6", label: "Tin", value: "7.2984" },
    { id: "choice7", label: "Zinc", value: "7.133" },
    { id: "choice8", label: "FCW(Metal 14%)", value: "7.0" },
    { id: "choice9", label: "FCW(Rutile 14%)", value: "6.55" },
    { id: "choice10", label: "STS FCW(30%)", value: "5.8" },
  ];

  return (
    <div className="mt-4 mb-4 py-4 bg-slate-300 rounded-lg shadow-lg w-[500px]">
      <h3 className="text-slate-600 text-xl italic ml-10 font-semibold mb-4">
        Capacity Assumption by Production Parameters
      </h3>
      <div className="ml-6 pl-4 text-slate-700 text-sm font-semibold">
        <div className="ml-2 mb-2" id="dropdown">
          <label className="mr-20">1. Type of Wire:</label>
          <select
            className="w-30 ml-2"
            name="dropdownGroup"
            value={selectedOption}
            onChange={handleSelectChange}
          >
            {wireTypeOptions.map((option) => (
              <option key={option.id} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="ml-2 mb-2">
          <label className="input_label">2. Final Diameter(mm):</label>
          <input
            className="border-slate-600 border w-14 text-right ml-28"
            type="number"
            name="diameter"
            step="0.01"
            value={dia}
            onChange={handleChange}
          />
        </div>

        <div className="ml-2 mb-2 ">
          <p className=" text-blue-700 inline-block mr-40">3. Wire Weight/M: </p> 
		  <p className="text-base font-bol text-green-700 inline-block">{weight} g</p>
        </div>

        <div className="ml-2 mb-2">
          <label className="input_label">4. Final Speed(m/s):</label>
          <input
            className="border-slate-600 border w-14 text-right ml-32"
            type="number"
            name="finalSpeed"
            step="1"
            value={parameter.finalSpeed}
            onChange={handleChange0}
          />
        </div>

        <div className="ml-2 mb-2">
          <label className="input_label">5. Operating Efficiency(%):</label>
          <input
            className="border-slate-600 border w-14 text-right ml-20"
            type="number"
            name="efficiency"
            step="1"
            value={parameter.efficiency}
            onChange={handleChange0}
          />
        </div>

        <div className="ml-2 mb-2">
          <label className="input_label mr-2">6. Working Hour per Shift:</label>
          <input
            className="border-slate-600 border w-14 text-right ml-20"
            type="number"
            name="shiftHour"
            step="1"
            value={parameter.shiftHour}
            onChange={handleChange0}
          />
        </div>

        <div className="ml-2 mb-2">
          <label className="input_label mr-3">7. Shift per Day:</label>
          <input
            className="border-slate-600 border w-14 text-right ml-36"
            type="number"
            name="shiftNo"
            step="1"
            value={parameter.shiftNo}
            onChange={handleChange0}
          />
        </div>

        <div className="ml-2 mb-2">
          <label className="input_label">8. Working Day per Month:</label>
          <input
            className="border-slate-600 border w-14 text-right ml-20"
            type="number"
            name="workdayMonth"
            step="1"
            value={parameter.workdayMonth}
            onChange={handleChange0}
          />
        </div>
        <div className="ml-2 mb-2">
          <p className=" text-blue-700 inline-block mr-40">9. Capacity/Day:</p>
          <p className="text-base font-bold text-green-700 inline-block"> {dayC} Ton</p>
        </div>
        <div className="ml-2 mb-2">
          <p className="inline-block text-blue-700 mr-32">10. Capacity/Month:</p>
          <p className="inline-block text-base font-bold text-cyan-700">{monthC} Ton</p>
        </div>
      </div>
    </div>
  );
};

export default CalCapacity;
