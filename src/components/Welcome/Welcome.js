import React from 'react';
import Photo from '../../assets/img/people-having-a-drink-3641322.png'
import '../Welcome/Welcome.css';


const main = () => {
    return (
       <div className="container">
            <h2>MongoByte's Guide to U.S. Breweries</h2>
            <img 
                className='welcome_photo' 
                src={ Photo } 
                alt='people drinking beer' 
            />
            <caption>Photo by Eugen Buzuk from Pexels</caption>
        </div>
    );
};

export default main;
