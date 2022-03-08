/**
 * Ficha contenedor de la informacion meteorologica
 * @param {String} localtime
 * @returns JSX Element
 */
export const WeatherSheet = ({ children, localTime }) => {
  return (
    <>
      <div className='card'>
        <div className='card-header'>
          <div className='display-6'>{`${localTime}`}</div>
        </div>
        {children}
      </div>
    </>
  );
};
