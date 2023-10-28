//add onPress to the WeatherCardProps
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
  onCardClick: (id: number) => void;
}

function WeatherCard({ weatherData, onCardClick }: WeatherCardProps) {
  const { weather, main, name, sys, id } = weatherData;
  const iconUrl = `https://openweathermap.org/img/w/${weather[0]?.icon}.png`;

  return (
    <div
      onClick={() => onCardClick(id)}
      // className='rounded-lg shadow-lg p-6 flex items-center justify-between'
      className='bg-primary-widgetBackground rounded-3xl shadow-lg p-6 flex items-center justify-between'
    >
      <div className='flex items-center w-1/2'>
        <div className='flex flex-col'>
          <p className='text-6xl text-white mb-2'>{Math.round(main.temp)}°</p>
          <p className='text-lg text-white mb-2'>
            H: {Math.round(main.temp_max)}° L: {Math.round(main.temp_min)}°
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
          <h3 className='text-lg text-white mb-2'>{weather[0].description}</h3>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
