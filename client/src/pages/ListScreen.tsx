import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';

import WeatherCard from '../components/ui/WeatherCard.jsx';
import { Link } from 'react-router-dom';
import { WeatherData } from '@/types.js';

interface ListScreenProps {
  weather: WeatherData[];
  onSearchEntered: (term: string) => void;
  onSelectedCityId: (id: number) => void;
}

function ListScreen({
  weather,
  onSearchEntered,
  onSelectedCityId,
}: ListScreenProps) {
  const [term, setTerm] = useState('');
  return (
    <div className='max-w-md mx-auto mt-8'>
      <div className='bg-red rounded-lg shadow-lg p-6'>
        <h2 className='text-2xl font-bold mb-4 text-left'>Weather</h2>
        <div className='flex items-center border-b border-gray-300 py-2'>
          <input
            type='text'
            placeholder='Search for a city or airport'
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                onSearchEntered(term);
              }
            }}
            className='bg-purple-800 rounded-full appearance-none border-2 border-purple-500 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
          />

          {/* <FontAwesomeIcon icon={faSearch} className='mr-2' /> */}
        </div>

        <div className='mt-4'>
          {weather.map((data) => (
            <WeatherCard
              onCardClick={() => onSelectedCityId(data.id)}
              key={data.id}
              weatherData={data}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListScreen;
