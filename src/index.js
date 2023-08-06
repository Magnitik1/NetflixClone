import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MainPage from "./Components/MainPage/MainPage";
import Authorization from "./Components/Authorization/Authorization";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App MainPage={<MainPage/>} Authorization={<Authorization/>}/>
  </React.StrictMode>
);
