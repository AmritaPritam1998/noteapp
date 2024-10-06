import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './components/AppContext.jsx'
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>

  </StrictMode>,
)
