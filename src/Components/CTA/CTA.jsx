import './CTA.css';
import { Fade } from 'react-awesome-reveal';
import { FaRocket } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const CTA = () => {
  return (
    <section className="cta-section">
      <Fade direction="up" triggerOnce>
        <div className="cta-content">
          <h2>Let’s Build Something Amazing Together</h2>
          <p>Grow your brand with our complete digital solutions.</p>
          <Link to="/contactus" className="cta-button">
            <FaRocket /> Get Started
          </Link>
        </div>
      </Fade>
    </section>
  );
};

export default CTA;
