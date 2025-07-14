import './Contact.css';
import { Fade } from 'react-awesome-reveal';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <section id="contact">
      <Fade direction="up" triggerOnce>
        <div className="cta-banner">
          <h2>Ready to elevate your brand?</h2>
          <Link to="/contactus" className="cta-btn">Let’s Talk</Link>
        </div>
      </Fade>

      <div className="contact-section section-wrapper">
        <Fade direction="up" triggerOnce>
          <div className="contact-header">
            <h2>Contact <span>Us</span></h2>
            <p>We’re excited to hear about your project.</p>
          </div>
        </Fade>

        <div className="contact-content" id="contact-form">
          <Fade direction="left" triggerOnce>
            <div className="contact-info">
              <h3>Get in Touch</h3>
              <p><FaEnvelope /> support@iylanetworks.com</p>
              <p><FaPhoneAlt /> +91 98765 43210</p>
              <p><FaMapMarkerAlt /> Hyderabad, India</p>
            </div>
          </Fade>

          <Fade direction="right" triggerOnce>
            <form className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Contact;
