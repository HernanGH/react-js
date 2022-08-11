import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBLlCNN55GygGcGkDTWaJunAGyl26B-Uuo",
  authDomain: "coderhouse-ecommerce-36839.firebaseapp.com",
  projectId: "coderhouse-ecommerce-36839",
  storageBucket: "coderhouse-ecommerce-36839.appspot.com",
  messagingSenderId: "804599053335",
  appId: "1:804599053335:web:737afa5e693157b74db052"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
