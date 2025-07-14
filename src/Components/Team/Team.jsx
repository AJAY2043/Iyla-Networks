import './Team.css';
import { Fade } from 'react-awesome-reveal';
import team1 from '../../Assets/images/team1.jpg'
import team2 from '../../Assets/images/team2.jpg'
import team3 from '../../Assets/images/team3.jpg'
import team4 from '../../Assets/images/team4.jpg'
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const teamMembers = [
  {
    image: team1,
    name: 'AKR',
    role: 'Founder & CEO',
  },
  {
    image: team2,
    name: 'Krishna Reddy',
    role: 'Marketing Head',
  },
  {
    image: team3,
    name: 'Raina Reddy',
    role: 'Lead Developer',
  },
  {
    image: team4,
    name: 'Ajay Krishna Reddy',
    role: 'Creative Director',
  },
];

const Team = () => {
  return (
    <section className="team-section" id="team">
      <Fade direction="up" triggerOnce>
        <div className="team-header">
          <h2>Meet Our <span>Team</span></h2>
          <p>Passionate professionals building your brand's success.</p>
        </div>
      </Fade>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <Fade direction="up" cascade triggerOnce key={index}>
            <div className="team-card">
              <div className="team-image">
                <img src={member.image} alt={member.name} />
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <div className="team-social">
                <FaLinkedin />
                <FaInstagram />
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
};

export default Team;
