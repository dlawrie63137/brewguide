import React from 'react';
import Photo from '../../assets/img/people-having-a-drink-3641322.png'
import '../Welcome/Welcome.css';


const main = () => {
    return (
       <div className="container">
            <h3>MongoByte's Guide to U.S. Breweries</h3>
             <img className='welcome_photo' src={ Photo } alt='' />
        </div>
    );
};

export default main;
