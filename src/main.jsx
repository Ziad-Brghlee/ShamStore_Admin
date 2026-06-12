import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; 
import { Toaster } from 'react-hot-toast'; // استيراد التنبيهات
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Toaster 
        position="top-right" 
        reverseOrder={false}
      />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);