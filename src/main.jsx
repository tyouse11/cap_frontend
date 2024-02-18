import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// Import BrowserRouter and rename it to Router
import { BrowserRouter as Router } from "react-router-dom";

// Wrap the App component with the Router component to enable the router features.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <App />
    </Router>
    
  </React.StrictMode>,
  document.getElementById("root")
)
