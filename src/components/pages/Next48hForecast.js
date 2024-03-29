import moment from 'moment-timezone';
import { useSelector } from 'react-redux';
import { HourWeatherCard } from '../HourWeatherCard';
import { WeatherSheet } from '../WeatherSheet';

/**
 * Ruta que muestra informacion meteorologica concerniente a las siguientes 48h
 * @returns JSX Element
 */
const Next48hForecast = () => {
  // Obtencion de informacion concerniente a localizacion y meteorologia
  const reduxState = useSelector((state) => state);
  const { selectedCity } = reduxState.location;
  const { timezone = '', hourly, current } = reduxState.location.weatherForecast;
  const { dt } = current;

  // Manejo de tiempo en segundos en formato unix con la libreria momentJS
  const day = moment.tz.setDefault(timezone).unix(dt);
  const localTime = day.format('dddd, kk:mm');

  return (
    <>
      <div className='display-5 mb-3'>Next 48h Weather Forecast</div>
      <WeatherSheet localTime={`${localTime} ${selectedCity}`}>
        <div className='row row-cols-xl-6 row-cols-lg-4 row-cols-sm-3 row-cols-2 g-3 p-4 pb-2'>
          {hourly.map((hourvalues) => (
            <HourWeatherCard
              key={window.crypto.randomUUID()}
              hourvalues={hourvalues}
              timezone={timezone}
            />
          ))}
        </div>
      </WeatherSheet>
    </>
  );
};

export default Next48hForecast;
