import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './client/pages/Home';
import Contact from './client/pages/Contact';
import Register from './client/pages/Register';
import Blog from './client/pages/Blog';
import About from './client/pages/About';
import Login from './client/pages/Login';
import Download from './client/pages/Download';
import PageNotFound from './shared/PageNotFound';

import AppLayout from './client/pages/AppLayout';
import Dashboard from './admin/pages/Dashboard';
import Driver from './admin/pages/Driver';

import Admin_Layout from './admin/pages/Admin_Layout';
import Onlinedriver from './admin/pages/Onlinedriver';
import Passengers from './admin/pages/Passengers';
import Rating from './admin/pages/Rating';
import Ride from './admin/pages/Ride';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="register" element={<Register />} />
          <Route path="blog" element={<Blog />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="download" element={<Download />} />
        </Route>
        <Route path="/admin/*" element={<Admin_Layout />} >
          <Route index element={<Dashboard />} />
          <Route path='onlinedriver' element={<Onlinedriver />} />
          <Route path='driverDetails' element={<Driver />} />
          <Route path='passengers' element={<Passengers />} />
          <Route path='Rating' element={<Rating />} />
          <Route path='rides' element={<Ride />} />

        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
