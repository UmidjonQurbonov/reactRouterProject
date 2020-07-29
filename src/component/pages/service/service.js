import React, { Component } from 'react';
import './service.scss';
import Header from '../../header/header';
import imgSrc from '../../../img/nat-2-large.jpg';
import ServiceMain from './service-main/service-main';
import Footer from '../../footer/footer'

class Service extends Component{
    state={
        title:'MOST POPULAR TOURS',
        imgSrc
    }
    render(){
        const {title, imgSrc} = this.state;
        return(
            <div className="service">
                <Header title={title} imgSrc={imgSrc}/>
                <ServiceMain/>
                <Footer/>
            </div>
        )
    }
}

export default Service;
