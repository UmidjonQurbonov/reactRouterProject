import React, { Component } from 'react';
import img1 from '../../../../img/nat-4.jpg'
import img2 from '../../../../img/nat-6.jpg'
import img3 from '../../../../img/nat-8.jpg'

class BlogMain extends Component {
    state = {  }
    render() {
        return (
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-4 mb-2">
                        <div className="card">
                            <div className="w-100 position-relative">
                                <img src={img1} className="img-fluid " alt="" style={{height:'200px',width:'100%'}}/>
                            </div>
                            <div className="card-body">
                                <h5 className="text-capitalize">blog post one</h5>
                                <small className="text-muted">Written by Jeff on 05/20</small>
                                <hr/>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla facilis, sequi excepturi, quisquam, dignissimos molestiae dicta dolore dolores quas vel sunt placeat tempora expedita suscipit.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-2">
                        <div className="card">
                            <div className="w-100 position-relative">
                                <img src={img2} className="img-fluid " alt="" style={{height:'200px',width:'100%'}}/>
                            </div>
                            <div className="card-body">
                                <h5 className="text-capitalize">blog post one</h5>
                                <small className="text-muted">Written by Karen on 05/22</small>
                                <hr/>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla facilis, sequi excepturi, quisquam, dignissimos molestiae dicta dolore dolores quas vel sunt placeat tempora expedita suscipit.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-2">
                        <div className="card">
                            <div className="w-100 position-relative" >
                                <img src={img3} className="img-fluid " alt="" style={{height:'200px',width:'100%'}}/>
                            </div>
                            <div className="card-body">
                                <h5 className="text-capitalize">blog post three</h5>
                                <small className="text-muted">Written by Harry on 05/23</small>
                                <hr/>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla facilis, sequi excepturi, quisquam, dignissimos molestiae dicta dolore dolores quas vel sunt placeat tempora expedita suscipit.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default BlogMain;