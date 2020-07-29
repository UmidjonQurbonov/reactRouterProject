import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../../../img/nat-4.jpg';
import img2 from '../../../../../img/nat-10.jpg';
import img3 from '../../../../../img/nat-6.jpg';


export default () => {
    return(
        <div className="section-blog py-4 bg-dark">
            <div className="container">
                <h4 className="text-capitalize text-success">
                    read our blog
                </h4>
                <div className="row py-4">
                    <div className="col-md-4 mb-2">
                        <div className="card border-dark">
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
                        <div className="card border-dark">
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
                        <div className="card border-dark">
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
                <div className="text-right">
                    <Link to='blog'>
                        <button className=" btn btn-success text-capitalize mt-2" style={{padding:'8px 30px',fontWeight:'500'}}>        
                            view more blog
                            <i className="fas fa-arrow-right ml-2"></i>
                        </button>
                    </Link>
                </div>
                
            </div>
        </div>
    )
}