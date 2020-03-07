import React, { Component } from 'react';
import './Modal.css';


class Modal extends Component {

    state = {
        visible: false
    };
    
    componentDidMount() {
        setTimeout(() => { 
            this.setState({visible: true})
            console.log('show modal after 3 seconds')
            console.log(this.state.visible)
        }, 3000);
        
    };

    yesClickHandler = (e) => {
    this.setState({visible: false})
    }
    
    noClickHandler = (e) => {
        alert('You must be at least 21 years old.')
    }

    render() {
        const showModal = this.state.visible;
        
        if(!showModal) {
            return (
                null
            )
        }
    
        if(showModal) {
            return (
               <div className='showModal'>
                   <h3>Are You 21 or Older?</h3>
                   <button className='yes' onClick={this.yesClickHandler}>YES</button>
                   <button className='no' onClick={this.noClickHandler}>NO</button>
                </div>  
            );
        }
    } 
};

export default Modal;