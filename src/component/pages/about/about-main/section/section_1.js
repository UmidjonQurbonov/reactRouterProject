import React from 'react';
import './section_1.scss';

export default (props) => {
    const title = ['YOU\'RE GOING TO FALL IN LOVE WITH NATURE','LIVE ADVENTURES LIKE YOU NEVER HAVE BEFORE']
    

    const componentOne = title.map(index => { 
            return(
                <div className="py-2" key={index}>
                    <h5 className="text-muted">{index}</h5>
                    <p className="text-muted">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
                    </p>
                </div>  
            )
    })

    return(
        <div className="section_1">
            <div className="container">
                <h1 className="section_1-h1 text-center mt-3">
                    EXCITING TOURS FOR ADVENTUROUS PEOPLE
                </h1>
                <div className="row py-5 align-items-center">
                    <div className="col-md-5">
                        <div className="pb-3">
                            <img src={props.imgSrc} alt="Topilmadi" className="img-fluid rounded-circle"/>
                        </div>
                    </div>
                    <div className="col-md-7">
                        {componentOne}
                    </div>
                </div>
            </div>
        </div>
    )
}

