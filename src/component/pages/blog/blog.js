import React, { Component } from 'react';
import './blog.scss';
import Header from '../../header/header';
import img from '../../../img/blog8_1.png';
import Footer from '../../footer/footer'

import BlogMain from './blog-main/blog-main';

class Blog extends Component{
    state={
        title:"Read our Blog"
    }
    render(){
        const {title} = this.state;
        return(
            <div className="blog bg-dark">
                <Header title={title} imgSrc={img}/>
                <BlogMain/>
                <Footer/>
            </div>
        )
    }
}

export default Blog;