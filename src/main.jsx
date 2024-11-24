import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App.jsx';
import './index.css';
import ShopContextProvider from './Context/ShopContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/Aura-Avenue"> {/* Set the basename */}
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </BrowserRouter>
);
