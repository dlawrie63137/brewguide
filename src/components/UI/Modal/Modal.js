import React, { Component } from 'react';
import './Modal.css';


class Modal extends Component {

    state = {
        visible: false,
        errorFlag: false,
        error: 'You must be at least 21 years old!'
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
        this.setState({errorFlag: true})
    }

    render() {
        const showModal = this.state.visible;
        const errorFlag = this.state.errorFlag;
        
        if(!showModal) {
            return (
                null
            )
        }
    
        if(showModal && errorFlag) {
            return (
               <div className='showModal'>
                   <h6 className='errorMessage'>You must be at least 21 years old!</h6> 
                   <h3>Are You 21 or Older?</h3>
                   <button className='yes' onClick={this.yesClickHandler}>YES</button>
                   <button className='no' onClick={this.noClickHandler}>NO</button>
                </div>  
            );
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