import React, { Component } from 'react';
import './service-main.scss'

class ServiceMain extends Component {
    state = { 
        service:{
            title:['one', 'two', 'three', 'four']
        }
    }

   
    render() {
        
        let box = this.state.service.title.map((index) => {
                return(
                    <div className="col-sm-6 col-md-3 mb-3" key={index}>
                    <div className="card text-center">
                        <div className="card-header bg-dark">
                            <h5 className='text-capitalize text-light py-2'>service plan {index}</h5>
                        </div>
                        <div className="card-body">
                            <h4 className="text-muted text-capitalize">$55.99/month</h4>
                            <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, optio.</small></p>
                            <ul className="list-group text-capitalize">
                                <li className="list-group-item py-1"><i className="fas fa-check mr-2"></i><b>feature one</b></li>
                                <li className="list-group-item py-1"><i className="fas fa-check mr-2"></i><b>feature two</b></li>
                                <li className="list-group-item py-1"><i className="fas fa-check mr-2"></i><b>feature three</b></li>
                                <li className="list-group-item py-1"><i className="fas fa-check mr-2"></i><b>feature four</b></li>
                            </ul>
                            <button className="btn btn-success btn-block mt-3"><small><b>Get In</b></small></button>
                        </div>
                        <div className="card-footer">
                            <p className="mb-0 small text-muted"><b>One Year Plan</b></p>
                        </div>
                    </div>
                </div>)
                
                })
            
            
        return (
            <div className="serviceMain py-5">
                <div className="container">
                    <div className="row">
                       {box}
                    </div>
                </div>
            </div>
        );
    }
}

export default ServiceMain;