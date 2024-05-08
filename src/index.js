import React, { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";
import axios from "axios";
import Search from "./Search";

let rootElement = document.getElementById("root");
let root = createRoot(rootElement);

let App = () => {
  let [weatherData, setWeatherData] = useState(null);
  let [searchTerm, setSearchTerm] = useState("");

  let handleSearch = async (searchTerm) => {
    try {
      const apiKey = "85bbd3d16a2dfe0ecf253c7ae1e8fe03";
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${apiKey}&units=metric`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="App">
      <div>
        <h1>Nozzie's Random Weather Engine</h1>
        <Search onSearch={handleSearch} />
        {weatherData && (
          <div>
            <h2>
              It is {weatherData.main.temp}°C in {searchTerm}
            </h2>
            <p>Weather: {weatherData.weather[0].description}</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
            <p>Wind Speed: {weatherData.wind.speed} m/s</p>
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
              alt="Weather Icon"
            />
          </div>
        )}
      </div>
    </div>
  );
};

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
