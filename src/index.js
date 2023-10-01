import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { useState } from 'react';

import Topbar from './components/Topbar/Topbar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <>
    <div className='w-full h-screen flex items-center justify-center z-10'>
      <div className='w-1/2 sm:w-full border border-4 border-orange-400 overflow-hidden rounded-md bg-orange-50'>
        <React.StrictMode>
          <Topbar />
          <Header />
          <App />
          <Footer />
        </React.StrictMode>
      </div>
    </div>

  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
