import { useState, useEffect } from 'react';
import axios from 'axios';
import { WeatherData } from '../types';

const useFetchWeather = (term: string) => {
  const [data, setData] = useState<WeatherData[]>([]);
  const [error, setError] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const fetchWeather = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get<WeatherData>(
          `https://api.openweathermap.org/data/2.5/weather?q=${term}&appid=${apiKey}&units=metric`
        );
        setData([response.data]);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    if (term) {
      fetchWeather();
    }
  }, [term]);

  return { data, error, isLoading };
};

export default useFetchWeather;
