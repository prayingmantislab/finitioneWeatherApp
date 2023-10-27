import bgNightSky from '../assets/bg-night-sky.png';
import house from '../assets/house.png';

interface DetailedScreenProps {
  cityWeatherData: {
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
  };
}
function DetailedScreen(props: DetailedScreenProps) {
  const { cityWeatherData } = props;
  const { weather, main, name, sys, id } = cityWeatherData;
  const firstDescription = weather[0]?.description || '';
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <div
        className='absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center z-0'
        style={{
          backgroundImage: `url(${bgNightSky})`,
        }}
      ></div>
      <div className='bg-opacity-75 rounded-lg  p-8 z-10'>
        <h2 className='text-3xl text-white mb-4'>{name}</h2>
        <p className='text-6xl text-white mb-4'>{main.temp}°</p>
        <p className='text-lg  text-white mb-4'>{firstDescription}</p>
        <p className='text-lg text-white mb-4'>High: {main.temp_max}°C</p>
        <p className='text-lg  text-white mb-4'>Low: {main.temp_min}°C</p>
        <img src={house} alt='House' className='w-64 mx-auto mt-4' />
      </div>
    </div>
  );
}

export default DetailedScreen;
