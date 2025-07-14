import './About.css';
import { Fade } from 'react-awesome-reveal';

const About = () => {
  return (
    <section className="about-section" id="about">
      <Fade direction="up" triggerOnce>
        <div className="about-container">
          <h2>About <span>Iyla Networks</span></h2>
          <p>
            We are Iyla Networks – your trusted partner for end-to-end digital solutions. 
            From social media marketing and personal branding to premium web and mobile app development, 
            we help you stand out in the modern digital world. Our mission is to empower brands with strategy, 
            creativity, and cutting-edge technology for sustained growth.
          </p>
        </div>
      </Fade>
    </section>
  );
};

export default About;
