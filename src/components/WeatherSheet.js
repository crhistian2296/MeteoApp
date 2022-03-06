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
