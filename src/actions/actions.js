import { getArrOfCoordinates, getWeatherForecast } from '../services/apiQuerys';
import { types } from '../types/types';

// Sync
const send = (res, name) => ({
  type: types.send,
  payload: res,
  name: name,
});

// Async
export const getCoordinates = (locationName) => {
  return (dispatch) => {
    getArrOfCoordinates(locationName)
      .then((res) => dispatch(send(res.data, 'cities')))
      .catch((err) => console.error(err));
  };
};

export const weatherForecast = (lat, lon) => {
  return (dispatch) => {
    getWeatherForecast(lat, lon)
      .then((res) => dispatch(send(res.data, 'weatherForecast')))
      .catch((err) => console.error(err));
  };
};
