import React, { Component } from 'react';
import Navbar from '../component/navbar/navbar';
import './app.scss';
import {Route} from 'react-router-dom';
import Home from '../component/pages/home/home';
import About from '../component/pages/about/about';
import Service from '../component/pages/service/service';
import Blog from '../component/pages/blog/blog';
import Contact from '../component/pages/contact/contact';


class App extends Component{
    render(){
        return(
            <div className="app">
                <Navbar/>
                <Route path='/' exact component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/service' component={Service}/>
                <Route path='/blog' component={Blog}/>
                <Route path='/contact' component={Contact}/>
            </div>
        )
    }
}

export default App;