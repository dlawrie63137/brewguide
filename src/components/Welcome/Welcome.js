import React from 'react';
import Photo from '../../assets/img/people-having-a-drink-3641322.png'
import '../Welcome/Welcome.css';
import Foot from '../Foot/Foot';


const Welcome = () => {
    return (
       <div className="container">
            <h2>MongoByte Brewery Guide</h2>
            <img 
                className='welcome_photo' 
                src={ Photo } 
                alt='people drinking beer' 
            />
            <caption>Photo by Eugen Buzuk from Pexels</caption>
            <Foot></Foot>
        </div>
        
    );
};

export default Welcome;
