import { Route, Routes } from 'react-router-dom';
import DetailedScreen from './pages/DetailedScreen';
import ListScreen from './pages/ListScreen';

const propsExample = {
  id: 1,
  weather: [
    {
      description: 'clear sky',
      icon: '01n',
    },
  ],
  main: {
    temp: 20.59,
    temp_max: 21.67,
    temp_min: 19.44,
  },
  name: 'London',
  sys: {
    country: 'GB',
  },
};
function App() {
  return (
    <Routes>
      <Route path='/' element={<ListScreen />} />
      <Route path='/detailed' element={<DetailedScreen {...propsExample} />} />
    </Routes>
  );
}

export default App;
