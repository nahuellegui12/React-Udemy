import React from 'react';
import ReactDOM from 'react-dom/client';
// import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp.jsx'
import './style.css'
// import { HelloWorldApp } from './HelloWorldApp'

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <CounterApp value={2}/>
    </React.StrictMode>
);