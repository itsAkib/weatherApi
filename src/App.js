// import React, { useState } from "react";
import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";


export const WeatherIcons = {
  "01d": "/react-weather-app/icon/sunny.svg",
  "01n": "/react-weather-app/icon/night.svg",
  "02d": "/react-weather-app/icon/day.svg",
  "02n": "/react-weather-app/icon/cloudy-night.svg",
  "03d": "/react-weather-app/icon/cloudy.svg",
  "03n": "/react-weather-app/icon/cloudy.svg",
  "04d": "/react-weather-app/icon/perfect-day.svg",
  "04n": "/react-weather-app/icon/cloudy-night.svg",
  "09d": "/react-weather-app/icon/rain.svg",
  "09n": "/react-weather-app/icon/rain-night.svg",
  "10d": "/react-weather-app/icon/rain.svg",
  "10n": "/react-weather-app/icon/rain-night.svg",
  "11d": "/react-weather-app/icon/storm.svg",
  "11n": "/react-weather-app/icon/storm.svg",
  "13d": "/react-weather-app/icon/rain.svg",
  "13n": "/react-weather-app/icon/rain.svg",
  "50d": "/react-weather-app/icon/rain-night.svg",
  "50n": "/react-weather-app/icon/rain-night.svg",
};

const API_KEY ="8692d05e8ac74951fa46bb4279dadd19"

const Container = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 width: 380px;
 padding: 20px 10px;
 margin: auto;
 border-radius: 4px;
 box-shadow: 0 3px 6px 0 #555;
 background: white;
 font-family: Montserrat;
`;

const AppLabel = styled.span`
 color: black;
 margin: 20px auto;
 font-size: 18px;
 font-weight: bold;
`;

const CloseButton = styled.span`
padding: 2px 3px;
background-color: black;
border-radius: 50%;
color: white;
position: absolute;
`;

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  
  const fetchWeather = async (e) => {
    e.preventDefault();
   const response =
   await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
   updateWeather(response.data)
  };

  return (
  <Container>
    <AppLabel>React Weather App</AppLabel>
    {city && weather ? (
    <WeatherComponent weather={weather} city={city}/>
    ) : (
    <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
  )}
     </Container>
  );
}

export default App;
