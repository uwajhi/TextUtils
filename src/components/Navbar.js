import React from 'react';
import PropTypes from 'prop-types';

const Navbar = (props) => {

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">About</a>
              </li>
            </ul>
            {props.mode === 'dark' && <div className="btn-group border border-white me-4" role="group">
              <button 
                  className='btn btn-dark'
                  onClick={() => props.toggleDarkColor('#042743')} // Dark color button
                  style={{backgroundColor: '#042743', height:'40px', width:'40px'}}>
                </button>
                <button 
                  className='btn btn-danger'
                  onClick={() => props.toggleDarkColor('red')}
                  style={{backgroundColor: 'red', height:'40px', width:'40px' }}>
                </button>
                <button 
                  className='btn btn-success'
                  onClick={() => props.toggleDarkColor('green')}
                  style={{backgroundColor: 'green', height:'40px', width:'40px' }}>
                </button>
                <button 
                  className='btn btn-primary'
                  onClick={() => props.toggleDarkColor('blue')}
                  style={{backgroundColor: 'blue', height:'40px', width:'40px' }}>
                </button>
            </div>}

            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode}</label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
  toggleDarkColor: PropTypes.func.isRequired,
};

// Navbar.defaultProps = {
//     title: 'Set Title here',
//     items: ['No Items added']
// };


{/* <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {props.items.map((element, index) => (
            <li className="nav-item" key={index}>
              <a className="nav-link active" href="/">{element} </a>
            </li>
        ) 
        )}
        </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-primary mx-1 my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
    </nav> */}