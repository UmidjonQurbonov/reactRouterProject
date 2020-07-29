import React, { Component } from 'react';
import './navbar.scss';
import {NavLink} from 'react-router-dom';
import imgBrand from '../../img/favicon.png';

class navbar extends Component{
    render(){
        return(
            <div className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
                <div className="container">
                    <a href="/" className="navbar-brand d-flex align-items-center">
                        <img src={imgBrand} className="navbar-brand-img mr-2" width="40px" alt="Rasm topilmadi"/>
                        <span className="navbar-brand-text">NavbarBrand</span>
                    </a>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <i className="navbar-toggler-icon"></i>
                    </button>
                    <div className="navbar-collapse collapse" id="navbarCollapse">
                        <ul className="navbar-nav ml-auto  text-capitalize">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link" exact>home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="about" className="nav-link">about us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='service' className="nav-link">services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='blog' className="nav-link">blog</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='contact' className="nav-link">contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default navbar;