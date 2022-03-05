import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { DataContext } from '../data/DataContext';

// Estilo pila del componente
const intViewportWidth = parseInt(window.innerWidth);
const desktopScreen = intViewportWidth > 778;

const Navbar = () => {
  const { searchCityField } = useContext(DataContext);
  const { setCity } = searchCityField;

  const { formValues, handleInputChange, reset } = useForm({
    location: '',
  });

  const { location } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (location) {
      setCity(location);
      reset();
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-md navbar-light bg-light ${
        desktopScreen && 'rounded-pill'
      } rounded-md mx-md-5 px-md-3`}
    >
      <div className='container-fluid'>
        <div className='navbar-collapse justify-content-between '>
          <div className='nav navbar-nav'>
            <ul className='nav-fill nav pills'>
              <NavLink className='nav-item nav-link fs-2 mx-md-3' to='/today'>
                Hoy
              </NavLink>
              <NavLink className='nav-item nav-link fs-2 mx-md-3' to='/next48h'>
                48H
              </NavLink>
              <NavLink className='nav-item nav-link fs-2 mx-md-3' to='/week'>
                Week
              </NavLink>
            </ul>
          </div>

          <div className='navbar-nav col-md-6'>
            <form className='d-flex col' onSubmit={handleSubmit}>
              <input
                className='form-control me-2'
                name='location'
                onChange={handleInputChange}
                value={location}
                type='search'
                placeholder='Location'
              />
              <button className='btn btn-outline-dark' type='submit'>
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
