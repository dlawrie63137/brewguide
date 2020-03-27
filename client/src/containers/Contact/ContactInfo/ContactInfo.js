import React from 'react';
import { Link } from 'react-router-dom';
import './ContactInfo.css';


const contactInfo = () => {

    return (
        <div className='container'>
            <div className='contactInfo-div'>
                <div className='contact'>
                    <h3 className='contactGreet'>Contact MongoByte</h3>
                </div>
                <div className='contactInfo'>
                    <h5 className='email'><u>Email:</u><Link to='mailto:admin@mongobyte.com'> admin@mongobyte.com</Link></h5>
                    <div className='streetAddress'>
                        <h5 className='mailto'>Send mail to:</h5>
                        <h5 className='name'>MongoByte</h5> 
                        <h5 className='address1'>1218 Bliss Dr</h5>
                        <h5 className='address2'>St. Louis, MO 63137</h5>
                    </div>
                </div>
                <div className='choice'>
                    <h4 className='choose'>Or just fill out the form below:</h4>
                </div>
            </div>
        </div>
    );
};

export default contactInfo;