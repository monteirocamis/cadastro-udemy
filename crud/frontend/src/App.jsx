
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import React from 'react';

import './App.css';
import {  Router } from 'react-router-dom';

import Logo from './components/Logo';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Routes from './Routes';

export default props => 
  <div className="app">
    <Logo/>
    <Nav/>
    <Routes/>
    <Footer/>
  </div>
