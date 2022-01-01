import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HttpService from './service/req';
import { BrowserRouter } from 'react-router-dom';

// const httpClient = process.env.REACT_APP_BASE_URL;
const httpService = new HttpService('http://localhost:4000');

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App httpService={httpService} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
