import React, { Component } from 'react';
import './Contact.css';
import Navbar from '../../components/Navbar/Navbar';
import ContactInfo from './ContactInfo/ContactInfo';
import Foot from '../../components/Foot/Foot';

class Contact extends Component {
    render () {
        return (
            <div className='contact'>
                <Navbar></Navbar>
                <ContactInfo></ContactInfo>
                <Foot className='foot'></Foot>
            </div>
        );
    };

};

export default Contact;