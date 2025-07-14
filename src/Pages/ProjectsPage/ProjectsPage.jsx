import React from 'react';
import './ProjectsPage.css';
import { Fade } from 'react-awesome-reveal';
import { FaGlobe, FaMobileAlt, FaPaintBrush } from 'react-icons/fa';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const ProjectsPage = () => {
  return (
    <>
    <Navbar/>
    <div className="projects-wrapper">
      <section className="projects-hero">
        <Fade direction="down" triggerOnce>
          <h1>Our Projects<span>Projects</span></h1>
          <p>Explore the innovative solutions we've delivered to empower brands worldwide.</p>
        </Fade>
      </section>

      <section className="projects-list">
        <Fade cascade damping={0.2} triggerOnce>
          <div className="project-card">
            <div className="project-icon">
              <FaGlobe />
            </div>
            <h2>Global Website Redesign</h2>
            <p>A complete overhaul of a global brand’s website with modern UI/UX and seamless CMS integration.</p>
          </div>
          <div className="project-card">
            <div className="project-icon">
              <FaMobileAlt />
            </div>
            <h2>Mobile App Launch</h2>
            <p>Design and development of a feature-rich mobile app with a focus on performance and intuitive UX.</p>
          </div>
          <div className="project-card">
            <div className="project-icon">
              <FaPaintBrush />
            </div>
            <h2>Brand Identity Revamp</h2>
            <p>Creating a compelling brand identity, including logos, colors, and brand guidelines for a startup.</p>
          </div>
        </Fade>
      </section>
    </div>
    <Footer/>
    </>
  )
}

export default ProjectsPage;
