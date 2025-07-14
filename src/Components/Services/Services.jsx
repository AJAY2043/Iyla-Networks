import './Services.css';
import { Fade } from 'react-awesome-reveal';
import { FaBullhorn, FaLaptopCode, FaPaintBrush, FaMobileAlt, FaUserTie } from 'react-icons/fa';

const services = [
  {
    icon: <FaBullhorn />,
    title: 'Digital Marketing',
    description: 'Boost your brand with paid ads, SEO, and performance marketing.',
  },
  {
    icon: <FaLaptopCode />,
    title: 'Web Development',
    description: 'Premium websites built with modern tech stacks tailored to your needs.',
  },
  {
    icon: <FaMobileAlt />,
    title: 'Mobile App Development',
    description: 'Seamless mobile apps for Android and iOS, fully responsive and scalable.',
  },
  {
    icon: <FaPaintBrush />,
    title: 'Creative Design',
    description: 'Logos, graphics, and UI/UX that create lasting impressions.',
  },
  {
    icon: <FaUserTie />,
    title: 'Personal Branding',
    description: 'Make yourself a brand with social growth, content strategy, and visibility.',
  },
];

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="services-header">
        <Fade direction="up" triggerOnce>
          <h2>Our <span>Services</span></h2>
          <p>Powering businesses through innovation, design, and strategy.</p>
        </Fade>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <Fade direction="up" cascade triggerOnce key={index}>
            <div className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
};

export default Services;
