import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return(
        <div className="section-service py-4 text-center bg-light">
            <div className="container">
                <h2 className="py-2 text-capitalize">
                    at your service
                </h2>
                <hr className="bg-primary mx-auto" style={{height:'2px',width:'70px'}}/>
                <div className="row">
                    <div className="col-lg-3 col-md-6 mb-2">
                        <div>
                            <i className="fas fa-gem fa-4x mb-3 text-primary"></i>
                            <h5 className="text-capitalize">
                                sturdy themes
                            </h5>
                            <p className="text-muted">
                                Our themes are updated regularly to keep them bug free! 
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-2">
                        <div>
                            <i className="fas fa-laptop-code fa-4x mb-3 text-primary"></i>
                            <h5 className="text-capitalize">
                                Up To Date  
                            </h5>
                            <p className="text-muted">
                                All dependencies are kept current to keep things fresh.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-2">
                        <div>
                            <i className="fas fa-globe fa-4x mb-3 text-primary"></i>
                            <h5 className="text-capitalize">
                                Ready To Publish
                            </h5>
                            <p className="text-muted">
                                You can use this design as is, or you can make changes!
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-2">
                        <div>
                            <i className="fas fa-heart fa-4x mb-3 text-primary"></i>
                            <h5 className="text-capitalize">
                                Made With Love
                            </h5>
                            <p className="text-muted">
                                Is it really open source if it's not made with love?
                            </p>
                        </div>
                    </div>
                </div>
                <Link to='service'>
                    <button className="btn btn-primary text-uppercase mt-2" style={{borderRadius:'25px',padding:'10px 40px',fontWeight:'500'}}>        
                        Service
                    </button>
                </Link>
                
            </div>
        </div>
    )
}