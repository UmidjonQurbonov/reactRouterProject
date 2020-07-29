import React,{Component} from 'react';
import './about.scss';
import Header from '../../header/header';
import aboutImg from '../../../img/nat-7.jpg';
import AboutMain from './about-main/about-main';
import Footer from '../../footer/footer';

class About extends Component{
    state = {
        headerTitle : 'WE MAKE PEOPLE GENIUNELY HAPPY',
        imgSrc: aboutImg
    }
    render(){
        const { headerTitle, imgSrc } = this.state;
        return(
            <div className="about">
                <Header title={headerTitle} imgSrc={imgSrc}/>
                <AboutMain/>
                <Footer/>
            </div>
        )
    }
}

export default About;