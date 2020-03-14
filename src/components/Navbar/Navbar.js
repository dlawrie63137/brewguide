import React from 'react';
import './Navbar.css';
import mblogo from '../../assets/img/mblogo_long_wd.png';

const navbar = (props) => {

    if(!props.showModal) { 
        return (
            <div className='nav_nav'>
                <nav className="navbar navbar-light bg-light">
                    <a href='http://www.mongobyte.com'>
                    <img src={ mblogo }  className="d-inline-block align-top" alt=""></img></a>
                        <ul className="nav_ul">
                            <li><a href='#'>Find a Brewery</a></li>
                            <li><a href='#'>About MongoByte</a></li>
                            <li><a href='#'>Contact Us</a></li>
                        </ul> 
                </nav>
            </div>
        );
    };

        return (
            <div className='nav_nav'>
                <nav className="navbar navbar-light bg-light">
                  {/* <a className="navbar-brand" href="#"> */}
                     <img src={ mblogo }  className="d-inline-block align-top" alt="" />
                        <ul className="nav_ul">
                            <li>Find a Brewery</li>
                            <li>About MongoByte</li>
                            <li>Contact Us</li>
                        </ul> 
                  {/*  </a> */}
                </nav>
            </div>
        );
    };


export default navbar;