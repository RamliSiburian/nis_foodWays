import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// navigation / routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation';
import AffterLogin from './pages/Affter-login';
import PrivateRoute from './pages/Private-routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navigation />
      <Routes>
        <Route exacr path='/' element={<App />}></Route>
        {/* Private Routes */}
        <Route exact path='/' element={<PrivateRoute />} >
          <Route exact path='/Logins' element={<AffterLogin />}> </Route>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode >
);
