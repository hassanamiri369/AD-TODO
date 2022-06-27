import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// todo context 
import TodoContextProvider from './pages/TodoApp/context/context';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <TodoContextProvider>

    
      <App />
      </TodoContextProvider>
    </BrowserRouter>
    
  </React.StrictMode>
);

