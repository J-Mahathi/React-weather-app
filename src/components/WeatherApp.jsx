import React, { useState } from 'react';
import SearchBox from './SearchBox';
import InformationBox from './InformationBox';

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Hyderabad",
    feelsLike: 33.42,
    humidity: 29,
    temp: 34.23,
    tempMax: 34.73,
    tempMin: 34.23,
    weather: "scattered clouds"
})

// search box lo enter chesina new info new weather info kosam
  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  }
  return (
    <div style={{textAlign: "center"}}>
      <h2>Weather App by Delta</h2>
      <SearchBox updateInfo={updateInfo}/>
      <InformationBox info = {weatherInfo}/>
    </div>
  )
}
