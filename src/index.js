import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { PaginationProvider } from 'components/context/pagination';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="goit-lessons-module5">
      <PaginationProvider>
        <App />
      </PaginationProvider>
    </BrowserRouter>
  </React.StrictMode>
);
