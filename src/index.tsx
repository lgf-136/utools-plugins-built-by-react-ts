import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './styles/reference.css';

/*
 * yarn add todomvc-app-css
 * import 'todomvc-app-css/index.css'
 */

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<React.StrictMode>
  <App />
</React.StrictMode>);
