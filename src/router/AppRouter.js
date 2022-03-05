import { useContext } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { CitySelection } from '../components/CitySelection';
import { DataContext } from '../components/data/DataContext';
import Next48hForecast from '../components/pages/Next48hForecast';
import TodayForecast from '../components/pages/TodayForecast';
import WeekForecast from '../components/pages/WeekForecast';
import Header from '../components/UI/Header';
import Navbar from '../components/UI/Navbar';

const AppRouter = () => {
  const { themeToggle, searchCityField } = useContext(DataContext);
  const { theme } = themeToggle;
  const { city } = searchCityField;

  return (
    <div className={`mx-md-5 ${theme && 'bg-secondary bg-opacity-25'}`}>
      <Router>
        <Header />
        <Navbar />
        {Object.values(city).length > 0 && <CitySelection />}
        <div className='m-4'>
          <Routes>
            <Route path='today' element={<TodayForecast />} />
            <Route path='next48h' element={<Next48hForecast />} />
            <Route path='week' element={<WeekForecast />} />
            <Route path='' element={<TodayForecast />} />
            <Route path='*' element={<Navigate to='today' />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default AppRouter;
