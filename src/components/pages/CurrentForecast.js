import moment from 'moment-timezone';
import { useSelector } from 'react-redux';
import { capitalizeText } from '../../helpers/capitalizeText';
import { GetIcon } from '../../services/apiQuerys';
import { WeatherSheet } from '../WeatherSheet';
import BlanckPage from './BlanckPage';

/**
 * Ruta que muestra informacion meteorologica actual
 * @returns JSX Element
 */
const CurrentForecast = () => {
  // Obtencion de informacion concerniente a localizacion y meteorologia
  const reduxState = useSelector((state) => state);
  const { selectedCity, weatherForecast = {} } = reduxState.location;

  // Valida si la informacion existe para renderizar el componente
  const { current, timezone } = weatherForecast;
  if (!current) return <BlanckPage />;

  const { dt, temp, feels_like, pressure, humidity, clouds, uvi, visibility, wind_speed, weather } =
    current;

  // Manejo de tiempo en segundos en formato unix con la libreria momentJS
  const day = moment.tz.setDefault(timezone).unix(dt);
  const localTime = day.format('dddd, kk:mm');

  return (
    <>
      <div className='display-5 mb-3'>Current Weather</div>

      <WeatherSheet localTime={`${localTime} ${selectedCity}`}>
        <div className='card-body py-3'>
          <div className='row m-auto' style={{ maxWidth: '1000px' }}>
            <div className='col-sm-6 col-lg-3 d-flex flex-column align-items-center align-items-sm-start pe-sm-0'>
              <GetIcon iconId={weather.at(0).icon} weatherMain={weather.at(0).main}></GetIcon>
            </div>
            <div className='col-sm-6 col-lg-3 d-flex flex-column align-items-center justify-content-center align-items-sm-start mb-2 my-sm-0 ps-sm-0'>
              <div style={{ minWidth: '160px' }}>
                <p className='m-0 display-1 mb-3'>
                  <strong>{`${temp.toFixed(1)}°C`}</strong>
                </p>
                <p className='card-text fs-5 m-0'>{`Real feel: ${feels_like}°C`}</p>
                <p className='card-text fs-5'>{capitalizeText(`${weather.at(0).description}`)}</p>
              </div>
            </div>
            <div className='col-sm-6 col-lg-3 d-flex flex-column align-items-center align-items-sm-start justify-content-center my-2 my-sm-0 ps-1 ps-sm-5 ps-lg-4'>
              <div style={{ minWidth: '160px' }}>
                <p className='card-text fs-5 m-0'>{`Pressure: ${pressure}hPa`}</p>
                <p className='card-text fs-5 m-0'>{`Humidity: ${humidity}%`}</p>
                <p className='card-text fs-5 m-0'>{`Clouds: ${clouds}%`}</p>
                <p className='card-text fs-5'>{`Visibility: ${visibility}m`}</p>
              </div>
            </div>
            <div className='col-sm-6 col-lg-3 d-flex flex-column align-items-center align-items-sm-start justify-content-start  justify-content-md-center my-2 my-sm-0'>
              <div style={{ minWidth: '160px' }}>
                <p className='card-text fs-5 m-0'>{`UV: ${uvi}`}</p>
                <p className='card-text fs-5 m-0'>{`Wind: ${wind_speed}m/s`}</p>
              </div>
            </div>
          </div>
        </div>
      </WeatherSheet>
    </>
  );
};

export default CurrentForecast;
