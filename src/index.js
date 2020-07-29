import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';
import {BrowserRouter} from 'react-router-dom';


const application = (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)


ReactDOM.render(application, document.getElementById('root'));
