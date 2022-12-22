import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { PaginationProvider } from 'components/context/pagination';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './Redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="goit-lessons-module6">
        <PaginationProvider>
          <App />
        </PaginationProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
