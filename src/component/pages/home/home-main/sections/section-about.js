import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return(
        <div className="section-about py-4 text-center bg-primary text-light">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <h2 className="py-2">
                            We've got what you need !
                        </h2>
                        <hr className="bg-light mx-auto" style={{height:'2px',width:'70px'}}/>
                        <p className="pt-3 pb-2" style={{color:'rgba(255,255,255,.7)'}}>
                            Start Bootstrap has everything you need to get your new website up and running in no time! Choose one of our open source, free to download, and easy to use themes! No strings attached!
                        </p>
                        <Link to='about'>
                            <button className="btn btn-light text-uppercase mt-2 mb-3" style={{borderRadius:'25px',padding:'10px 40px',fontWeight:'500'}}>
                                about us
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}