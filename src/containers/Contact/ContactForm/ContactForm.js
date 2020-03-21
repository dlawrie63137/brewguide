import React, { Component } from 'react';
import axios from 'axios';
import './ContactForm.css';

class contactForm extends Component  {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            message: '',
            email: '',
            sent: false,
            buttonText: 'Send Message'
        }
      }

      handleSubmit(e){
        e.preventDefault()

        this.setState({
           buttonText: '...sending'
  })

  let data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
  }
  
  axios.post('API_URI', data)
  .then( res => {
      this.setState({ sent: true }, this.resetForm())
  })
  .catch( () => {
    console.log('Message not sent')
  })
}

resetForm = () => {
  this.setState({
      name: '',
      message: '',
      email: '',
      buttonText: 'Message Sent'
  })
}
    
    render() {
     return(
       <div className="contact">
           <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
           <div className="form-group">
                <input type="text" className="form-control" placeholder='Name' value={this.state.name} onChange={this.onNameChange.bind(this)} />
            </div>
            <div className="form-group">
                <input type="email" className="form-control" placeholder='Email Address' aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
     );
    }
    
      onNameChange(event) {
        this.setState({name: event.target.value})
      }
    
      onEmailChange(event) {
        this.setState({email: event.target.value})
      }
    
      onMessageChange(event) {
        this.setState({message: event.target.value})
      }
  };
    
export default contactForm;