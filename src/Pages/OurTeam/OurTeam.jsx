import React from 'react';
import './OurTeam.css';
import { Fade } from 'react-awesome-reveal';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const OurTeam = () => {
  return (
    <>
    <Navbar/>
    <div className="our-team-wrapper">
      <section className="our-team-hero">
        <Fade direction="down" triggerOnce>
          <h1>Meet Our Team<span>Team</span></h1>
          <p>We are passionate professionals dedicated to delivering exceptional results for our clients.</p>
        </Fade>
      </section>

      <section className="our-team-list">
        <Fade cascade damping={0.2} triggerOnce>
          <div className="team-member-card">
            <img src="https://via.placeholder.com/300x300.png?text=John+Doe" alt="EMP ID-1998" />
            <h2>AKR</h2>
            <p>CEO & Founder</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/ajay-krishna-reddy/"><FaLinkedin /></a>
              <a href="ajayreddys.netlify.app"><FaEnvelope /></a>
            </div>
          </div>

          <div className="team-member-card">
            <img src="https://via.placeholder.com/300x300.png?text=Jane+Smith" alt="EMP ID-2043" />
            <h2>Ajay Krishna Reddy</h2>
            <p>Chief Technology Officer</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/ajay-krishna-reddy/"><FaLinkedin /></a>
              <a href="ajayreddys.netlify.app"><FaEnvelope /></a>
            </div>
          </div>

          <div className="team-member-card">
            <img src="https://via.placeholder.com/300x300.png?text=Emily+Johnson" alt="EMP ID-1233" />
            <h2>Raina Reddy</h2>
            <p>Head of Marketing</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/ajay-krishna-reddy/"><FaLinkedin /></a>
              <a href="ajayreddys.netlify.app"><FaEnvelope /></a>
            </div>
          </div>
        </Fade>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default OurTeam;
