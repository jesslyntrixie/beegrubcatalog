import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Products from './components/Products';
import DemoVideo from './components/DemoVideo';
import Team from './components/Team';
import Exhibition from './components/Exhibition';
import SocialMedia from './components/SocialMedia';
import BMC from './components/BMC';
import FeedbackGrid from './components/FeedbackGrid';
import Reflections from './components/Reflections';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Features />
        <HowItWorks />
        <Benefits />
        <Products />
        <DemoVideo />
        <Team />
        <Exhibition />
        <SocialMedia />
        <BMC />
        <FeedbackGrid />
        <Reflections />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
