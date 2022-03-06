import moment from 'moment';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { capitalizeText } from '../../helpers/capitalizeText';
import { getIcon } from '../../services/apiQuerys';
import { DataContext } from '../data/DataContext';
import { WeatherSheet } from '../WeatherSheet';

const CurrentForecast = () => {
  const { searchCityField } = useContext(DataContext);
  const { city } = searchCityField;
  const { timezone_offset = 0, current } = useSelector((state) => state.location.weatherForecast);
  const {
    dt,
    temp,
    feels_like,
    pressure,
    humidity,
    clouds,
    uvi,
    visibility,
    wind_speed,
    wind_deg,
    weather,
  } = current;

  //Time
  const day = moment.unix(dt + timezone_offset);
  const localTime = day.format('dddd, kk:mm');

  return (
    <>
      <div className='display-4 mb-2'>Current Weather</div>

      <WeatherSheet localTime={`${localTime} ${city}`}>
        <div className='card-body'>
          <div className='row'>
            <div className='col-sm-6 col-lg-3 d-flex flex-column align-items-center align-items-sm-start my-3 my-sm-0'>
              <div>{getIcon(weather.at(0).icon, weather.at(0).main)}</div>
            </div>
            <div className='col-sm-6 col-lg-3 d-flex flex-column align-items-center align-items-sm-start my-3 my-sm-0'>
              <div>
                <p className='m-0 display-2'>{`${temp.toFixed(1)}°C`}</p>
                <p className='card-text fs-5 m-0'>{`Real feel: ${feels_like}°C`}</p>
                <p className='card-text fs-5'>{capitalizeText(`${weather.at(0).description}`)}</p>
              </div>
            </div>
            <div className='col-sm-6 col-lg-3 d-flex flex-column align-items-center align-items-sm-start justify-content-center my-3 my-sm-0'>
              <div>
                <p className='card-text fs-5 m-0'>{`Pressure: ${pressure}hPa`}</p>
                <p className='card-text fs-5 m-0'>{`Humidity: ${humidity}%`}</p>
                <p className='card-text fs-5 m-0'>{`Clouds: ${clouds}%`}</p>
                <p className='card-text fs-5'>{`Visibility: ${visibility}m`}</p>
              </div>
            </div>
            <div className='col-sm-6 col-lg-3 d-flex flex-column align-items-center align-items-sm-start justify-content-center my-3 my-sm-0'>
              <div>
                <p className='card-text fs-5 m-0'>{`UV: ${uvi}`}</p>
                <p className='card-text fs-5 m-0'>{`Wind speed: ${wind_speed}m/s`}</p>
                <p className='card-text fs-5'>{`Wind degrees: ${wind_deg}°`}</p>
              </div>
            </div>
          </div>
        </div>
      </WeatherSheet>
    </>
  );
};

export default CurrentForecast;

// <>
//   <div className='display-4 mb-2'>Current Weather</div>

//   <div className='card'>
//     <div className='card-header'>
//       <div className='display-6'>{`${localTime}`}</div>
//     </div>
//     <div className='card-body'>
//       <div className='row'>
//         <div className='col-sm-6 col-lg-3 d-flex flex-column align-items-center align-items-sm-start my-3 my-sm-0'>
//           <div>{getIcon(weather.at(0).icon, weather.at(0).main)}</div>
//         </div>
//         <div className='col-sm-6 col-lg-3 d-flex flex-column align-items-center align-items-sm-start my-3 my-sm-0'>
//           <div>
//             <p className='m-0 display-2'>{`${temp.toFixed(1)}°C`}</p>
//             <p className='card-text fs-5 m-0'>{`Real feel: ${feels_like}°C`}</p>
//             <p className='card-text fs-5'>{capitalizeText(`${weather.at(0).description}`)}</p>
//           </div>
//         </div>
//         <div className='col-sm-6 col-lg-3 d-flex flex-column align-items-center align-items-sm-start justify-content-center my-3 my-sm-0'>
//           <div>
//             <p className='card-text fs-5 m-0'>{`Pressure: ${pressure}hPa`}</p>
//             <p className='card-text fs-5 m-0'>{`Humidity: ${humidity}%`}</p>
//             <p className='card-text fs-5 m-0'>{`Clouds: ${clouds}%`}</p>
//             <p className='card-text fs-5'>{`Visibility: ${visibility}%`}</p>
//           </div>
//         </div>
//         <div className='col-sm-6 col-lg-3 d-flex flex-column align-items-center align-items-sm-start justify-content-center my-3 my-sm-0'>
//           <div>
//             <p className='card-text fs-5 m-0'>{`UV: ${uvi}`}</p>
//             <p className='card-text fs-5 m-0'>{`Wind speed: ${wind_speed}`}</p>
//             <p className='card-text fs-5 m-0'>{`Wind gust: ${wind_gust}`}</p>
//             <p className='card-text fs-5'>{`Wind degree: ${wind_deg}`}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </>
