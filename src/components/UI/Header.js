import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { DataContext } from '../data/DataContext';

const Header = () => {
  const { themeToggle } = useContext(DataContext);
  const { toggle } = themeToggle;

  const handleToggle = () => toggle();
  return (
    <div className='d-flex px-5 justify-content-between align-items-center'>
      <h1 className='display-1'>
        Meteo<span className='text-muted'>App</span>
      </h1>
      <div className='form-check form-switch'>
        <input
          className='form-check-input'
          type='checkbox'
          role='switch'
          id='flexSwitchCheckDefault'
          onChange={handleToggle}
        />
        <label className='form-check-label' htmlFor='flexSwitchCheckDefault'>
          <FontAwesomeIcon icon={faCircleHalfStroke} />
        </label>
      </div>
    </div>
  );
};

export default Header;
