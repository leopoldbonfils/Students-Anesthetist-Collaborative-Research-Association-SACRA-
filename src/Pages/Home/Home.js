import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, FlaskConical, GraduationCap, Users, Heart, Building2, HeartPulse } from 'lucide-react';
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
              Promoting public health awareness, evidence-based education, and community outreach — empowering anesthesia students at Kibogora Polytechnic, Rusizi Campus to become skilled clinicians, researchers, and community leaders across Rwanda.
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
                <p>Uniting anesthesia students under a shared vision.</p>
              </div>
            </Card>

            <Card className="floating-metric-card bottom-left" hoverEffect={true}>
              <div className="metric-icon blue-bg">
                <FlaskConical size={18} />
              </div>
              <div className="metric-info">
                <h5>Active Campaigns</h5>
                <p>Community health campaigns on NCDs, hygiene &amp; emergency response.</p>
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
          <Card className="stat-card" hoverEffect={true}>
            <div className="stat-icon-badge">
              <GraduationCap size={24} />
            </div>
            <h4 className="stat-card-number">Dec 10</h4>
            <p className="stat-card-label">Founded 2024</p>
          </Card>

          <Card className="stat-card" hoverEffect={true}>
            <div className="stat-icon-badge">
              <Building2 size={24} />
            </div>
            <h4 className="stat-card-number">1</h4>
            <p className="stat-card-label">Campus — Kibogora Polytechnic</p>
          </Card>

          <Card className="stat-card" hoverEffect={true}>
            <div className="stat-icon-badge">
              <FlaskConical size={24} />
            </div>
            <h4 className="stat-card-number">5+</h4>
            <p className="stat-card-label">Health Campaigns</p>
          </Card>

          <Card className="stat-card" hoverEffect={true}>
            <div className="stat-icon-badge">
              <HeartPulse size={24} />
            </div>
            <h4 className="stat-card-number">5+</h4>
            <p className="stat-card-label">Workshops & Skill Sessions</p>
          </Card>
        </div>
      </section>

      {/* Summary Content Section */}
      <section className="summary-section container">
        <div className="summary-container">
          <div className="summary-text-block">
            <h2 className="summary-title">Why Student-Led Research Matters in Rwanda</h2>
            <p className="summary-text">
              In Rwanda, anesthesia students are growing across universities, yet no national association existed to support their collaboration, growth, and engagement. SACRA was founded to fill this gap — uniting students under a shared vision and bridging classroom knowledge with real-world health needs in underserved communities.
            </p>
            <p className="summary-text">
              SACRA serves as a hub for innovation, youth-led initiatives, research engagement, and cross-disciplinary collaboration, contributing to health promotion and the visibility of Kibogora Polytechnic nationwide.
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
          <h2 className="cta-banner-title">Ready to Make a Difference in Rwanda's Health?</h2>
          <p className="cta-banner-text" style={{ fontStyle: 'italic', opacity: 0.92, maxWidth: 680, margin: '0 auto 8px' }}>
            "SACRA is more than an association; it is a movement that empowers future anesthetists to shape the healthcare landscape of Rwanda. With support from Kibogora Polytechnic, SACRA will continue to grow as a center of excellence for research, public health, collaboration, and community service. Together, we can build a healthier, informed, and empowered Rwandan society."
          </p>
          <p className="cta-banner-text" style={{ opacity: 0.75, fontSize: '0.85rem' }}>— SACRA Official Document, Section 13: Conclusion</p>
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
