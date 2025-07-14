import React from 'react';
import './ContactUs.css';
import { Fade } from 'react-awesome-reveal';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';

const ContactUs = () => {
  return (
    <>
    <Navbar/>
    <div className="contactus-wrapper">
      <section className="contactus-hero">
        <Fade direction="down" triggerOnce>
          <h1>Get in Touch<span>Touch</span></h1>
          <p>We’d love to hear from you! Reach out for inquiries, collaborations, or just to say hello.</p>
        </Fade>
      </section>

      <section className="contactus-content">
        <Fade cascade damping={0.2} triggerOnce>
          <div className="contactus-info">
            <h2>Contact Information</h2>
            <p><FaEnvelope /> hr@iylanetworks.com</p>
            <p><FaPhoneAlt /> +91 88812 88867</p>
            <p><FaMapMarkerAlt /> Palnadu, AP, India</p>
          </div>

          <form className="contactus-form">
            <h2>Send Us a Message</h2>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="5" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </Fade>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default ContactUs;
