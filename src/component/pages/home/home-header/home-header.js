import React from 'react';
import './home-header.scss';
export default () => {
    return(
    <div className="home-header">
        <div className="container position-relative">
            <div className="row align-items-center">
                <div className="col-lg-8 text-light">
                    <h1 className="mb-5 display-4">
                        <b>Outdoors</b> is Wherre <b>Life Happens</b>
                    </h1>
                    <div className="d-flex mb-3">
                        <i className="fas fa-check fa-2x bg-light text-primary p-1" style={{borderRadius:'5px'}}></i>
                        <p className="ml-3 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, tempore iusto in minima facere dolorem!</p>
                    </div>
                    <div className="d-flex  mb-3">
                        <i className="fas fa-check fa-2x bg-light text-primary p-1" style={{borderRadius:'5px'}}></i>
                        <p className="ml-3 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, tempore iusto in minima facere dolorem!</p>
                    </div>
                    <div className="d-flex  mb-3">
                        <i className="fas fa-check fa-2x bg-light text-primary p-1" style={{borderRadius:'5px'}}></i>
                        <p className="ml-3 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, tempore iusto in minima facere dolorem!</p>
                    </div>
                    
                </div>
                <div className="col-lg-4 d-none d-lg-block">
                    <div className="home_form-group bg-primary ml-auto px-3 py-2">
                        <div className="pt-2 text-center text-light">
                            <h3 className="text-capitalize">sign up now</h3>
                            <p>Please fill out this form to register</p>
                        </div>
                        <hr/>
                        <form className="form" >
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Username"/>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Email"/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Password"/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Confirm Password"/>
                            </div>
                            <div className="form-group">
                                <input type="submit" className="btn btn-outline-light btn-block" value="Submit"/>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}