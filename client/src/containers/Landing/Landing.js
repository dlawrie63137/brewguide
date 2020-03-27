import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Welcome from '../../components/Welcome/Welcome';
import './Landing.css';
import Modal from '../../components/UI/Modal/Modal';

class Landing extends Component {
    constructor (props) {
        super (props);
        this.noClickHandler=this.noClickHandler.bind(this);
        
        this.state = {
        modalVisible: false,
        modalErrorFlag: false,
        modalErrorMsg: 'You must be at least 21 years old!'
         }
    }
    
    componentDidMount() {
        setTimeout(() => { 
            this.setState({modalVisible: true})
            console.log('show modal after 3 seconds')
            console.log(this.state.modalVisible)
        }, 3000);
        
    };

    yesClickHandler = (e) => {
        console.log('inside yesClickHandler')
        this.setState({modalVisible: false})
    }
    
    noClickHandler = (e) => {
        console.log('inside noClickHandler')
        this.setState({modalErrorFlag: true})
    }

    render() {
        
        return (
            <div>
                <Navbar showModal={this.state.modalVisible}></Navbar>
                <Welcome className='welcome' ></Welcome>
                <Modal 
                    noClicked={this.noClickHandler}
                    yesClicked={this.yesClickHandler}
                    showModal={this.state.modalVisible}
                    modalErrorFlag={this.state.modalErrorFlag}
                    modalErrorMsg={this.state.modalErrorMsg}>
                </Modal>
            </div>
        )
    };
};

export default Landing;