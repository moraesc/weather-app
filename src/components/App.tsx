import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

const cities = ['Los Angeles', 'New York', 'Miami', 'Paris', 'London', 'Madrid'];

interface ForecastData {
  date: string;
  temp: number;
  weather: string;
  icon: string;
}

const WeatherIcon: React.FC<{ type: string }> = ({ type }) => {
  const getIcon = () => {
    switch (type.toLowerCase()) {
      case 'clear':
      case 'clear sky':
        return (
          <path d="M12 3a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1zm0 14a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1zm9-7a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2h2zM5 12a1 1 0 0 1-1 1H2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1zm.64-6.36a1 1 0 0 1 1.42 0l1.42 1.42a1 1 0 0 1-1.42 1.42L5.64 7.06a1 1 0 0 1 0-1.42zm12.72 12.72a1 1 0 0 1 0 1.42l-1.42 1.42a1 1 0 1 1-1.42-1.42l1.42-1.42a1 1 0 0 1 1.42 0zm0-12.72a1 1 0 0 1 0 1.42l-1.42 1.42a1 1 0 1 1-1.42-1.42l1.42-1.42a1 1 0 0 1 1.42 0zM7.06 18.36a1 1 0 0 1 0-1.42l1.42-1.42a1 1 0 1 1 1.42 1.42l-1.42 1.42a1 1 0 0 1-1.42 0zM12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12z" />
        );
      case 'clouds':
      case 'few clouds':
      case 'scattered clouds':
      case 'broken clouds':
      case 'overcast clouds':
        return (
          <path d="M19 18H6a4 4 0 0 1-.38-7.98 6 6 0 1 1 11.32-3.02A4 4 0 1 1 19 18zM12 4a4 4 0 0 0-3.87 3.02A2 2 0 0 0 6 9a2 2 0 0 0 0 4h13a2 2 0 1 0-.15-3.99A4 4 0 0 0 12 4z" />
        );
      case 'rain':
      case 'light rain':
      case 'moderate rain':
      case 'heavy rain':
        return (
          <path d="M19 18H6a4 4 0 0 1-.38-7.98 6 6 0 1 1 11.32-3.02A4 4 0 1 1 19 18zM8 20a1 1 0 1 1-2 0c0-1.5 1-3 2-3s2 1.5 2 3a1 1 0 1 1-2 0zm5 0a1 1 0 1 1-2 0c0-1.5 1-3 2-3s2 1.5 2 3a1 1 0 1 1-2 0zm5 0a1 1 0 1 1-2 0c0-1.5 1-3 2-3s2 1.5 2 3a1 1 0 1 1-2 0z" />
        );
      case 'thunderstorm':
        return (
          <path d="M19 18H6a4 4 0 0 1-.38-7.98 6 6 0 1 1 11.32-3.02A4 4 0 1 1 19 18zm-9 0l2-4h-3l1-3-2 4h3l-1 3z" />
        );
      case 'snow':
        return (
          <path d="M19 18H6a4 4 0 0 1-.38-7.98 6 6 0 1 1 11.32-3.02A4 4 0 1 1 19 18zM8 20h.01M12 20h.01M16 20h.01M8 16h.01M12 16h.01M16 16h.01" strokeWidth="2" strokeLinecap="round" />
        );
      default:
        return (
          <path d="M12 3a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1zm0 14a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1z" />
        );
    }
  };

  return (
    <svg className="weather-icon" viewBox="0 0 24 24" fill="currentColor">
      {getIcon()}
    </svg>
  );
};

const RainEffect: React.FC = () => {
  const raindrops = Array.from({ length: 100 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 0.5 + 0.7}s`,
    animationDelay: `${Math.random() * 2}s`
  }));

  return (
    <div className="rain-container">
      {raindrops.map(drop => (
        <div
          key={drop.id}
          className="rain-drop"
          style={{
            left: drop.left,
            animationDuration: drop.animationDuration,
            animationDelay: drop.animationDelay
          }}
        />
      ))}
    </div>
  );
};

const App: React.FC = () => {
  const [weatherData, setWeatherData] = useState<any[]>([]);
  const [forecastData, setForecastData] = useState<ForecastData[]>([]);
  const [currentCityIndex, setCurrentCityIndex] = useState(0);

  const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Fetch current weather
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

        // Fetch forecast for current city
        const forecastResponse = await axios.get('https://api.openweathermap.org/data/2.5/forecast', {
          params: {
            q: cities[currentCityIndex],
            appid: apiKey,
            units: 'imperial'
          }
        });

        // Process forecast data
        const processedForecast = processForecastData(forecastResponse.data.list);
        setForecastData(processedForecast);

        // After setting weather data, update body class
        if (responses.length > 0) {
          const rainChance = responses[currentCityIndex].data.clouds.all;
          document.body.classList.toggle('rainy-theme', rainChance >= 70);
        }
      } catch (error) {
        console.error('Error fetching the weather data', error);
      }
    };

    fetchWeather();
  }, [apiKey, currentCityIndex]);

  const processForecastData = (forecastList: any[]): ForecastData[] => {
    const dailyForecasts: ForecastData[] = [];
    const today = new Date();
    
    // Group forecasts by day and get mid-day forecast for each day
    for (let i = 1; i <= 7; i++) {
      const nextDate = new Date(today);
      nextDate.setDate(today.getDate() + i);
      const dayForecasts = forecastList.filter(forecast => {
        const forecastDate = new Date(forecast.dt * 1000);
        return forecastDate.getDate() === nextDate.getDate();
      });

      if (dayForecasts.length > 0) {
        // Get the forecast for mid-day (closest to 12:00)
        const midDayForecast = dayForecasts.reduce((prev, curr) => {
          const prevTime = new Date(prev.dt * 1000).getHours();
          const currTime = new Date(curr.dt * 1000).getHours();
          return Math.abs(prevTime - 12) < Math.abs(currTime - 12) ? prev : curr;
        });

        dailyForecasts.push({
          date: nextDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
          temp: Math.round(midDayForecast.main.temp),
          weather: midDayForecast.weather[0].main,
          icon: midDayForecast.weather[0].icon
        });
      }
    }

    return dailyForecasts;
  };

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

  const generateWeatherSummary = (forecasts: ForecastData[]): string => {
    const weatherTypes = forecasts.map(f => f.weather.toLowerCase());
    const temperatures = forecasts.map(f => f.temp);
    const avgTemp = Math.round(temperatures.reduce((a, b) => a + b, 0) / temperatures.length);
    
    const sunnyDays = weatherTypes.filter(w => w.includes('clear')).length;
    const rainyDays = weatherTypes.filter(w => w.includes('rain')).length;
    const cloudyDays = weatherTypes.filter(w => w.includes('cloud')).length;
    
    let summary = '';
    
    if (sunnyDays >= 5) {
      summary = `Looks like we're in for a sun-tastic week! ☀️ Pack your shades and get ready for ${sunnyDays} days of vitamin D overload. Average temp: ${avgTemp}°F`;
    } else if (rainyDays >= 4) {
      summary = `Umbrella alert! 🌧️ We've got ${rainyDays} days of rain coming up. Perfect excuse for indoor movie marathons! Average temp: ${avgTemp}°F`;
    } else if (cloudyDays >= 4) {
      summary = `The clouds are having a party this week! 🌥️ ${cloudyDays} days of mood lighting courtesy of Mother Nature. Average temp: ${avgTemp}°F`;
    } else {
      summary = `A bit of everything this week - nature's keeping us on our toes! 🎭 Mix of sun, clouds, and maybe some rain. Average temp: ${avgTemp}°F`;
    }

    return summary;
  };

  const generateOutfitSuggestions = (forecasts: ForecastData[]): string => {
    const temperatures = forecasts.map(f => f.temp);
    const avgTemp = Math.round(temperatures.reduce((a, b) => a + b, 0) / temperatures.length);
    const weatherTypes = forecasts.map(f => f.weather.toLowerCase());
    
    const hasRain = weatherTypes.some(w => w.includes('rain'));
    const hasSun = weatherTypes.some(w => w.includes('clear'));
    const suggestions: string[] = [];
    
    // Base layer suggestions based on temperature
    if (avgTemp < 40) {
      suggestions.push("🧥 Heavy winter coat, thermal layers, and warm sweaters");
    } else if (avgTemp < 55) {
      suggestions.push("🧥 Light jacket or coat, layered with sweaters");
    } else if (avgTemp < 70) {
      suggestions.push("👕 Light layers, long sleeves, and a light jacket");
    } else if (avgTemp < 85) {
      suggestions.push("👕 T-shirts, short sleeves, and light fabrics");
    } else {
      suggestions.push("👕 Breathable, light clothing and shorts");
    }
    
    // Additional items based on weather conditions
    if (hasRain) {
      suggestions.push("☔ Keep a raincoat or umbrella handy");
    }
    if (hasSun) {
      suggestions.push("🕶️ Don't forget sunglasses and sunscreen");
    }
    if (avgTemp > 75 && hasSun) {
      suggestions.push("🧢 A hat or cap for sun protection");
    }
    if (avgTemp < 45) {
      suggestions.push("🧣 Don't forget gloves, scarf, and warm hat");
    }
    
    return suggestions.join(" • ");
  };

  if (!weatherData.length) {
    return <div className="weather-container"><p>Loading...</p></div>;
  }

  const currentWeather = weatherData[currentCityIndex];
  const isRainy = currentWeather.clouds.all >= 70;

  return (
    <>
      {isRainy && <RainEffect />}
      <div className="app-cloud-bg">
        <div className="app-cloud app-cloud-1"></div>
        <div className="app-cloud app-cloud-2"></div>
        <div className="app-cloud app-cloud-3"></div>
      </div>
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

        <div className="weather-content">
          <div className="main-weather">
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

        <div className="forecast-panel">
          <h3>7-Day Forecast</h3>
          {forecastData.map((day, index) => (
            <div key={index} className="forecast-day">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div className="forecast-icon-wrapper">
                  <WeatherIcon type={day.weather} />
                </div>
                <div>
                  <div className="forecast-date">{day.date}</div>
                  <div className="forecast-temp">{day.temp}°F</div>
                </div>
              </div>
              <div className="forecast-weather">{day.weather}</div>
            </div>
          ))}
          <div className="week-summary">
            <h4>Summary of the Week</h4>
            <p>{generateWeatherSummary(forecastData)}</p>
          </div>
          <div className="outfit-suggestions">
            <h4>Outfit Suggestions</h4>
            <p>{generateOutfitSuggestions(forecastData)}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;