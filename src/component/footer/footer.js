import React from 'react';
import './footer.scss';
import img from '../../img/logo-green-small-2x.png';

export default () => {
    const vaqt = () => {
        const date = new Date();
        const yil = date.getUTCFullYear();
        
        return yil;
    }
    return(
        <div className="footer py-5">
            <div className="container">
                <img src={img} alt="" className="mx-auto py-3 d-block"/>
                <div className="row mx-auto pt-4">
                    <div className="col-md-6 justify-content-between text-muted border-left border-right">
                        <p>
                            Start Bootstrap has everything you need to get your new website up and running in no time! Choose one of our open source, free to download, and easy to use themes! No strings attached!
                        </p>
                    </div>
                    <div className="col-md-6 text-muted border-left border-right">
                        <p>
                            Start Bootstrap has everything you need to get your new website up and running in no time! Choose one of our open source, free to download, and easy to use themes! No strings attached! Choose one of our open source, free to download, and easy to use themes! No strings attached! 
                        </p>
                    </div>
                </div>
                <h5 className="pt-5 text-light text-center">Copyright &copy;{vaqt()}. Author QurbonovUmidjon.</h5>
            </div>
        </div>
    )
}