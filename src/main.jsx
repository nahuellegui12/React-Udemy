import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';
import './style.css'
// import { HelloWorldApp } from './HelloWorldApp'

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <FirstApp title="Hola, sot goku"/>
    </React.StrictMode>
);