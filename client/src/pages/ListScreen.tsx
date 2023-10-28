import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';

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
    <div className='max-w-md mx-auto mt-8 bg-primary-bg h-screen'>
      <div className='rounded-lg shadow-lg p-6'>
        <h2 className='text-2xl mb-4 text-left text-white'>Weather</h2>
        <div className='flex items-center border-gray-300 py-2'>
          <input
            type='text'
            placeholder='Search for a city or airport'
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSearch(term);
              }
            }}
            className='bg-primary-input rounded-full appearance-none w-full py-2 px-4 text-gray-200'
          />

          {/* <FontAwesomeIcon icon={faSearch} className='mr-2' /> */}
        </div>
        {error && <p>{error}</p>}

        <div className='mt-4'>
          {
            //if weather is empty return null else map over the weather array
            //clear the input field after the search and the try again message after the search
            weather.length === 1 && weather[0].cod === '404' ? (
              // <p className='text-lg text-white mb-2'>
              //   City not found, check your typing and try again.
              // </p>
              <p className='text-lg text-white mb-2'>{weather[0].message}</p>
            ) : (
              weather.map((data) => (
                <WeatherCard
                  onCardClick={() => onSelectedCityId(data.id)}
                  key={data.id}
                  weatherData={data}
                />
              ))
            )
          }
        </div>
      </div>
    </div>
  );
}

export default ListScreen;
