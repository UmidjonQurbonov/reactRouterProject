import React, { Component } from 'react';
import './header.scss';

class Header extends Component{
    render(){
        const props = this.props;
        return(
            <div className="header position-relative">
                <div className="dark-overlay">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-12 col-lg-7">
                                <h1 className="header_title pb-3">
                                    {props.title} 
                                </h1>
                                <p className="header_text d-flex align-items-center pb-2">
                                    <i className="fas fa-check fa-2x p-1"></i>
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi distinctio iusto, perspiciatis mollitia natus harum</span>
                                </p>
                                <p className="header_text d-flex align-items-center pb-2">
                                    <i className="fas fa-check fa-2x p-1"></i>
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi distinctio iusto, perspiciatis mollitia natus harum</span>
                                </p>
                            </div>
                            <div className="col-lg-5 d-none d-lg-block">
                                <img src={props.imgSrc} className="img-fluid rounded-circle" alt="Topilmadi"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;