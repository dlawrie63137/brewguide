import React from 'react';
import './Modal.css';


const modal = () => {
    
    function yesClickHandler() {
        
    }
    
    function noClickHandler() {
        alert('You must be at least 21 years old.')
    }

    return (
       <div className='showModal'>
           <h3>Are You 21 or Older?</h3>
           <button className='yes' onClick={yesClickHandler}>YES</button>
           <button className='no' onClick={noClickHandler}>NO</button>
       </div>  
    )
};

export default modal;