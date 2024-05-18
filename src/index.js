import React from 'react';
import ReactDOM from 'react-dom/client';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>

        <App defaultCity="shiraz"/>
        <div className="open-source">
            <small>
                <hr/>
                <a
                    href="https://github.com/maryost1998/weather-react-app"
                    id="code-source"
                    target="_blank"
                    rel="noreferrer"
                    className="open-source-link"
                >Open-source code
                </a>
                {" "}by Maryam Ostovar
            </small>


        </div>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
