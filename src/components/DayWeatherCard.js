import { capitalizeText } from '../helpers/capitalizeText';
import { getIcon } from '../services/apiQuerys';

/**
 * Recibe un objeto con la informacion concerniente a cada dia necesaria para representarla en una tarjeta
 * @param {Object} dayValues
 * @returns JSX Element
 */
export const DayWeatherCard = ({ dayValues }) => {
  const { temp, feels_like, weather } = dayValues;
  const { day: tempDay, night: tempNight } = temp;
  const { day: feelsLikeDay, night: feelsLikeNight } = feels_like;

  return (
    <div className='p-2'>
      <div className='card border border-3 border-secondary rounded d-flex flex-row justify-content-center align-items-center'>
        <div>{getIcon(weather.at(0).icon, weather.at(0).main, '120px')}</div>
        <div className='d-flex flex-column'>
          <p className='m-0'>{capitalizeText(weather.at(0).description)}</p>
          <p className='m-0'>
            Daytime temperature: <strong>{tempDay.toFixed(1)}°C</strong>
          </p>
          <p className='m-0'>
            Nighttime temperature: <strong>{tempNight.toFixed(1)}°C</strong>
          </p>
          <p className='m-0'>
            Daytime real feel: <strong>{feelsLikeDay.toFixed(1)}°C</strong>
          </p>
          <p className='m-0'>
            Nighttime real feel: <strong>{feelsLikeNight.toFixed(1)}°C</strong>
          </p>
        </div>
      </div>
    </div>
  );
};
