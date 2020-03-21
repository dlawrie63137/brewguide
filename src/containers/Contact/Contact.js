import React, { Component } from 'react';
import './Contact.css';
import Navbar from '../../components/Navbar/Navbar';
import ContactInfo from './ContactInfo/ContactInfo';
import ContactForm from './ContactForm/ContactForm';
//import './ContactForm/ContactForm.css';
import Foot from '../../components/Foot/Foot';
import '../../components/Foot/Foot.css';


class Contact extends Component {
    render () {
        return (
            <div>
                <div>
                    <Navbar></Navbar>
                    <ContactInfo></ContactInfo>
                    <ContactForm></ContactForm>
                </div>
                <div className='footer'>
                    <Foot></Foot>
                </div>
            </div>
        );
    };

};

export default Contact;