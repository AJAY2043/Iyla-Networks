import './Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>Iyla <span>Networks</span></h2>
          <p>Empowering your digital journey through marketing, branding, and technology solutions.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/"><FaFacebookF /></a>
            <a href="https://www.instagram.com/"><FaInstagram /></a>
            <a href="https://www.linkedin.com/"><FaLinkedinIn /></a>
            <a href="https://www.twitter.com/"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Iyla Networks. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
