import React from 'react';
import './App.css';
import Home from './components/Home.js';
import AboutMe from './components/AboutMe.js';
import Mintonomics from './components/Mintonomics.js';
import Footer from './components/Footer';
import Header from './components/Header.js';
import ScrollToTop from './components/ScrollToTop';



function App() {
    return (
      <div>
        <ScrollToTop />
        <Header />

        <Home />
        <AboutMe/>
        <Mintonomics />
        
        <Footer />
      </div>
    );
  }

export default App;
