import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const intViewportWidth = parseInt(window.innerWidth);
  const desktopScreen = intViewportWidth > 778;
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
            <form className='d-flex col'>
              <input className='form-control me-2' type='search' placeholder='Location' />
              <button className='btn btn-outline-dark' type='submit'>
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
    // <h1>Navbar</h1>
  );
};

export default Navbar;
