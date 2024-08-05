import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import SelectedTabContextProvider from './context/SelectedTabContextProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <SelectedTabContextProvider>
            <App />
        </SelectedTabContextProvider>
    </React.StrictMode>
);
