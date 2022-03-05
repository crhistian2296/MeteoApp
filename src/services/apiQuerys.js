import axios from 'axios';

/**
 *
 * @param {String} locationName
 * @returns {Array} cities
 */
export const getArrOfCoordinates = async (locationName) => {
  const res = await axios.get(
    `http://api.openweathermap.org/geo/1.0/direct?q=${locationName}&limit=5&appid=dc95562776b6b4eaf655bac72e985edb`.trim()
  );
  return res;
};

/**
 *
 * @param {String} lat
 * @param {String} lon
 * @returns {Object} weather object
 */
export const getWeatherForecast = async (lat, lon) => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=dc95562776b6b4eaf655bac72e985edb`.trim()
    );

    return res;
  } catch (err) {
    console.log(err);
  }
};

/**
 *
 * @param {String} iconId
 * @returns image element
 */
export const getIcon = (iconId) => {
  return <img src={`http://openweathermap.org/img/wn/${iconId}.png`} alt='weather.png' />;
};
