interface WeatherData {
  id: number;
  weather: {
    description: string;
    icon: string;
  }[];
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  sys: {
    country: string;
  };
}

interface WeatherCardProps {
  weatherData: WeatherData;
}

function WeatherCard({ weatherData }: WeatherCardProps) {
  const { weather, main, name, sys } = weatherData;
  const iconUrl = `https://openweathermap.org/img/w/${weather[0].icon}.png`;

  return (
    <div className='bg-purple-800 rounded-lg shadow-lg p-6 flex items-center justify-between'>
      <div className='flex items-center w-1/2'>
        <div className='flex flex-col'>
          <p className='text-2xl font-bold text-white mb-2'>
            {Math.round(main.temp)}°C
          </p>
          <p className='text-lg text-white mb-2'>
            High: {Math.round(main.temp_max)}°C | Low:{' '}
            {Math.round(main.temp_min)}°C
          </p>
          <p className='text-lg text-white'>
            {name}, {sys.country}
          </p>
        </div>
      </div>
      <div className='flex items-center w-1/2 justify-end'>
        <div className='flex flex-col items-end'>
          <img
            src={iconUrl}
            alt={weather[0].description}
            className='h-16 w-16 mr-4'
          />
          <h3 className='text-lg font-bold text-white mb-2'>
            {weather[0].description}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
