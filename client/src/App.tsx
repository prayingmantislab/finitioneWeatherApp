import ListScreen from './pages/ListScreen';
import { useState } from 'react';
import { WeatherData } from './types';
import DetailedScreen from './pages/DetailedScreen';

function App() {
  const [weather, setWeather] = useState<WeatherData[]>([]);
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const handleSearch = async (term: string) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${term}&appid=${apiKey}&units=metric`
    );
    const data = await response.json();
    console.log('data', data);
    setWeather([data]);
    console.log('weather', weather);
  };

  const [selectedCityId, setSelectedCityId] = useState<number | null>(null);
  const selectedCityData = selectedCityId
    ? weather.find((data) => data.id === selectedCityId)
    : null;
  return selectedCityId && selectedCityData ? (
    <DetailedScreen cityWeatherData={selectedCityData} />
  ) : (
    <ListScreen
      weather={weather}
      onSearchEntered={handleSearch}
      onSelectedCityId={(cityId: number | null) => setSelectedCityId(cityId)}
    />
  );
}

export default App;
