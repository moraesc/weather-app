import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

const cities = ['Los Angeles', 'New York', 'Miami', 'Paris', 'London', 'Madrid'];

const App: React.FC = () => {
  const [weatherData, setWeatherData] = useState<any[]>([]);
  const [currentCityIndex, setCurrentCityIndex] = useState(0);

  const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const responses = await Promise.all(
          cities.map(city =>
            axios.get('https://api.openweathermap.org/data/2.5/weather', {
              params: {
                q: city,
                appid: apiKey,
                units: 'imperial'
              }
            })
          )
        );
        setWeatherData(responses.map(response => response.data));
      } catch (error) {
        console.error('Error fetching the weather data', error);
      }
    };

    fetchWeather();
  }, [apiKey]);

  const handlePrevCity = () => {
    setCurrentCityIndex((prevIndex) => (prevIndex === 0 ? cities.length - 1 : prevIndex - 1));
  };

  const handleNextCity = () => {
    setCurrentCityIndex((prevIndex) => (prevIndex === cities.length - 1 ? 0 : prevIndex + 1));
  };

  const formatTime = () => {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const getWindDirection = (degrees: number) => {
    return `rotate(${degrees}deg)`;
  };

  const getUVIndexClass = (value: number) => {
    if (value <= 2) return 'low';
    if (value <= 5) return 'moderate';
    if (value <= 7) return 'high';
    if (value <= 10) return 'very-high';
    return 'extreme';
  };

  const getUVIndexText = (value: number) => {
    if (value <= 2) return 'Low';
    if (value <= 5) return 'Moderate';
    if (value <= 7) return 'High';
    if (value <= 10) return 'Very High';
    return 'Extreme';
  };

  if (!weatherData.length) {
    return <div className="weather-container"><p>Loading...</p></div>;
  }

  const currentWeather = weatherData[currentCityIndex];

  return (
    <div className="weather-container">
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="uv-gradient" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="#3EA72D" />
            <stop offset="25%" stopColor="#FFF300" />
            <stop offset="50%" stopColor="#F18B00" />
            <stop offset="75%" stopColor="#E53210" />
            <stop offset="100%" stopColor="#B567A4" />
          </linearGradient>
        </defs>
      </svg>

      <div className="main-weather">
        <div className="cloud-bg">
          <div className="cloud cloud-1"></div>
          <div className="cloud cloud-2"></div>
          <div className="cloud cloud-3"></div>
        </div>
        <div className="location">
          <svg className="location-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          <div className="city-navigation">
            <button className="nav-arrow" onClick={handlePrevCity} aria-label="Previous city">
              <svg viewBox="0 0 24 24">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
            </button>
            <span className="city-name">{currentWeather.name}</span>
            <button className="nav-arrow" onClick={handleNextCity} aria-label="Next city">
              <svg viewBox="0 0 24 24">
                <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
              </svg>
            </button>
          </div>
          <span className="current-time">{formatTime()}</span>
        </div>

        <div className="temperature-display">
          {Math.round(currentWeather.main.temp)}°
        </div>
        <div className="weather-description">
          {currentWeather.weather[0].description}
        </div>
        <div className="weather-stats">
          <span>{currentWeather.main.pressure}hpa</span>
          <span>{currentWeather.main.humidity}%</span>
          <span>{currentWeather.wind.speed}km/h</span>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Wind</h3>
          <div className="compass">
            <div 
              className="compass-arrow" 
              style={{ transform: `translate(-50%, -100%) ${getWindDirection(currentWeather.wind.deg)}` }}
            />
            <div className="compass-labels">
              <span className="compass-label n">N</span>
              <span className="compass-label e">E</span>
              <span className="compass-label s">S</span>
              <span className="compass-label w">W</span>
            </div>
          </div>
          <div className="stat-value">{currentWeather.wind.speed}km/h</div>
          <div className="stat-label">Wind speed</div>
        </div>

        <div className="stat-card">
          <h3>Rain Chance</h3>
          <svg className="gauge" viewBox="0 0 120 120">
            <circle className="gauge-circle" cx="60" cy="60" r="54"/>
            <circle 
              className="gauge-progress" 
              cx="60" 
              cy="60" 
              r="54" 
              strokeDasharray="339.292"
              strokeDashoffset={339.292 * (1 - (currentWeather.clouds.all / 100))}
            />
            <text className="gauge-text" x="60" y="60">
              {currentWeather.clouds.all}%
            </text>
          </svg>
          <div className="stat-label">Rain chance</div>
        </div>

        <div className="stat-card">
          <h3>Pressure</h3>
          <div className="stat-value">{currentWeather.main.pressure}hpa</div>
          <div className="stat-label">Pressure</div>
        </div>

        <div className="stat-card">
          <h3>UV Index</h3>
          <svg className={`gauge uv-gauge ${getUVIndexClass(2)}`} viewBox="0 0 120 120">
            <circle className="gauge-circle" cx="60" cy="60" r="54"/>
            <circle 
              className="gauge-progress" 
              cx="60" 
              cy="60" 
              r="54" 
              strokeDasharray="339.292"
              strokeDashoffset={339.292 * 0.8}
            />
            <text className="gauge-text" x="60" y="60" fontSize="16" textAnchor="middle" dominantBaseline="middle">
              {getUVIndexText(2)}
            </text>
          </svg>
          <div className="stat-label">UV index</div>
        </div>
      </div>
    </div>
  );
};

export default App;