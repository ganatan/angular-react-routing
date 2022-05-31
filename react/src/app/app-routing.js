import React from 'react';
import { Routes, Route } from "react-router-dom";

import Home from './modules/general/home/home';
import Notfound from './modules/general/not-found/not-found';

import About from './modules/general/about/about';
import Login from './modules/general/login/login';
import Signup from './modules/general/signup/signup';

import Contact from './modules/general/contact/contact';

class AppRouting extends React.Component {

  render() {
    return (
      <Routes>
        <Route index element={<Home />} />

        <Route path="about/*" element={<About />} />
        <Route path="login/*" element={<Login />} />
        <Route path="signup/*" element={<Signup />} />

        <Route path="contact/*" element={<Contact />} />

        <Route path="*" element={<Notfound />} />
        
      </Routes>
    )
  }

}

export default AppRouting;