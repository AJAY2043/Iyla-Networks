import './Testimonials.css';
import { Fade } from 'react-awesome-reveal';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonialsData = [
  {
    name: 'Arjun Mehta',
    role: 'CEO, BrightApps',
    feedback:
      'Iyla Networks transformed our digital presence with top-notch design and marketing. Highly recommended!',
  },
  {
    name: 'Priya Singh',
    role: 'Founder, StyleHub',
    feedback:
      'Their team delivered a beautiful app that our customers love. Great communication and professionalism.',
  },
  {
    name: 'David Chen',
    role: 'Marketing Lead, TechNova',
    feedback:
      'Outstanding strategy, creative assets, and development. Iyla Networks is our go-to digital partner.',
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section" id="testimonials">
      <Fade direction="up" triggerOnce>
        <div className="section-header">
          <h2>What Our <span>Clients Say</span></h2>
          <p>Trusted by innovative businesses worldwide.</p>
        </div>
      </Fade>

      <div className="testimonials-container">
        {testimonialsData.map((item, index) => (
          <Fade direction="up" delay={index * 100} key={index} triggerOnce>
            <div className="testimonial-card">
              <FaQuoteLeft className="quote-icon" />
              <p className="feedback">"{item.feedback}"</p>
              <div className="client-info">
                <h4>{item.name}</h4>
                <span>{item.role}</span>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
