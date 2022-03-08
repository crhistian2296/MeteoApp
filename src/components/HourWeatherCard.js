import moment from 'moment';
import { capitalizeText } from '../helpers/capitalizeText';
import { getIcon } from '../services/apiQuerys';

/**
 * Recibe un objeto con la informacion concerniente a cada hora necesaria para representarla en una tarjeta
 * @param {Object} hourValues
 * @param {Number} timezone_offset
 * @returns JSX Element
 */
export const HourWeatherCard = ({ hourvalues, timezone_offset }) => {
  const { dt, temp, weather } = hourvalues;

  //Time
  const day = moment.unix(dt + timezone_offset);
  const localTime = day.format('kk:mm');

  return (
    <div className='p-2'>
      <div className='card border border-3 border-secondary rounded d-flex flex-row justify-content-center align-items-center'>
        <div>{getIcon(weather.at(0).icon, weather.at(0).main, '80px')}</div>
        <div className='d-flex flex-column'>
          <p className='m-0'>{capitalizeText(weather.at(0).description)}</p>
          <p className='m-0'>{`${temp.toFixed(1)}°C`}</p>
          <p className='m-0'>{localTime}</p>
        </div>
      </div>
    </div>
  );
};
