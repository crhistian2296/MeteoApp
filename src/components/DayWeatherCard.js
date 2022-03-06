import { capitalizeText } from '../helpers/capitalizeText';
import { getIcon } from '../services/apiQuerys';

export const DayWeatherCard = ({ dayValues }) => {
  const { dt, temp, feels_like, weather } = dayValues;
  const { day: tempDay, night: tempNight } = temp;
  const { day: feelsLikeDay, night: feelsLikeNight } = feels_like;

  return (
    <div className='p-2'>
      <div className='card border border-3 border-secondary rounded d-flex flex-row justify-content-center align-items-center'>
        <div>{getIcon(weather.at(0).icon, weather.at(0).main, '120px')}</div>
        <div className='d-flex flex-column'>
          <p className='m-0'>{capitalizeText(weather.at(0).description)}</p>
          <p className='m-0'>{`Daytime temperature: ${tempDay.toFixed(1)}°C`}</p>
          <p className='m-0'>{`Nighttime temperature: ${tempNight.toFixed(1)}°C`}</p>
          <p className='m-0'>{`Daytime real feel: ${feelsLikeDay.toFixed(1)}°C`}</p>
          <p className='m-0'>{`Nighttime real feel: ${feelsLikeNight.toFixed(1)}°C`}</p>
        </div>
      </div>
    </div>
  );
};
