import React from 'react';
import WeatherCard from './Pages/WeatherCard';
import './Pages/weathercard.css';

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">Weather Dashboard</h1>
      <WeatherCard />
    </div>
  );
}

export default App;
