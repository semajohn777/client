import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CommentContextProvider } from './component/context/CommentContext';
import { UserContextProvider } from './component/context/UserConxtent';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <CommentContextProvider>
        <App />
      </CommentContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);


