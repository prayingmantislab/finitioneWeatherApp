import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import WeatherCard from '../components/ui/WeatherCard.jsx';
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
  const [term, setTerm] = useState<string>('');
  const [error, setError] = useState<null | string>(null);
  const handleSearch = async (term: string) => {
    try {
      await onSearchEntered(term);
      setTerm('');
      setError(null);
    } catch (error) {
      setError('There was an error retrieving the data. Please try again.');
    }
  };

  return (
    <div className='mx-auto bg-primary-bg h-screen w-screen'>
      <div className='rounded-lg shadow-lg p-6'>
        <h2 className='text-2xl mb-4 text-left text-white'>Weather</h2>
        <div className='flex items-center border-gray-300 py-2'>
          <FontAwesomeIcon
            icon={faSearch}
            className='absolute left-8 text-gray-200'
          />
          <input
            type='text'
            placeholder='Search for a city or location'
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSearch(term);
              }
            }}
            className='bg-primary-input rounded-full appearance-none w-full py-2 px-4 text-gray-200 text-center'
          />
        </div>
        {error && <p>{error}</p>}

        <div className='mt-4'>
          {(weather.length === 1 && weather[0].cod === '404') ||
          (weather.length === 1 && weather[0].cod === '400') ? (
            <p className='text-lg text-white mb-2 text-center'>
              {weather[0].message} Try again
            </p>
          ) : (
            weather.map((data) => (
              <WeatherCard
                onCardClick={() => onSelectedCityId(data.id)}
                key={data.id}
                weatherData={data}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default ListScreen;
