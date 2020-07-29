import React, { Component } from 'react';
import './home.scss';
import HomeHeader from './home-header/home-header';
import video from "../../../img/video.mp4";
import HomeMain from './home-main/home-main';
import Footer from '../../footer/footer';

class Home extends Component{
    render(){
        return(
            <div className="home py-5">
                <div className="home_bg-video">
                    <video className="bg-video-content" src={video} autoPlay loop muted/>
                </div>
                <div className="home_dark-overlay">
                    <HomeHeader/>
                    <HomeMain/>
                    <Footer/>
                </div>
            </div>
        )
    }
}

export default Home;