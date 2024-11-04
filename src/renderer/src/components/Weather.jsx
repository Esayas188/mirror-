import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment'; // For formatting time

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState({ lat: null, lon: null });

  const apiKey = "ea49212c9f78228950ae41a8adfc4cc1"; // Replace with your OpenWeatherMap API key

  const fetchWeather = async (lat, lon) => {
    setLoading(true);
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    try {
      const response = await axios.get(apiUrl);
      setWeatherData(response.data);
      setError(null); 
    } catch (err) {
      setError('Could not fetch weather data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lon: longitude });
        },
        (error) => {
          setError('Permission denied or geolocation is not available.');
          setLoading(false);
        }
      );
    } else {
      setError('Geolocation not supported by this browser.');
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (location.lat && location.lon) {
      fetchWeather(location.lat, location.lon);
    }
  }, [location]);

  const getBackgroundClass = () => {
    if (!weatherData) return 'from-gray-700 to-gray-900'; // Default background

    const weather = weatherData.weather[0].main.toLowerCase();
    if (weather.includes('rain')) return 'from-blue-500 to-blue-800';
    if (weather.includes('cloud')) return 'from-gray-400 to-gray-700';
    if (weather.includes('clear')) return 'from-yellow-500 to-orange-500';
    return 'from-gray-700 to-gray-900'; // Default background
  };

  return (
    <div className=' font-poppin  italic flex items-center justify-center  text-white'>
      <div className=" border-gray-600 border container mx-auto p-6 max-w-4xl bg-gray-800 bg-opacity-70 rounded-lg shadow-lg">
        
        {/* Landscape layout: Date, Time, and Weather Overview */}
        <div className="flex items-center gap-[20px]">
          
          {/* Left: Date and Time */}
          <div className="flex flex-col  items-center">
            <h1 className="text-xl font-bold mb-4">Weather App</h1>
            <p className="text-sm">{moment().format('dddd, MMMM Do YYYY')}</p>
            <p className="text-sm">{moment().format('h:mm:ss a')}</p>
          </div>

          {/* Center: Weather Details */}
          {weatherData && !loading && !error && (
            <div className="flex items-center  justify-center">
              <div className="flex flex-col items-center">
                <h2 className="text-xl font-bold">{weatherData.name}</h2>
                <p className="text-sm capitalize">{weatherData.weather[0].description}</p>
                <img
                  src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
                  alt="Weather icon"
                  className="w-28 h-28"
                />
                <p className="text-5xl font-bold">{Math.round(weatherData.main.temp)}°C</p>
              </div>
            </div>
          )}

          {/* Right: Additional Weather Information */}
          {weatherData && !loading && !error && (
            <div className=" pl-[20px] text-lg flex flex-col items-center justify-center">
              <div className="mb-4">
                <p>Humidity: <span className="font-bold">{weatherData.main.humidity}%</span></p>
                <p>Wind: <span className="font-bold">{weatherData.wind.speed} m/s</span></p>
              </div>
              <div className="text-sm text-gray-300">
                {/* <p>Pressure: {weatherData.main.pressure} hPa</p>
                <p>Visibility: {weatherData.visibility / 1000} km</p> */}
                <p>Sunrise: {moment.unix(weatherData.sys.sunrise).format('h:mm A')}</p>
                <p>Sunset: {moment.unix(weatherData.sys.sunset).format('h:mm A')}</p>
              </div>
            </div>
          )}

        </div>

        {/* Loading and Error State */}
        {loading && <p className="text-xl animate-pulse text-center mt-8">Fetching current location...</p>}
        {error && <p className="text-red-500 text-lg text-center mt-8">{error}</p>}
      </div>
    </div>
  );
};

export default Weather;
