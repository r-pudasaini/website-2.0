import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PageContext from './contexts/PageContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PageContext>
      <App />
    </PageContext>
  </React.StrictMode>
);
