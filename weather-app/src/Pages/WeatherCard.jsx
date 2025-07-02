import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './weathercard.css';

function WeatherCard() {
  const [weatherData, setWeatherData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://localhost:7206/WeatherForecast')
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((err) => {
        if (err.response) {
          setError(`HTTP error! Status: ${err.response.status}`);
        } else if (err.request) {
          setError('No response received from the server.');
        } else {
          setError(`Error: ${err.message}`);
        }
      });
  }, []);

  if (error) {
    return <p className="error-message">Error: {error}</p>;
  }

  if (weatherData.length === 0) {
    return <p className="loading-message">Loading weather data...</p>;
  }

  return (
    <div className="weather-container">
      {weatherData.map((item, index) => (
        <div className="weather-card" key={index}>
          <h3>{new Date(item.date).toDateString()}</h3>
          <p>
            <strong>🌡 Temperature (C):</strong>{' '}
            <span className="temp-c">{item.temperatureC}°C</span>
          </p>
          <p>
            <strong>🔥 Temperature (F):</strong>{' '}
            <span className="temp-f">{item.temperatureF}°F</span>
          </p>
          <p>
            <strong>📋 Summary:</strong>{' '}
            <span className="summary">{item.summary}</span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default WeatherCard;
