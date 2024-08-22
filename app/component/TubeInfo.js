'use client';
import { useEffect, useState } from 'react';

const getTubeInfo = ({ setCalculatedValue }) => {
	const [stripThk, setStripThk] = useState(0.9);
	const [stripWidth, setStripWidth] = useState(14);
	const [density, setDensity] = useState(2.01);
	const [target, setTarget] = useState(14);
	const [tubeDia, setTubeDia] = useState(0);
	const [voidArea, setVoidArea] = useState(0);
	const [maxFill, setMaxFill] = useState(0);
	const [compactDia, setCompactDia] = useState(0);

	const handleChange = (setter) => (event) => {
		setter(parseFloat(event.target.value));
	};

	useEffect(() => {
		const tubeDiameter = stripWidth / Math.PI + stripThk;
		const voidDia = tubeDiameter - 2 * stripThk;
		const voidAreaCalc = Math.PI * Math.pow(voidDia / 2, 2);
		const stripWeight = stripThk * stripWidth * 7.8;
		const fluxWeight = voidAreaCalc * density;
		const maxFillRatio = (fluxWeight / (stripWeight + fluxWeight)) * 100;
		const realDensity = density + 1.5;
		const fluxArea = (voidAreaCalc * density) / realDensity;
		const compactArea = fluxArea + stripThk * stripWidth;
		const compactDiameter = 2 * Math.sqrt(compactArea / Math.PI);

		setTubeDia(tubeDiameter);
		setVoidArea(voidAreaCalc);
		setMaxFill(maxFillRatio);
		setCompactDia(compactDiameter);
	}, [stripThk, stripWidth, density]);

	return (
		<div className='tubeForFCW'>
			<h3 style={{ fontWeight: '700', color: 'blue'}}>Tube Info. for FCW</h3>
			<div className='Info'>
				<ul>
					<li>
						<div>
							<label className='input_label'>Strip (t - w): </label>
							<input
								type='number'
								name='stripThickness'
								step='0.1'
								value={stripThk}
								onChange={handleChange(setStripThk)}
							/>
							<label className='input_label'> - </label>
							<input
								type='number'
								name='stripWidth'
								step='0.1'
								value={stripWidth}
								onChange={handleChange(setStripWidth)}
							/>
						</div>
					</li>
					<li>
						<p>
							Formed Tube Dia.: <strong>{tubeDia.toFixed(2)}mm</strong>
						</p>
					</li>
					<li>
						<p>
							Void Area for Flux:{' '}
							<strong>
								{voidArea.toFixed(2)}mm<sup>2</sup>
							</strong>
						</p>
					</li>
					<li>
						<div className='fluxDensity'>
							<label className='input_label'>Flux Specific Density:</label>
							<input type='number' step='0.01' value={density} onChange={handleChange(setDensity)} />
						</div>
					</li>
					<li>
						<p title='!!! Add 1 ~ 1.5% in real situation'>
							Max Fill Ratio: <strong>{maxFill.toFixed(2)}%</strong>
						</p>
					</li>
					<li>
						<div className='targetFill'>
							<label className='input_label'>Target Fill Ratio:</label>
							<input type='number' step='0.01' value={target} onChange={handleChange(setTarget)} />
							<span>%</span>
						</div>
					</li>
					<li>
						<p title='!This is the size that the flux became completely compressed.'>
							Compact Tube Size: <strong>{compactDia.toFixed(2)}mm</strong>
						</p>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default getTubeInfo;
