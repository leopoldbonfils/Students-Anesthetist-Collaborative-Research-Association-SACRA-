import React from 'react';
import { Card } from '../../components/ui/Card';
import { SectionTitle } from '../../components/common/SectionTitle';
import { Shield, Users, Lightbulb, Flag, Eye, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import simLabImg from '../../assets/images/sim-lab.png';
import './About.css';

export const About = () => {
  const values = [
    {
      icon: <Shield size={24} />,
      title: 'Public Health Advocacy',
      description: 'Conducting health campaigns addressing NCDs, sexual health, emergency response, and anesthesia-related awareness to promote public health across Rwandan communities.'
    },
    {
      icon: <Users size={24} />,
      title: 'Research & Evidence-Based Practice',
      description: 'Inspiring a culture of research, publishing evidence-based educational materials, and strengthening research skills and evidence-based practice among anesthesia students.'
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'Community Empowerment',
      description: 'Organizing workshops, skill-building sessions, and leadership programs that empower future anesthetists as community leaders, researchers, and agents of change.'
    }
  ];

  const milestones = [
    {
      year: '2024',
      title: 'SACRA Founded',
      planned: false,
      description: 'Founded on December 10, 2024, at Kibogora Polytechnic, Rusizi Campus, by visionary anesthesia students committed to uniting students under a shared vision and bridging classroom knowledge with real-world health needs.'
    },
    {
      year: '2025',
      title: 'Community Initiatives Launched',
      planned: true,
      description: 'Launched community health campaigns, organized training workshops and skill-building sessions, and established key partnerships with local health institutions and hospitals across Rwanda.'
    },
    {
      year: '2026',
      title: 'Growing Nationwide',
      planned: true,
      description: 'Expanding research programs, publishing evidence-based educational materials, and progressing toward creating a national platform for anesthesia students in Rwanda.'
    }
  ];

  const team = [
    {
      name: 'Olivier Twubahimana',
      role: 'Founder & President',
      desc: 'Leading the association with vision and integrity, ensuring all goals are met.',
      initials: 'OT',
      image: null, // Replace null with imported image, e.g.: import olivierImg from '../../assets/images/olivier.jpg'
      socials: {
        x: 'https://x.com/SACRA_Anesthesia',
        facebook: 'https://facebook.com/SACRAResearch',
        instagram: 'https://instagram.com/sacra_research',
        linkedin: 'https://linkedin.com/in/olivier-twubahimana'
      }
    },
    {
      name: 'Deborah Shimwa',
      role: 'Social & External Affairs Officer',
      desc: 'Supporting the President and overseeing internal operations and committees.',
      initials: 'DS',
      image: null,
      socials: {
        x: 'https://x.com/SACRA_Anesthesia',
        facebook: 'https://facebook.com/SACRAResearch',
        instagram: 'https://instagram.com/sacra_research',
        linkedin: 'https://linkedin.com/company/sacra-research'
      }
    },
    {
      name: 'Jean-Claude Niyonisaba',
      role: 'Vice President & Co-Founder',
      desc: 'Driving strategic initiatives, collaborative research partnerships, and clinical audits.',
      initials: 'JN',
      image: null,
      socials: {
        x: 'https://x.com/SACRA_Anesthesia',
        facebook: 'https://facebook.com/SACRAResearch',
        instagram: 'https://instagram.com/sacra_research',
        linkedin: 'https://linkedin.com/company/sacra-research'
      }
    },
    {
      name: 'Marie-Claire Uwineza',
      role: 'General Secretary',
      desc: 'Managing board communications, institutional relationships, and member documentation.',
      initials: 'MU',
      image: null,
      socials: {
        x: 'https://x.com/SACRA_Anesthesia',
        facebook: 'https://facebook.com/SACRAResearch',
        instagram: 'https://instagram.com/sacra_research',
        linkedin: 'https://linkedin.com/company/sacra-research'
      }
    },
    {
      name: 'MBABAZI CLEMANTINE',
      role: 'Director of Research',
      desc: 'Overseeing multicenter audits, database management, and academic abstract submissions.',
      initials: 'MC',
      image: null,
      socials: {
        x: 'https://x.com/SACRA_Anesthesia',
        facebook: 'https://facebook.com/SACRAResearch',
        instagram: 'https://instagram.com/sacra_research',
        linkedin: 'https://linkedin.com/company/sacra-research'
      }
    },
    {
      name: 'Grace Gakire',
      role: 'Treasurer & Finance Chair',
      desc: 'Managing research grants, conference travel funds, and annual budgets.',
      initials: 'GG',
      image: null,
      socials: {
        x: 'https://x.com/SACRA_Anesthesia',
        facebook: 'https://facebook.com/SACRAResearch',
        instagram: 'https://instagram.com/sacra_research',
        linkedin: 'https://linkedin.com/company/sacra-research'
      }
    },
    {
      name: 'Eric Ndahimana',
      role: 'Director of Education',
      desc: 'Coordinating weekly case discussions, airway simulation labs, and guest webinars.',
      initials: 'EN',
      image: null,
      socials: {
        x: 'https://x.com/SACRA_Anesthesia',
        facebook: 'https://facebook.com/SACRAResearch',
        instagram: 'https://instagram.com/sacra_research',
        linkedin: 'https://linkedin.com/company/sacra-research'
      }
    },
    {
      name: 'Divine Mutesi',
      role: 'Public Relations Officer',
      desc: 'Directing community outreach, hospital health advocacy, and media relations.',
      initials: 'DM',
      image: null,
      socials: {
        x: 'https://x.com/SACRA_Anesthesia',
        facebook: 'https://facebook.com/SACRAResearch',
        instagram: 'https://instagram.com/sacra_research',
        linkedin: 'https://linkedin.com/company/sacra-research'
      }
    },
    {
      name: 'Patrick Habimana',
      role: 'IT & Digital Infrastructure Lead',
      desc: 'Maintaining the SACRA research portal, databases, and digital communication tools.',
      initials: 'PH',
      image: null,
      socials: {
        x: 'https://x.com/SACRA_Anesthesia',
        facebook: 'https://facebook.com/SACRAResearch',
        instagram: 'https://instagram.com/sacra_research',
        linkedin: 'https://linkedin.com/company/sacra-research'
      }
    },
    {
      name: 'Aline Uwera',
      role: 'Clinical Audit Coordinator',
      desc: 'Supervising hospital safety check-list compliance audits and data entry.',
      initials: 'AU',
      image: null,
      socials: {
        x: 'https://x.com/SACRA_Anesthesia',
        facebook: 'https://facebook.com/SACRAResearch',
        instagram: 'https://instagram.com/sacra_research',
        linkedin: 'https://linkedin.com/company/sacra-research'
      }
    },
    {
      name: 'Dr. Sarah Jenkins',
      role: 'Founding Faculty Advisor',
      desc: 'Attending Anesthesiologist advising on research methodology and clinical safety.',
      initials: 'SJ',
      image: null,
      socials: {
        x: 'https://x.com/SACRA_Anesthesia',
        facebook: 'https://facebook.com/SACRAResearch',
        instagram: 'https://instagram.com/sacra_research',
        linkedin: 'https://linkedin.com/company/sacra-research'
      }
    }
  ];

  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);
  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);

  React.useEffect(() => {
    document.title = 'About SACRA | Founded Dec 10, 2024 — Kibogora Polytechnic, Rusizi Campus';
    return () => {
      document.title = 'SACRA | Students Anesthetist Collaborative Research Association';
    };
  }, []);

  const nextSlide = React.useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % team.length);
  }, [team.length]);

  const prevSlide = React.useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + team.length) % team.length);
  }, [team.length]);

  React.useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [isHovered, nextSlide]);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide();
    }
    if (touchStart - touchEnd < -75) {
      prevSlide();
    }
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <div className="about-page animate-fade-in">
      {/* About Page Custom Hero Banner overlaying sim-lab.png */}
      <section className="about-hero-section" style={{ backgroundImage: `linear-gradient(rgba(0, 51, 102, 0.85), rgba(13, 24, 44, 0.95)), url(${simLabImg})` }}>
        <div className="container about-hero-container">
          <span className="about-hero-badge">Student-Led Excellence</span>
          <h1 className="about-hero-title">
            Advancing Health in Rwanda Through Student-Led Research and Community Action
          </h1>
          <p className="about-hero-subtitle">
            Founded on December 10, 2024, at Kibogora Polytechnic, Rusizi Campus, SACRA is a student-led initiative dedicated to promoting public health awareness, evidence-based education, research culture, and community outreach, shaping future anesthetists into skilled clinicians, community leaders, and agents of change.
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
              To promote public health awareness, conduct community outreach programs, strengthen networking and collaboration among anesthesia students, inspire a culture of research and evidence-based practice, and raise the visibility and reputation of Kibogora Polytechnic through impactful activities and innovation.
            </p>
          </Card>

          <Card className="vision-card" hoverEffect={false}>
            <div className="mission-header-row">
              <Eye className="mission-card-icon teal" size={28} />
              <h3>Our Vision</h3>
            </div>
            <p>
              To build a nationwide network of empowered anesthesia students who are excellent clinicians, impactful researchers, and engaged community leaders driving evidence-based health practices in Rwanda and beyond, while raising the visibility and reputation of Kibogora Polytechnic through innovative and impactful activities.
            </p>
          </Card>

          <Card className="values-card" hoverEffect={false}>
            <div className="mission-header-row">
              <Heart className="mission-card-icon gold" size={28} />
              <h3>Our Core Values</h3>
            </div>
            <p>
              We are guided by the principles of Excellence, Integrity, Collaboration, and Service to Humanity — aligned with Kibogora Polytechnic's mission and the health needs of Rwandan communities.
            </p>
          </Card>
        </div>
      </section>

      {/* Core Values */}
      <section className="values-section">
        <div className="container">
          <SectionTitle
            title="Our Core Values"
            subtitle="The guiding principles that define SACRA's mission in public health, research, and community service."
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
          subtitle="SACRA's journey from founding at Kibogora Polytechnic, Rusizi Campus to a growing national initiative for anesthesia students in Rwanda."
        />
        <div className="timeline">
          <div className="timeline-line"></div>
          {milestones.map((mil, idx) => (
            <div key={idx} className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-node"></div>
              <Card className="timeline-content" hoverEffect={true}>
                <span className="timeline-year">{mil.year}</span>
                {mil.planned && (
                  <span style={{
                    display: 'inline-block',
                    background: 'rgba(0,168,150,0.12)',
                    color: 'var(--color-accent-dark)',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    padding: '2px 8px',
                    borderRadius: '99px',
                    border: '1px solid var(--color-accent)',
                    marginBottom: '6px'
                  }}>Upcoming</span>
                )}
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
            subtitle="Meet the student leaders driving SACRA's mission at Kibogora Polytechnic, Rusizi Campus."
          />
          <div className="swiper-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}>
            <button className="swiper-nav-btn prev" onClick={prevSlide} aria-label="Previous Leader">
              <ChevronLeft size={24} />
            </button>

            <div className="swiper-wrapper">
              {team.map((member, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <div key={idx} className={`swiper-slide ${isActive ? 'active' : ''}`}>
                    <Card className="team-card" hoverEffect={true}>
                      <div className="team-avatar-placeholder">
                        {member.image ? (
                          <img
                            src={member.image}
                            alt={member.name}
                            className="team-avatar-img"
                          />
                        ) : (
                          <span>{member.initials}</span>
                        )}
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
                              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                              <rect width="4" height="12" x="2" y="9" />
                              <circle cx="4" cy="4" r="2" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>

            <button className="swiper-nav-btn next" onClick={nextSlide} aria-label="Next Leader">
              <ChevronRight size={24} />
            </button>

            <div className="swiper-pagination">
              {team.map((_, idx) => (
                <button
                  key={idx}
                  className={`swiper-dot ${idx === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
