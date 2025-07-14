import React from 'react';
import './ServicesPage.css';
import { Fade } from 'react-awesome-reveal';
import { FaBullhorn, FaLaptopCode, FaMobileAlt, FaChartLine, FaUserTie } from 'react-icons/fa';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const ServicesPage = () => {
  return (
    <>
    <Navbar/>
    <div className="services-wrapper">
      <section className="services-hero">
        <Fade direction="down" triggerOnce>
          <h1>Our Services<span>Services</span></h1>
          <p>Discover the premium solutions we offer to elevate your business to the next level.</p>
        </Fade>
      </section>

      <section className="services-list">
        <Fade cascade damping={0.2} triggerOnce>
          <div className="service-card">
            <FaBullhorn className="icon" />
            <h2>Digital Marketing</h2>
            <p>Strategic campaigns, social media management, and SEO to grow your online presence.</p>
          </div>
          <div className="service-card">
            <FaLaptopCode className="icon" />
            <h2>Web Development</h2>
            <p>Custom, responsive, high-performance websites that showcase your brand perfectly.</p>
          </div>
          <div className="service-card">
            <FaMobileAlt className="icon" />
            <h2>Mobile App Development</h2>
            <p>Intuitive, powerful apps to keep your customers connected on the go.</p>
          </div>
          <div className="service-card">
            <FaChartLine className="icon" />
            <h2>Personal Branding</h2>
            <p>Craft your unique personal brand with targeted content and strategy.</p>
          </div>
          <div className="service-card">
            <FaUserTie className="icon" />
            <h2>Consulting & Strategy</h2>
            <p>Expert guidance to define, execute, and scale your digital strategy effectively.</p>
          </div>
        </Fade>
      </section>
    </div>
    <Footer/>
    </>
  )
}

export default ServicesPage;
