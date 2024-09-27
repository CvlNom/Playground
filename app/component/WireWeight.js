'use client';
import { useEffect, useState } from 'react';

const WireWeight = ({ setCalculatedValue }) => {
	const [dia, setDia] = useState(1.18);
	const [density, setDensity] = useState(7.8);
	const [weight, setWeight] = useState(1); // Initialize to a non-zero value
	const [length, setLength] = useState(0);
	const [selectedOption, setSelectedOption] = useState('8.53');
	const [selectedPackage, setSelectedPackage] = useState('5000');

	const handleChange = (event) => {
		const { value } = event.target;
		setDia(value);
		// console.log('-------------', dia);
	};

	const handleSelectChange = (event) => {
		setSelectedOption(event.target.value);
		setDensity(event.target.value); // Update density based on selected option
		// console.log('selection', selectedOption);
	};

	const handleSelectChangePackage = (event) => {
		setSelectedPackage(event.target.value);
		// console.log('selected package', selectedPackage);
	};

	useEffect(() => {
		const weightPerMeter = (Math.PI * Math.pow(dia / 2, 2) * density).toFixed(2);
		setWeight(weightPerMeter);
		setCalculatedValue(weightPerMeter);

		// Only calculate length if weight is greater than zero
		if (weightPerMeter > 0) {
			calculateLength(weightPerMeter);
		}
	}, [dia, selectedOption, selectedPackage]);

	function calculateLength(currentWeight) {
		// Example calculation for length (meters) based on package weight
		const lengthPerPackage = (selectedPackage / currentWeight).toFixed(2);
		console.log('-------', selectedPackage, currentWeight);
		setLength(lengthPerPackage);
		console.log('++++++++', selectedPackage, currentWeight);
	}

	const wireTypeOptions = [
		{ id: 'choice1', label: 'Carbon Steel', value: '7.85' },
		{ id: 'choice2', label: 'Aluminum', value: '2.7' },
		{ id: 'choice3', label: 'Copper', value: '8.96' },
		{ id: 'choice4', label: 'STS304', value: '7.9' },
		{ id: 'choice5', label: 'STS316', value: '9.945' },
		{ id: 'choice6', label: 'Tin', value: '7.2984' },
		{ id: 'choice7', label: 'Zinc', value: '7.133' },
		{ id: 'choice8', label: 'Mild FCW(M 14%)', value: '7.0' },
		{ id: 'choice9', label: 'Mild FCW(R 14%)', value: '6.55' },
		{ id: 'choice10', label: 'STS FCW(30%)', value: '5.8' },
	];

	const packageOptions = [
		{ id: 'choice1', label: '5 Kg', value: '5000' },
		{ id: 'choice2', label: '8 Kg', value: '8000' },
		{ id: 'choice3', label: '12.5 Kg', value: '12500' },
		{ id: 'choice4', label: '15 Kg', value: '15000' },
		{ id: 'choice5', label: '20 Kg', value: '20000' },
		{ id: 'choice6', label: '100 Kg', value: '100000' },
		{ id: 'choice7', label: '200 Kg', value: '200000' },
		{ id: 'choice8', label: '300 Kg', value: '300000' },
		{ id: 'choice9', label: '500 Kg', value: '500000' },
	];

	return (
		<div className='mt-2 py-4 bg-slate-300 rounded-lg shadow-lg'>
			<h3 className="text-slate-600 test-lg italic text-center font-semibold mb-2">Wire Weight / Meter</h3>
			<div className='pl-4 text-slate-700 text-sm font-semibold'>
				<div className='ml-2 mb-2'>
					<label className='input_label'>1. Wire Diameter:</label>
					<input className="border-slate-600 border w-14 text-right ml-12" type='number' name='input1' step='0.01' value={dia} onChange={handleChange} />
				</div>
				<div className='ml-2 mb-2' id='dropdown'>
					<label>2. Material:</label>
					<select className="w-30 ml-2" name='dropdownGroup' value={selectedOption} onChange={handleSelectChange}>
						{wireTypeOptions.map((option) => (
							<option key={option.id} value={option.value}>
								{option.label}
							</option>
						))}
					</select>
					<p className='my-2 text-blue-700'>3. Weight (g/m): {weight}</p>
				</div>

				<div className='ml-2 mb-1' id='dropdown1'>
					<label>4. Package Weight:</label>
					<select className="w-18 ml-4" name='dropdownGroup1' value={selectedPackage} onChange={handleSelectChangePackage}>
						{packageOptions.map((option) => (
							<option key={option.id} value={option.value}>
								{option.label}
							</option>
						))}
					</select>
					<p className='my-2 text-blue-700'>5. Length (meters): {length}</p>
				</div>
			</div>
		</div>
	);
};

export default WireWeight;
