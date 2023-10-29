import ListScreen from './pages/ListScreen';
import useFetchWeather from './hooks/useFetchWeather';
import DetailedScreen from './pages/DetailedScreen';
import { useState } from 'react';

function App() {
  const [term, setTerm] = useState<string>('');
  const { data: weatherCityData } = useFetchWeather(term);

  const handleSearch = (newTerm: string) => {
    setTerm(newTerm);
  };

  const [selectedCityId, setSelectedCityId] = useState<number | null>(null);
  const selectedCityData = selectedCityId
    ? weatherCityData.find((data) => data.id === selectedCityId)
    : null;

  return selectedCityId && selectedCityData ? (
    <DetailedScreen cityName={selectedCityData.name} />
  ) : (
    <ListScreen
      weather={weatherCityData}
      onSearchEntered={handleSearch}
      onSelectedCityId={(cityId: number | null) => setSelectedCityId(cityId)}
    />
  );
}

export default App;
