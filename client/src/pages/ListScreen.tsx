import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';

import WeatherCard from '../components/ui/WeatherCard.jsx';
import { Link } from 'react-router-dom';

interface WeatherData {
  id: number;
  name: string;
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
  sys: {
    country: string;
  };
}

function ListScreen() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<WeatherData[]>([]);
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const handleSearch = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = await response.json();
    console.log(data);
    setWeather([data]);
    console.log(weather);
  };

  return (
    <div className='max-w-md mx-auto mt-8'>
      <div className='bg-red rounded-lg shadow-lg p-6'>
        <h2 className='text-2xl font-bold mb-4 text-left'>Weather</h2>
        <div className='flex items-center border-b border-gray-300 py-2'>
          <input
            type='text'
            placeholder='Search for a city or airport'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSearch();
              }
            }}
            className='bg-purple-800 rounded-full appearance-none border-2 border-purple-500 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
          />

          {/* <FontAwesomeIcon icon={faSearch} className='mr-2' /> */}
        </div>

        <div className='mt-4'>
          {weather.map((data) => (
            <Link to='/detailed'>
              <WeatherCard
                // onClick={() => handleCardClick()}
                key={data.id}
                weatherData={data}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListScreen;
