"use client";
import React from "react";
import { useEffect, useState } from "react";

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
    console.log("dewPoint", dewPoint);
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
    if (humidity < 40) return "black";
    if (humidity < 60) return "blue";
    if (humidity < 80) return "orange";
    return "red";
  };
  const getColorByDewPoint = (temp, dpTemp) => {
    let diff = temp - dpTemp;
    // console.log('--------', diff);
    if (diff < 4) return "orange";
    if (diff < 6) return "blue";
    if (diff < 8) return "green";
    // if (humidity < 80) return 'orange';
    return "black";
  };

  return (
    <div>
      {loading ? (
        <div className="bg-slate-400">
          <h3>Loading ......</h3>
        </div>
      ) : (
        <div className="bg-slate-300 mt-10 pt-2 pl-2 pr-6 text-center pb-2 rounded-lg">
          {/* <div className="text-gray-200">{weather && weather.name}</div> */}
          <h2 className="text-blue-700 text-xl font-semibold bg-slate-400 rounded-full py-1 my-2">Moisture Alarming</h2>
          <h3 className="text-slate-800 py-1 font-semibold text-2xl uppercase">{weather?.name}</h3>
          <h4 className="text-slate-800 py-1 font-semibold">
            Temp: {weather?.main.temp.toFixed(1)} ℃ /{" "}
            {(weather?.main.temp * 1.8 + 32).toFixed(1)} ℉
          </h4>
          <h3 className="py-1 font-semibold" style={{ color: getColorByHumidity(weather?.main.humidity) }}>
            Humidity: {weather?.main.humidity}%
          </h3>
          <h4 className="py-1 font-semibold"
            style={{
              color: getColorByDewPoint(weather?.main.temp, dPoint),
            }}
          >
            Dew Point: {dPoint} ℃ / {(dPoint * 1.8 + 32).toFixed(1)} ℉
          </h4>
        </div>
      )}
    </div>
  );
};

export default WeatherBox;
