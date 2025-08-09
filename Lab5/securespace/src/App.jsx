// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import ContactForm from './components/ContactForm';
import BugBounties from './components/BugBounties';
import { TestimonialCarousel } from './components/Carousel';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <TestimonialCarousel />
            </>
          } />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/bounties" element={<BugBounties />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
