import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Global Styles
import '@/styles/globals.css';
import '@/styles/theme.css';
import '@/styles/animations.css';

// FontAwesome Setup
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

// Add all FontAwesome icons to library
library.add(fas, fab);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);