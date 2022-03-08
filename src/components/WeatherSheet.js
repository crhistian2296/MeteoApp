import { useContext } from 'react';
import { DataContext } from './data/DataContext';

/**
 * Ficha contenedor de la informacion meteorologica
 * @param {String} localtime
 * @returns JSX Element
 */
export const WeatherSheet = ({ children, localTime }) => {
  const { themeToggle } = useContext(DataContext);
  const { theme } = themeToggle;

  return (
    <>
      <div className={`card ${theme && `bg-dark bg-opacity-25 text-light`}`}>
        <div className='card-header'>
          <div className='display-6'>{`${localTime}`}</div>
        </div>
        {children}
      </div>
    </>
  );
};
