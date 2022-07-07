import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// obtenemos el div root (la unica linea de vanillaJS permitida)
const divRoot = document.getElementById('root')

// creamos el virtual dom
const root = ReactDOM.createRoot(divRoot);

// dibujar los componentes de react aca dentro
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
