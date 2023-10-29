import bgNightSky from '../assets/bg-night-sky.png';
import house from '../assets/house.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
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
  const { weather, main, name } = cityWeatherData;
  const firstDescription = weather[0]?.description || '';
  //add a back  button that renders the listScreen
  //add a back button icon using fontawesome
  //locate the icon in the top left corner
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <div
        className='absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center z-0'
        style={{
          backgroundImage: `url(${bgNightSky})`,
        }}
      ></div>
      <div className='bg-opacity-75 z-10 justified-start'>
        <button
          onClick={() => window.location.reload()}
          className='absolute top-0 left-0 text-white text-2xl m-4'
        >
          <FontAwesomeIcon icon={faArrowLeft} />{' '}
        </button>

        <h2 className='text-3xl text-white mb-4'>{name}</h2>
        <p className='text-6xl text-white mb-4'>{Math.round(main.temp)}°</p>
        <p className='text-lg  text-white mb-4'>{firstDescription}</p>
        <p className='text-lg text-white mb-4'>
          H: {Math.round(main.temp_max)}° L: {Math.round(main.temp_min)}°
        </p>
        <img src={house} alt='House' className='w-64 mx-auto mt-4' />
      </div>
    </div>
  );
}

export default DetailedScreen;
