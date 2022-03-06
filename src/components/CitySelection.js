import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCoordinates, weatherForecast } from '../actions/actions';
import { DataContext } from './data/DataContext';

// const crypto = require('crypto');

export const CitySelection = () => {
  const dispatch = useDispatch();
  const { searchCityField } = useContext(DataContext);
  const { city } = searchCityField;

  const { cities = [] } = useSelector((state) => state.location);

  // Persistencia del estado
  const reduxState = useSelector((state) => state);

  useEffect(() => {
    dispatch(getCoordinates(city));
  }, [city, dispatch]);

  const handleButton = (lat, lon) => {
    dispatch(weatherForecast(lat, lon));
    localStorage.setItem('reduxState', JSON.stringify(reduxState));
  };

  return (
    <div className='d-flex flex-column mx-5 my-3 col-md-5 col-lg-4'>
      <h6 className=' fs-4 p-3'>Select a city</h6>
      <ul className='list-group'>
        {cities.length !== 0 &&
          cities.map((city) => {
            const { lat, lon, name, state, country } = city;
            return (
              <button
                key={window.crypto.randomUUID()}
                className='list-group-item btn btn-outline-secondary'
                onClick={() => handleButton(lat, lon)}
              >
                {name}, {state}, {country}
              </button>
            );
          })}
      </ul>
    </div>
  );
};
