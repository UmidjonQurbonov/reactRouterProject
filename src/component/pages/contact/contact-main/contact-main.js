import React, { Component } from 'react';
import './contact-main.scss'

class ContactMain extends Component {
    state = { 
        test: '________________________',
        firstName: '',
        lastName: '',
        email: '',
        // phoneNumber: 0,
        // twoNumber:'____',
        sevenNumber:'',
        message: ''

     }

     firstNameChange = (event) => {
        this.setState({
            firstName: event.target.value
        })
     }
     lastNameChange = (event) => {
        this.setState({
            lastName: event.target.value
        })
     }
     emailChange = (event) => {
        this.setState({
            email: event.target.value
        })
     }
     numberChange = (event) => {
        let number = event.target.value;
            if(Number(number)){
                this.setState({
                    sevenNumber:number
                })
            }
     }

     textareaChange = (event) => {
            this.setState({
                message: event.target.value
            })
     }

     resetValue = () => {
         this.setState({
             firstName:'',
             lastName:'',
             email:'',
             sevenNumber:'',
            message:''
         })

     }

     onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            firstName:'',
            lastName:'',
            email:'',
            sevenNumber:'',
            message: ''
        })
     }

    render() {
        const {test, firstName,lastName, email, sevenNumber, message} = this.state;
        return (
            <div className="contact_main  py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 mb-2">
                            <div className="card px-3">
                                <div className="card-body">
                                    <h5 className="card-title pb-0">First Name</h5>
                                    <p className="text-muted ml-2 text-truncate"><small><b>{firstName || test}</b></small></p>
                                    <h5 className="card-title pb-0">Last Name</h5>
                                    <p className="text-muted ml-2 text-truncate"><small><b>{lastName || test}</b></small></p>
                                    <h5 className="card-title pb-0">Email</h5>
                                    <p className="text-muted ml-2 text-truncate"><small><b>{email || test}</b></small></p>
                                    <h5 className="card-title pb-0">Phone Number</h5>
                                    <p className="text-muted ml-2 text-truncate"><small><b>+998 {sevenNumber || test}</b></small></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <div className="card px-3">
                                <div className="card-body">
                                    <h4 className="card-title text-center">Please fill out this form to contact us</h4>
                                    <hr/>
                                    <form onSubmit={this.onSubmit}>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <input onChange={(event) => this.firstNameChange(event)} type="text" className="mb-3 form-control contact_input" placeholder="First Name" value={firstName} required/>
                                            </div>
                                            <div className="col-sm-6 mb-3">
                                                <input onChange={(event) => this.lastNameChange(event)} type="text" className="form-control contact_input" placeholder="Last Name" value={lastName} required/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <input onChange={(event) => this.emailChange(event)} type="email" className="mb-3 form-control contact_input" value={email} placeholder="Email" required/>
                                            </div>
                                            <div className="col-sm-6">
                                                <input onChange={(event) => this.numberChange(event)} type="text" className="mb-3 form-control contact_input" placeholder="Phone Number" value={sevenNumber} required/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <textarea onChange={(event => this.textareaChange(event))} className="form-control contact_input" placeholder="Message" value={message} rows="3"></textarea>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-sm-6 mb-3">
                                                <input onClick={this.resetValue} type="reset" className="btn btn-danger btn-block" value="Reset"/>
                                            </div>
                                            <div className="col-sm-6">
                                                <input  type="submit" className="btn btn-success btn-block" value="Submit"/>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactMain;