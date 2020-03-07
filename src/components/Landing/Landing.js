import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Welcome from '../Welcome/Welcome';
import './Landing.css';
import Modal from '../UI/Modal/Modal';

class Landing extends Component {

    render() {
        return (
            <div>
                <Navbar></Navbar>
                <Welcome className='welcome' ></Welcome>
                <Modal></Modal>
            </div>
        )
    };
};

export default Landing;