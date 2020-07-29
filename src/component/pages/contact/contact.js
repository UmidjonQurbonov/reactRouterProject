import React, { Component } from 'react';
import './contact.scss';
import Header from '../../header/header';
import img from '../../../img/blog.png'
import ContactMain from './contact-main/contact-main';
import Footer from '../../footer/footer';

class Contact extends Component{
    render(){
        return(
            <div className="contact">
                <Header imgSrc={img} title="Contact Us"/>
                <ContactMain/>
                <Footer />
            </div>
        )
    }
}

export default Contact;