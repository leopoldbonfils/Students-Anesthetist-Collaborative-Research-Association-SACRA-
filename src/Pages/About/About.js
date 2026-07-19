import React from 'react';
import { Card } from '../../components/ui/Card';
import { SectionTitle } from '../../components/common/SectionTitle';
import { Shield, Users, Lightbulb, Flag, Eye, Heart } from 'lucide-react';
import simLabImg from '../../assets/images/sim-lab.png';
import './About.css';

export const About = () => {
  const values = [
    {
      icon: <Shield size={24} />,
      title: 'Clinical Safety First',
      description: 'Prioritizing evidence-based patient safety checklists and auditing standard anesthesia induction guidelines.'
    },
    {
      icon: <Users size={24} />,
      title: 'Global Collaboration',
      description: 'Bridging medical schools and residents internationally to compile cross-border audits and data sets.'
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'Student Innovation',
      description: 'Supporting simulation prototypes, predictive neural models, and clinical research abstracts led by students.'
    }
  ];

  const milestones = [
    {
      year: '2024',
      title: 'SACRA Association Founded',
      description: 'Launched by a small group of student anesthetists and faculty mentors across three academic hospitals.'
    },
    {
      year: '2025',
      title: 'First International Symposium',
      description: 'Over 200 participants from 12 medical institutions attended our first virtual anesthesia airway symposium.'
    },
    {
      year: '2026',
      title: 'Clinical Audit Scale',
      description: 'Reaching 24 active clinical trials, establishing student fellowship grants, and publishing our first BMC paper.'
    }
  ];

  const team = [
    {
      name: 'Olivier Twubahimana',
      role: 'Founder',
      desc: 'Leading the association with vision and integrity, ensuring all goals are met.',
      initials: 'OT',
      socials: {
        x: '#x',
        facebook: '#facebook',
        instagram: '#instagram',
        linkedin: '#linkedin'
      }
    },
    {
      name: 'Deborah Shimwa',
      role: 'Well And Social Affairs',
      desc: 'Supporting the President and overseeing internal operations and committees.',
      initials: 'DS',
      socials: {
        x: '#x',
        facebook: '#facebook',
        instagram: '#instagram',
        linkedin: '#linkedin'
      }
    }
  ];

  return (
    <div className="about-page animate-fade-in">
      {/* About Page Custom Hero Banner overlaying sim-lab.png */}
      <section className="about-hero-section" style={{ backgroundImage: `linear-gradient(rgba(0, 51, 102, 0.85), rgba(13, 24, 44, 0.95)), url(${simLabImg})` }}>
        <div className="container about-hero-container">
          <span className="about-hero-badge">Student-Led Excellence</span>
          <h1 className="about-hero-title">
            Advancing Global Anesthesia Through Student Innovation
          </h1>
          <p className="about-hero-subtitle">
            Based at Kibogora Polytechnic, SACRA is a vibrant community of future anesthesiologists dedicated to pioneering research, clinical excellence, and collaborative learning within Rwanda and beyond.
          </p>
          <div className="about-hero-actions">
            <a href="#mission" className="btn btn-white-solid">Explore Our Mission</a>
            <a href="/research" className="btn btn-white-outline">View Research Hub</a>
          </div>
        </div>
      </section>

      {/* Mission & Vision (Aligned with 2nd Screenshot) */}
      <section id="mission" className="container section-padding mission-vision-section">
        <div className="mission-vision-grid">
          <Card className="mission-card" hoverEffect={false}>
            <div className="mission-header-row">
              <Flag className="mission-card-icon blue" size={28} />
              <h3>Our Mission</h3>
            </div>
            <p>
              To promote safe anesthesia practices, foster a culture of research, and engage in impactful community outreach to improve public health outcomes.
            </p>
          </Card>

          <Card className="vision-card" hoverEffect={false}>
            <div className="mission-header-row">
              <Eye className="mission-card-icon teal" size={28} />
              <h3>Our Vision</h3>
            </div>
            <p>
              To be a leading student association that empowers future anesthetists to become innovators, leaders, and advocates for global health equity.
            </p>
          </Card>

          <Card className="values-card" hoverEffect={false}>
            <div className="mission-header-row">
              <Heart className="mission-card-icon gold" size={28} />
              <h3>Our Core Values</h3>
            </div>
            <p>
              We are guided by the principles of Excellence, Integrity, Collaboration, and Service to Humanity.
            </p>
          </Card>
        </div>
      </section>

      {/* Core Values */}
      <section className="values-section">
        <div className="container">
          <SectionTitle
            title="Our Core Values"
            subtitle="The fundamental guidelines that drive our research collaborative and clinical activities."
          />
          <div className="values-grid">
            {values.map((val, idx) => (
              <Card key={idx} className="value-card" hoverEffect={true}>
                <div className="value-icon-circle">{val.icon}</div>
                <h4>{val.title}</h4>
                <p>{val.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Milestones */}
      <section className="container section-padding history-section">
        <SectionTitle
          title="Our Journey"
          subtitle="How SACRA grew from a local student group to an international anesthesia research network."
        />
        <div className="timeline">
          <div className="timeline-line"></div>
          {milestones.map((mil, idx) => (
            <div key={idx} className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-node"></div>
              <Card className="timeline-content" hoverEffect={true}>
                <span className="timeline-year">{mil.year}</span>
                <h4 className="timeline-title">{mil.title}</h4>
                <p className="timeline-desc">{mil.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Team Grid */}
      <section className="team-section">
        <div className="container">
          <SectionTitle
            title="Our Leadership"
            subtitle="Meet the founder directing SACRA's vision and clinical research activities."
          />
          <div className="team-grid">
            {team.map((member, idx) => (
              <Card key={idx} className="team-card" hoverEffect={true}>
                <div className="team-avatar-placeholder">
                  <span>{member.initials}</span>
                </div>
                <h4 className="team-member-name">{member.name}</h4>
                <span className="team-member-role">{member.role}</span>
                <p className="team-member-bio">{member.desc}</p>
                <div className="team-member-socials">
                  {member.socials.x && (
                    <a href={member.socials.x} target="_blank" rel="noopener noreferrer" className="team-social-icon" aria-label="X">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
                        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                      </svg>
                    </a>
                  )}
                  {member.socials.facebook && (
                    <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer" className="team-social-icon" aria-label="Facebook">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </a>
                  )}
                  {member.socials.instagram && (
                    <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="team-social-icon" aria-label="Instagram">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    </a>
                  )}
                  {member.socials.linkedin && (
                    <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="team-social-icon" aria-label="LinkedIn">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                        <rect width="4" height="12" x="2" y="9"/>
                        <circle cx="4" cy="4" r="2"/>
                      </svg>
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
