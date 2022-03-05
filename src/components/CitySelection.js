import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCoordinates /* , weatherForecast */ } from '../actions/actions';
import { DataContext } from './data/DataContext';

export const CitySelection = () => {
  const dispatch = useDispatch();
  const { searchCityField } = useContext(DataContext);
  const { city } = searchCityField;
  const { cities = [] } = useSelector((state) => state.location);
  useEffect(() => {
    dispatch(getCoordinates(city));
    // dispatch(weatherForecast('40.4167047', '-3.7035825'));
  }, [city, dispatch]);
  // console.log(cities);
  return (
    <div className='d-flex flex-column mx-5 my-3'>
      <h6 className=' fs-4 p-3'>Select a city</h6>
      <ul className='list-group'>
        {cities.length !== 0 &&
          cities.map((city, i) => {
            return (
              <Link key={i} className='list-group-item' to='/'>
                {city.name}, {city.state}, {city.country}
              </Link>
            );
          })}
      </ul>
    </div>
  );
};
