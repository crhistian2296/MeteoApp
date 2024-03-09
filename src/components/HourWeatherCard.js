import moment from 'moment-timezone';
import { useContext } from 'react';
import { capitalizeText } from '../helpers/capitalizeText';
import { GetIcon } from '../services/apiQuerys';
import { DataContext } from './data/DataContext';

/**
 * Recibe un objeto con la informacion concerniente a cada hora necesaria para representarla en una tarjeta
 * @param {Object} hourValues
 * @returns JSX Element
 */
export const HourWeatherCard = ({ hourvalues, timezone }) => {
  const { themeToggle } = useContext(DataContext);
  const { theme } = themeToggle;

  const { dt, temp, weather } = hourvalues;

  //Time
  const day = moment.tz.setDefault(timezone).unix(dt);
  const localTime = day.format('kk:mm');

  return (
    <div className='p-2 my-0'>
      <div
        className={`card ${
          theme && `bg-dark bg-opacity-25 text-light`
        } border border-3 border-secondary rounded d-flex flex-column justify-content-center align-items-center py-2`}
      >
        <div className='fs-4'>{localTime}</div>
        <GetIcon iconId={weather.at(0).icon} weatherMain={weather.at(0).main} size='80px'></GetIcon>
        <div className='d-flex flex-column gap-1'>
          <p className='m-0'>{capitalizeText(weather.at(0).description)}</p>
          <p className='m-0'>{`${temp.toFixed(1)}°C`}</p>
        </div>
      </div>
    </div>
  );
};
