'use client';
import React from 'react';
import { useEffect, useState } from 'react';

const WeatherBox = () => {
	const [weather, setWeather] = useState(null);
	const [dPoint, setDPoint] = useState();
	const [loading, setLoading] = useState(false);

	const getCurrentLocation = () => {
		navigator.geolocation.getCurrentPosition((position) => {
			let lat = position.coords.latitude;
			let lon = position.coords.longitude;
			getWeatherByCurrentLocation(lat, lon);
		});
	};

	const getWeatherByCurrentLocation = async (lat, lon) => {
		let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e6dc0365d7faade5bd76157c4f1112af&units=metric`;

		setLoading(true);
		let response = await fetch(url);
		let data = await response.json();
		setWeather(data);
		// console.log('--------', data);
		setLoading(false);
		// console.log(data.main.temp, data.main.humidity);
		const dewPoint = calculateDewPoint(data.main.temp, data.main.humidity);
		setDPoint(dewPoint.toFixed(1));
		console.log('dewPoint', dewPoint);
		// console.log('dP', dPoint)
	};

	useEffect(() => {
		getCurrentLocation();
	}, []);

	const calculateDewPoint = (temp, humidity) => {
		const a = 17.27;
		const b = 237.7;

		// 상대습도를 백분율에서 소수로 변환
		const rh = humidity / 100.0;

		// γ(T, RH) 계산
		const gamma = (a * temp) / (b + temp) + Math.log(rh);

		// 이슬점 계산
		const dewPoint = (b * gamma) / (a - gamma);

		return dewPoint;
	};

	const getColorByHumidity = (humidity) => {
		if (humidity < 40) return 'blue';
		if (humidity < 60) return 'green';
		if (humidity < 80) return 'orange';
		return 'red';
	};
	const getColorByDewPoint = (temp, dpTemp) => {
        let diff = temp - dpTemp;
		// console.log('--------', diff);
		if (diff < 4) return 'red';
		if (diff < 6) return 'orange';
		if (diff < 8) return 'green';
		// if (humidity < 80) return 'orange';
		return 'blue';
	};

	return (
		<div>
			{loading? (
				<div className='weather-box'> 
				<h3>Loading ......</h3>
				</div>
			) : (
		<div className='weather-box'>
			{/* <div>{weather && weather.name}</div> */}
			<h3 style={{ color: 'black' }}>City: {weather?.name}</h3>
			<h4 style={{ color: 'blue' }}>
				{weather?.main.temp.toFixed(1)} ℃ / {(weather?.main.temp * 1.8 + 32).toFixed(1)} ℉
			</h4>
			<h3 style={{ color: getColorByHumidity(weather?.main.humidity) }}>Humidity: {weather?.main.humidity}%</h3>
			<h4 style={{ color: getColorByDewPoint(weather?.main.temp, dPoint) }}>
				Dew Point: {dPoint} ℃ / {(dPoint * 1.8 + 32).toFixed(1)} ℉
			</h4>
		</div>

			)}
		</div>
	);
};

export default WeatherBox;
