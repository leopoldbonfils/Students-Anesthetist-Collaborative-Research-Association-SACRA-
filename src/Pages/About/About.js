import React from 'react';
import { Card } from '../../components/ui/Card';
import { SectionTitle } from '../../components/common/SectionTitle';
import { Shield, Users, Lightbulb, Flag, Eye, Mail } from 'lucide-react';
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
      name: 'Dr. Sarah Jenkins',
      role: 'Founding Faculty Advisor',
      desc: 'Attending Anesthesiologist with over 15 years of academic instruction and clinical research experience.',
      initials: 'SJ'
    },
    {
      name: 'Elena Rostova',
      role: 'President & Research Chair',
      desc: 'Medical Student Researcher specializing in neural network models for predictive respiratory monitoring.',
      initials: 'ER'
    },
    {
      name: 'John Thompson',
      role: 'Vice President & Outreach Director',
      desc: 'Anesthesia Resident coordinating rural hospital safety workshops and WHO surgical checklist audits.',
      initials: 'JT'
    },
    {
      name: 'Dr. Lisa Chen',
      role: 'Director of Clinical Education',
      desc: 'Simulation Fellow leading hands-on ultrasound nerve block simulation tutorials and webinars.',
      initials: 'LC'
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
              To foster a collaborative environment where students in anesthesia research can develop innovative solutions, enhance clinical outcomes, and advance their professional development through mentorship and global network.
            </p>
          </Card>

          <Card className="vision-card" hoverEffect={false}>
            <div className="mission-header-row">
              <Eye className="mission-card-icon teal" size={28} />
              <h3>Our Vision</h3>
            </div>
            <p>
              To become the leading African student research organization in anesthesia, recognized internationally for bridging the gap between clinical practice and student innovation.
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
            subtitle="Meet the student researchers and faculty advisors directing SACRA's global board committees."
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
                  <a href="#linkedin" className="team-social-icon" aria-label="LinkedIn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect width="4" height="12" x="2" y="9"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  </a>
                  <a href="mailto:sacra.59@yahoo.com" className="team-social-icon" aria-label="Email"><Mail size={16} /></a>
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
