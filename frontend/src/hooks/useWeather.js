import { useEffect, useState } from 'react';

const mockWeather = {
  temp: 59,
  tempLow: 48,
  tempHigh: 62,
  condition: 'Clear sky',
  summary: 'Overcast overall',
  stats: [
    { icon: 'wind', label: 'Wind', value: '12 mph' },
    { icon: 'humidity', label: 'Humidity', value: '73%' },
    { icon: 'sunrise', label: 'Sunrise', value: '6:36 AM' },
    { icon: 'sunset', label: 'Sunset', value: '7:43 PM' },
  ],
};

export const useWeather = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(mockWeather);
      setIsLoading(false);
    }, 250);

    return () => clearTimeout(timer);
  }, []);

  return { data, isLoading, error };
};

export const getWeatherInfo = (weather) => ({
  temp: weather?.temp ?? 0,
  tempLow: weather?.tempLow ?? 0,
  tempHigh: weather?.tempHigh ?? 0,
  condition: weather?.condition ?? 'Unknown',
  summary: weather?.summary ?? '',
  stats: weather?.stats ?? [],
});
