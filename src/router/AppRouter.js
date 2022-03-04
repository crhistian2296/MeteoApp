import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Next48hForecast from '../components/pages/Next48hForecast';
import TodayForecast from '../components/pages/TodayForecast';
import WeekForecast from '../components/pages/WeekForecast';
import Header from '../components/UI/Header';
import Navbar from '../components/UI/Navbar';

const AppRouter = () => {
  return (
    <div className=''>
      <Router>
        <Header />
        <Navbar />
        <div className='m-5 my-3'>
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
