import moment from 'moment';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { DataContext } from '../data/DataContext';
import { HourWeatherCard } from '../HourWeatherCard';
import { WeatherSheet } from '../WeatherSheet';

const Next48hForecast = () => {
  const { searchCityField } = useContext(DataContext);
  const { city } = searchCityField;
  const {
    timezone_offset = 0,
    hourly,
    current,
  } = useSelector((state) => state.location.weatherForecast);
  const { dt } = current;

  //Time
  const day = moment.unix(dt + timezone_offset);
  const localTime = day.format('dddd, kk:mm');

  return (
    <>
      <div className='display-4 mb-2'>Next 48h Weather Forecast</div>
      <WeatherSheet localTime={`${localTime} ${city}`}>
        <div className='row row-cols-xl-6 row-cols-lg-4 row-cols-sm-3 row-cols-2 g-3 p-4'>
          {hourly.map((hourvalues) => (
            <HourWeatherCard
              key={window.crypto.randomUUID()}
              hourvalues={hourvalues}
              timezone_offset={timezone_offset}
            />
          ))}
        </div>
      </WeatherSheet>
    </>
  );
};

export default Next48hForecast;
