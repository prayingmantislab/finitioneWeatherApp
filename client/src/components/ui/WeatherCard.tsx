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
  if (!weatherData) return null;
  const { weather, main, name, sys, id } = weatherData;
  const iconUrl =
    weather && weather.length > 0
      ? `https://openweathermap.org/img/w/${weather[0].icon}.png`
      : '';
  const altText = weather && weather.length > 0 ? weather[0].description : '';

  return (
    <div
      onClick={() => onCardClick(id)}
      className='bg-primary-widgetBackground trapezoid rounded-3xl shadow-lg p-6 flex items-center justify-between'
    >
      <div className='flex items-center w-1/2'>
        <div className='flex flex-col'>
          <p className='text-6xl text-white mb-2'>{Math.round(main?.temp)}°</p>
          <p className='text-lg text-white mb-2'>
            H: {Math.round(main?.temp_max)}° L: {Math.round(main?.temp_min)}°
          </p>
          <p className='text-lg text-white'>
            {name}, {sys?.country}
          </p>
        </div>
      </div>
      <div className='flex items-center w-1/2 justify-end'>
        <div className='flex flex-col items-end'>
          <img src={iconUrl} alt={altText} className='h-16 w-16 mr-4' />
          <h3 className='text-lg text-white mb-2'>{weather[0]?.description}</h3>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
