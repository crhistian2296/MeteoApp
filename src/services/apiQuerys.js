import axios from 'axios';

/**
 *
 * @param {String} locationName
 * @returns {Array}
 */
export const getCoordinates = async (locationName) => {
  const res = await axios.get(
    `http://api.openweathermap.org/geo/1.0/direct?q=${locationName}&limit=5&appid=dc95562776b6b4eaf655bac72e985edb`.trim()
  );
  return res;
};

/**
 *
 * @param {String} lat
 * @param {String} lon
 * @returns {Object}
 */
export const getCurrentWeather = async (lat, lon) => {
  try {
    const res = axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly,daily&appid=dc95562776b6b4eaf655bac72e985edb`.trim()
    );
    const { timezone_offset } = res;
    const { dt, temp, feels_like, weather } = res.current;
    const localTime = parseInt(timezone_offset) + parseInt(dt);

    return { localTime, temp, feels_like, weather };
  } catch (err) {
    console.log(err);
  }
};

export const getNext48Hours = async (lat, lon) => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,current,daily&appid=dc95562776b6b4eaf655bac72e985edb`.trim()
    );

    const { hourly, timezone_offset } = res;
    if (hourly.length !== 0) return { hourly, timezone_offset };
    return console.warn('No data for this location');
  } catch (err) {
    console.log(err);
  }
};

/**
 *
 * @param {String} lat
 * @param {String} lon
 * @returns {Object}
 */
export const getNextWeek = async (lat, lon) => {
  try {
    const res = axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,current,hourly&appid=dc95562776b6b4eaf655bac72e985edb`.trim()
    );

    const { daily, timezone_offset } = res;
    if (daily.length !== 0) return { daily, timezone_offset };
    return console.warn('No data for this location');
  } catch (err) {
    console.log(err);
  }
};

/**
 *
 * @param {String} iconId
 * @returns <img/>
 */
export const getIcon = (iconId) => {
  return <img src={`http://openweathermap.org/img/wn/${iconId}.png`} alt='weather.png' />;
};
