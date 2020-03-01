import React from 'react';
import './Navbar.css';
import mblogo from '../../assets/img/mblogo_long_wd.png';

const navbar = () => {
    return (
        <div className='nav_nav'>
            <nav className="navbar navbar-light bg-light">
              {/* <a className="navbar-brand" href="#"> */}
                 <img src={ mblogo }  className="d-inline-block align-top" alt="" />
                    <ul className="nav_ul">
                        <li><a href='#'>Find a Brewery</a></li>
                        <li><a href='#'>About MongoByte</a></li>
                       <li><a href='#'>Contact Us</a></li>
                    </ul> 
              {/*  </a> */}
            </nav>
        </div>
    );
};

export default navbar;