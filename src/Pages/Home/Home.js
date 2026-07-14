import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, FlaskConical, GraduationCap, Users, Heart, Building2 } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import simLabImg from '../../assets/images/sim-lab.png';
import './Home.css';

export const Home = () => {
  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">

            <h1 className="hero-title animate-slide-up">
              Students Anesthetist Collaborative Research Association
            </h1>
            <p className="hero-subtitle animate-slide-up">
              Advancing the science and practice of anesthesia through student-led innovation, clinical excellence, and collaborative international research.
            </p>
            <div className="hero-actions animate-slide-up">
              <Button to="/membership" variant="primary">Join SACRA</Button>
              <Button to="/about" variant="outline">Learn More</Button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="main-visual-frame">
              {/* Render the actual lab image to match home page screenshot */}
              <img src={simLabImg} alt="SACRA Clinical simulation lab" className="sim-lab-image" />
            </div>
            {/* Absolute Floating Metric Cards */}
            <Card className="floating-metric-card top-right" hoverEffect={true}>
              <div className="metric-icon green-bg">
                <Users size={18} />
              </div>
              <div className="metric-info">
                <h5>Community</h5>
                <p>Connecting 500+ students globally.</p>
              </div>
            </Card>

            <Card className="floating-metric-card bottom-left" hoverEffect={true}>
              <div className="metric-icon blue-bg">
                <FlaskConical size={18} />
              </div>
              <div className="metric-info">
                <h5>Research Projects</h5>
                <p>24 Active clinical trials currently in progress.</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="pillars-section container">
        <div className="pillars-grid">
          {/* Research Pillar (Featured Active Card) */}
          <Card className="pillar-card featured-pillar" hoverEffect={true}>
            <div className="pillar-icon-wrapper">
              <FlaskConical size={32} />
            </div>
            <h3 className="pillar-title">Research</h3>
            <p className="pillar-description">
              Leading evidence-based studies in anesthesia safety.
            </p>
            <Link to="/research" className="pillar-link">
              Learn More <ArrowRight size={16} />
            </Link>
          </Card>

          {/* Education Pillar */}
          <Card className="pillar-card" hoverEffect={true}>
            <div className="pillar-icon-wrapper blue-icon">
              <GraduationCap size={28} />
            </div>
            <h3 className="pillar-title">Education</h3>
            <p className="pillar-description">
              Continuous learning through peer-reviewed workshops.
            </p>
            <Link to="/programs" className="pillar-link">
              Learn More <ArrowRight size={16} />
            </Link>
          </Card>

          {/* Outreach Pillar */}
          <Card className="pillar-card" hoverEffect={true}>
            <div className="pillar-icon-wrapper blue-icon">
              <Heart size={28} />
            </div>
            <h3 className="pillar-title">Outreach</h3>
            <p className="pillar-description">
              Health campaigns across rural and urban communities.
            </p>
            <Link to="/events" className="pillar-link">
              Learn More <ArrowRight size={16} />
            </Link>
          </Card>

          {/* Leadership Pillar */}
          <Card className="pillar-card" hoverEffect={true}>
            <div className="pillar-icon-wrapper blue-icon">
              <Building2 size={28} />
            </div>
            <h3 className="pillar-title">Leadership</h3>
            <p className="pillar-description">
              Empowering the next generation of clinical leaders.
            </p>
            <Link to="/about" className="pillar-link">
              Learn More <ArrowRight size={16} />
            </Link>
          </Card>
        </div>
      </section>

      {/* Stats Counters Section */}
      <section className="stats-section">
        <div className="container stats-grid">
          <div className="stat-item">
            <h4 className="stat-number">500+</h4>
            <p className="stat-label">Active Members</p>
          </div>
          <div className="stat-item">
            <h4 className="stat-number">24+</h4>
            <p className="stat-label">Clinical Research Studies</p>
          </div>
          <div className="stat-item">
            <h4 className="stat-number">12</h4>
            <p className="stat-label">International Chapters</p>
          </div>
          <div className="stat-item">
            <h4 className="stat-number">40+</h4>
            <p className="stat-label">Published Articles</p>
          </div>
        </div>
      </section>

      {/* Summary Content Section */}
      <section className="summary-section container">
        <div className="summary-container">
          <div className="summary-text-block">
            <h2 className="summary-title">Why Collaborative Research Matters</h2>
            <p className="summary-text">
              Anesthesiology is a highly dynamic medical field where safety checklists, physiological monitoring technologies, and pharmacodynamics intersect. By connecting medical students and anesthesia residents globally, SACRA fosters collaborative audits that cut across borders.
            </p>
            <p className="summary-text">
              Our chapters share simulation protocols, compile systematic literature databases, and publish critical insights under clinical supervision, empowering young researchers to contribute directly to healthcare guidelines.
            </p>
            <div className="summary-cta-row">
              <Button to="/about" variant="primary">Discover Our Journey</Button>
            </div>
          </div>
          <div className="summary-visual-block">
            <div className="graphic-abstract">
              <div className="abstract-circle c1"></div>
              <div className="abstract-circle c2"></div>
              <div className="abstract-node n1"><FlaskConical size={18} /></div>
              <div className="abstract-node n2"><Users size={18} /></div>
              <div className="abstract-node n3"><GraduationCap size={18} /></div>
              <div className="abstract-line"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section Banner */}
      <section className="cta-banner">
        <div className="container cta-banner-container">
          <h2 className="cta-banner-title">Ready to Advance Anesthesia Science?</h2>
          <p className="cta-banner-text">Join SACRA today and collaborate on international clinical audits, access exclusive research funding, and attend simulation workshops.</p>
          <div className="cta-banner-actions">
            <Button to="/membership" variant="secondary">Join Our Network</Button>
            <Button to="/contact" variant="outline" className="btn-light-outline">Get In Touch</Button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
