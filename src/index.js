import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './Components/Authorization/firebase';
import { Provider } from 'react-redux';
import { store } from "./Components/Authorization/store";
import './Components/Authorization/firebase';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider> 
  </React.StrictMode>
);
