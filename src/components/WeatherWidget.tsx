import { useState, useEffect } from 'react';
import { Cloud, Sun, CloudRain, Snowflake, Wind, Droplets, Thermometer } from 'lucide-react';

interface WeatherData {
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  feelsLike: number;
}

const mockWeatherData: WeatherData = {
  temperature: 12,
  condition: 'Partly Cloudy',
  humidity: 65,
  windSpeed: 8,
  feelsLike: 10,
};

const getWeatherIcon = (condition: string) => {
  const lowerCondition = condition.toLowerCase();
  if (lowerCondition.includes('rain')) return CloudRain;
  if (lowerCondition.includes('snow')) return Snowflake;
  if (lowerCondition.includes('cloud')) return Cloud;
  return Sun;
};

export function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setWeather(mockWeatherData);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="bg-gradient-to-br from-forest-600 to-forest-800 rounded-lg p-6 text-white animate-pulse">
        <div className="h-6 bg-white/20 rounded w-1/2 mb-4" />
        <div className="h-16 bg-white/20 rounded w-3/4 mb-4" />
        <div className="h-4 bg-white/20 rounded w-full" />
      </div>
    );
  }

  if (!weather) return null;

  const WeatherIcon = getWeatherIcon(weather.condition);

  return (
    <div className="bg-gradient-to-br from-forest-600 to-forest-800 rounded-lg overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-white/80 text-sm font-medium tracking-wide uppercase">Current Weather</h3>
            <p className="text-white text-lg font-semibold">Shimla, HP</p>
          </div>
          <WeatherIcon className="w-12 h-12 text-gold-400" />
        </div>

        <div className="flex items-end gap-2 mb-6">
          <span className="text-6xl font-light text-white">{weather.temperature}</span>
          <span className="text-3xl text-white/70 mb-2">°C</span>
        </div>

        <p className="text-white/90 font-medium mb-6">{weather.condition}</p>

        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/20">
          <div className="text-center">
            <Thermometer className="w-5 h-5 text-gold-400 mx-auto mb-1" />
            <p className="text-white/60 text-xs">Feels Like</p>
            <p className="text-white font-semibold">{weather.feelsLike}°</p>
          </div>
          <div className="text-center">
            <Droplets className="w-5 h-5 text-gold-400 mx-auto mb-1" />
            <p className="text-white/60 text-xs">Humidity</p>
            <p className="text-white font-semibold">{weather.humidity}%</p>
          </div>
          <div className="text-center">
            <Wind className="w-5 h-5 text-gold-400 mx-auto mb-1" />
            <p className="text-white/60 text-xs">Wind</p>
            <p className="text-white font-semibold">{weather.windSpeed} km/h</p>
          </div>
        </div>
      </div>

      <div className="bg-forest-900/50 px-6 py-3">
        <p className="text-white/60 text-xs text-center">
          Best time to visit: March - June & September - November
        </p>
      </div>
    </div>
  );
}
