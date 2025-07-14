import React from 'react';
import './AboutUs.css';
import { Fade } from 'react-awesome-reveal';
import { FaLightbulb, FaUsers, FaRocket, FaHandshake } from 'react-icons/fa';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { Link } from 'react-router-dom';


const AboutUs = () => {
  return (
    <>
    <Navbar/>
    <div className="about-wrapper">
      <section className="about-hero">
        <Fade direction="down" triggerOnce>
          <h1>AboutUS <span>Us</span></h1>
          <p>Empowering brands through technology, creativity, and strategy. We’re your digital growth partner.</p>
        </Fade>
      </section>

      <section className="about-section mission">
        <Fade direction="up" triggerOnce>
          <h2>Our Mission</h2>
          <p>At Iyla Networks, our mission is to deliver cutting-edge digital solutions that help businesses grow, engage, and thrive in the digital world.</p>
        </Fade>
      </section>

      <section className="about-section values">
        <Fade direction="up" cascade triggerOnce>
          <h2>What We Value</h2>
          <div className="values-grid">
            <div className="value-card">
              <FaLightbulb className="icon" />
              <h3>Innovation</h3>
              <p>We think creatively and embrace new technology to keep you ahead.</p>
            </div>
            <div className="value-card">
              <FaUsers className="icon" />
              <h3>Collaboration</h3>
              <p>We partner with you transparently to deliver tailored solutions.</p>
            </div>
            <div className="value-card">
              <FaRocket className="icon" />
              <h3>Excellence</h3>
              <p>We deliver with quality, precision, and continuous improvement.</p>
            </div>
            <div className="value-card">
              <FaHandshake className="icon" />
              <h3>Trust</h3>
              <p>We build long-term relationships through honesty and accountability.</p>
            </div>
          </div>
        </Fade>
      </section>

      <section className="about-cta">
        <Fade direction="up" triggerOnce>
          <h2>Ready to grow your business?</h2>
          <Link to="/contactus" className="cta-button">Contact Us</Link>
        </Fade>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default AboutUs;
