import React from 'react';

import Navbar from '../components/Navbar';
import EmailForm from '../components/EmailForm';
import Footer from '../components/Footer';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <Navbar />
      <div className="contact-us-wrapper">
        <div className="get-in-touch">Get in Touch</div> 
        <EmailForm />
        <Footer />
      </div>
    </div>
  )
}

export default ContactUs
