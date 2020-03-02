import React from 'react';
import Navbar from '../Navbar/Navbar';
import Welcome from '../Welcome/Welcome';
import './Landing.css';

const landing = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Welcome className='welcome' ></Welcome>
        </div>
    );
};

export default landing;