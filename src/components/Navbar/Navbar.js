import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/img/mblogo_long_wd.png';

const navbar = (props) => {

    if(!props.showModal) { 
        return (
            <div className='nav_nav'>
                <nav className="navbar navbar-light bg-light">
                    <Link to='http://www.mongobyte.com'>
                    <img src={logo}  className="d-inline-block align-top" alt=""></img></Link>
                        <ul className="nav_ul">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='find'>Find a Brewery</Link></li>
                            <li><Link to='/about'>About MongoByte</Link></li>
                            <li><Link to='/contact'>Contact Us</Link></li>
                        </ul> 
                </nav>
                
            </div>
        );
    };

        return (
            <div className='nav_nav'>
                <nav className="navbar navbar-light bg-light">
                    <img src={logo}  className="d-inline-block align-top" alt="" />
                    <ul className="nav_ul">
                        <li>Home</li>
                        <li>Find a Brewery</li>
                        <li>About MongoByte</li>
                        <li>Contact Us</li>
                    </ul> 
                </nav>
            </div>
        );
    };


export default navbar;