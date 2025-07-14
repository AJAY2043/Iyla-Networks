import './Hero.css';
import { Fade } from 'react-awesome-reveal';

const Hero = () => {
  return (
    <section className="hero-section">
      <Fade direction="up" triggerOnce>
        <div className="hero-content">
          <h1>Empower Your <span>Digital Presence</span></h1>
          <p>
            Full-stack marketing, branding, and IT development for modern businesses. Let’s make your brand stand out.
          </p>
          <a href="#contact" className="cta-button">Get Started</a>
        </div>
      </Fade>
    </section>
  );
};

export default Hero;
