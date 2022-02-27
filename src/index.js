import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ProductContextProvider } from './context/ProductContext';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ProductContextProvider>
    <App />
    </ProductContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
