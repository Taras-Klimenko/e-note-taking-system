import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { AuthSessionContextProvider } from './auth/AuthSessionContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthSessionContextProvider>
        <App />
      </AuthSessionContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
