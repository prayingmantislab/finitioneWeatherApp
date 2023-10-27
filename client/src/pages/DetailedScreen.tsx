import bgNightSky from '../assets/bg-night-sky.png';
import house from '../assets/house.png';

export interface DetailedScreenProps {
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
function DetailedScreen(props: DetailedScreenProps) {
  return (
    <div className='bg-blue-900 h-screen flex flex-col items-center justify-center'>
      <div
        className='absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center z-0'
        style={{
          backgroundImage: `url(${bgNightSky})`,
        }}
      ></div>
      <div className='bg-opacity-75 rounded-lg  p-8 z-10'>
        <h2 className='text-3xl text-white mb-4'>{props.name}</h2>
        <p className='text-6xl text-white mb-4'>{props.main.temp}°</p>
        <p className='text-lg  text-white mb-4'>
          {props.weather[0].description}
        </p>
        <p className='text-lg text-white mb-4'>High: {props.main.temp_max}°C</p>
        <p className='text-lg  text-white mb-4'>Low: {props.main.temp_min}°C</p>
        <img src={house} alt='House' className='w-64 mx-auto mt-4' />
      </div>
    </div>
  );
}

export default DetailedScreen;
