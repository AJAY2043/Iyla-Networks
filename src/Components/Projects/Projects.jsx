import './Projects.css';
import { Fade } from 'react-awesome-reveal';
import project1 from '../../Assets/images/project1.jpg'
import project2 from '../../Assets/images/project2.jpg'
import project3 from '../../Assets/images/project3.jpg'
import project4 from '../../Assets/images/project4.jpg'
import project5 from '../../Assets/images/project5.jpg'
const projects = [
  {
    image: project1,
    title: 'E-commerce Platform',
    description: 'A scalable online store with payment integration.',
  },
  {
    image: project2,
    title: 'Mobile App',
    description: 'A cross-platform app with stunning UI/UX.',
  },
  {
    image: project3,
    title: 'Brand Website',
    description: 'A modern responsive site with branding focus.',
  },
  {
    image: project4,
    title: 'Marketing Campaign',
    description: 'Targeted ads with measurable ROI.',
  },
  {
    image: project5,
    title: 'Business Dashboard',
    description: 'Custom analytics and reporting tools.',
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <Fade direction="up" triggerOnce>
        <div className="projects-header">
          <h2>Our <span>Projects</span></h2>
          <p>Delivering excellence across domains and industries.</p>
        </div>
      </Fade>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <Fade direction="up" cascade triggerOnce key={index}>
            <div className="project-card">
              <div className="project-image">
                <img src={proj.image} alt={proj.title} />
                <div className="project-overlay">
                  <h3>{proj.title}</h3>
                  <p>{proj.description}</p>
                </div>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
};

export default Projects;
