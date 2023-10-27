import ListScreen from './pages/ListScreen';
import { useState } from 'react';
import { WeatherData } from './types';
import DetailedScreen from './pages/DetailedScreen';

// const propsExample = {
//   id: 1,
//   weather: [
//     {
//       description: 'clear sky',
//       icon: '01n',
//     },
//   ],
//   main: {
//     temp: 20.59,
//     temp_max: 21.67,
//     temp_min: 19.44,
//   },
//   name: 'London',
//   sys: {
//     country: 'GB',
//   },
// };

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
  return (
    //TODO : add back buton to detailed screen that will set selectedCityId to null
    selectedCityId && selectedCityData ? (
      <DetailedScreen cityWeatherData={selectedCityData} />
    ) : (
      <ListScreen
        weather={weather}
        onSearchEntered={handleSearch}
        onSelectedCityId={(cityId: number | null) => setSelectedCityId(cityId)}
      />
    )
  );
}

export default App;

//TODO: improvement 1 create a custom hook to handle the api call
// const {data, error, isLoading} = useFetchWeather(term);

//TODO: improvement 2 useContext to pass the weather data to the detailed screen
