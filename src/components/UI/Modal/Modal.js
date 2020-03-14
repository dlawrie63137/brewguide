import React, { Component } from 'react';
import './Modal.css';


class Modal extends Component {
    
    render() {

        if(!this.props.showModal) {
            return (
                null
            )
        }
    
        if(this.props.showModal && this.props.modalErrorFlag) {
            return (
               <div className='showModal'>
                   <h6 className='errorMessage'>{this.props.modalErrorMsg}</h6> 
                   <h3>Are You 21 or Older?</h3>
                   <button className='yes' onClick={this.props.yesClicked}>YES</button>
                   <button className='no' onClick={this.props.noClicked}>NO</button>
                </div>  
            );
        }

        if(this.props.showModal) {
            return (
               <div className='showModal'>
                   <h3>Are You 21 or Older?</h3>
                   <button className='yes' onClick={this.props.yesClicked}>YES</button>
                   <button className='no' onClick={this.props.noClicked}>NO</button>
                </div>  
            );
        }
    } 
};

export default Modal;