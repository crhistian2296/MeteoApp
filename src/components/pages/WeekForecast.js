import moment from 'moment';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { DataContext } from '../data/DataContext';
import { DayWeatherCard } from '../DayWeatherCard';
import { WeatherSheet } from '../WeatherSheet';

const WeekForecast = () => {
  const { searchCityField } = useContext(DataContext);
  const { city } = searchCityField;
  const {
    timezone_offset = 0,
    daily,
    current,
  } = useSelector((state) => state.location.weatherForecast);
  const { dt } = current;

  //Time
  const day = moment.unix(dt + timezone_offset);
  const localTime = day.format('dddd, kk:mm');

  return (
    <>
      <div className='display-4 mb-2'>Week Weather Forecast</div>
      <WeatherSheet localTime={`${localTime} ${city}`}>
        <div className='row row-cols-xxl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 g-3 p-4'>
          {daily.map((dayValues) => (
            <DayWeatherCard
              key={window.crypto.randomUUID()}
              dayValues={dayValues}
              timezone_offset={timezone_offset}
            />
          ))}
        </div>
      </WeatherSheet>
    </>
  );
};

export default WeekForecast;
