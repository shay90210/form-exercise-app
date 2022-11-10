//PRIMARY IMPORTS
import React from 'react';
import ReactDOM from 'react-dom/client';

//APP RENDERING
import App from './App';

//STYLING 
import './App.css';
import 'typeface-open-sans';
import 'typeface-roboto-condensed'

//BOOTSTRAP IMPORTS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-social/bootstrap-social.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

