import React, { useState } from 'react';
import { PageHeader } from '../../components/common/PageHeader';
import { SectionTitle } from '../../components/common/SectionTitle';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Award, Compass, Shield, HeartHandshake, CheckCircle2 } from 'lucide-react';
import './Programs.css';

export const Programs = () => {
  const [activeTab, setActiveTab] = useState('eligibility');

  const programs = [
    {
      icon: <Award size={28} />,
      title: 'Anesthesia Research Fellowship',
      description: 'A 12-month program offering structured mentorship, statistical advisory support, and peer review prep for student-led audits.',
      badge: 'Academic'
    },
    {
      icon: <Compass size={28} />,
      title: 'Crisis Resource Simulation Lab',
      description: 'Hands-on training scenarios focusing on anesthesia emergencies, airway obstruction protocols, and surgical checklists.',
      badge: 'Practical'
    },
    {
      icon: <Shield size={28} />,
      title: 'Clinical Audit Mentorship',
      description: 'Direct collaboration with attending anesthesiologists to register, execute, and analyze perioperative safety checks.',
      badge: 'Clinical'
    },
    {
      icon: <HeartHandshake size={28} />,
      title: 'Public Health Campaign Grant',
      description: 'Funding student groups to carry surgical safety workshops and outreach checkups into rural clinics and hospitals.',
      badge: 'Outreach'
    }
  ];

  const tabContents = {
    eligibility: {
      title: 'Who Can Apply?',
      items: [
        'Undergraduate medical students in their clinical clerkships.',
        'Anesthesia residents or clinical fellows in training.',
        'Student anesthetist groups or hospital research committees.',
        'Active SACRA student members in good standing.'
      ]
    },
    benefits: {
      title: 'Fellowship & Program Benefits',
      items: [
        'Direct co-authorship on peer-reviewed clinical audit publications.',
        'Complimentary entry to the SACRA Annual Research Symposium.',
        'A dedicated statistical advisor to audit sample size and analyses.',
        'Certificate of clinical simulation and research completion.'
      ]
    },
    timeline: {
      title: 'Selection Process Stages',
      items: [
        'Stage 1: Submit online intake application and abstract concept.',
        'Stage 2: Peer review check by SACRA Committee Chairs.',
        'Stage 3: Video interview with clinical advisory board panels.',
        'Stage 4: Program matching and advisor onboarding.'
      ]
    }
  };

  return (
    <div className="programs-page animate-fade-in">
      <PageHeader
        title="Our Programs & Services"
        description="Fostering academic growth through intensive simulation, research grants, and expert clinical mentorship."
      />

      {/* Programs List Section */}
      <section className="container section-padding">
        <SectionTitle
          title="Fostering Academic Excellence"
          subtitle="Explore the programs designed to support student anesthesia researchers from concept to peer publication."
        />
        <div className="programs-grid">
          {programs.map((prog, idx) => (
            <Card key={idx} className="program-card" hoverEffect={true}>
              <span className="program-tag">{prog.badge}</span>
              <div className="program-icon-box">{prog.icon}</div>
              <h3 className="program-card-title">{prog.title}</h3>
              <p className="program-card-desc">{prog.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Tabs Detail Section */}
      <section className="tabs-section">
        <div className="container">
          <SectionTitle
            title="Program Application Guide"
            subtitle="Understand the admission rules, benefits, and chronological stages of our fellowship programs."
          />
          <div className="tabs-container">
            {/* Tab Links */}
            <div className="tab-buttons" role="tablist">
              <button
                className={`tab-btn ${activeTab === 'eligibility' ? 'tab-btn-active' : ''}`}
                onClick={() => setActiveTab('eligibility')}
                role="tab"
                aria-selected={activeTab === 'eligibility'}
              >
                Eligibility
              </button>
              <button
                className={`tab-btn ${activeTab === 'benefits' ? 'tab-btn-active' : ''}`}
                onClick={() => setActiveTab('benefits')}
                role="tab"
                aria-selected={activeTab === 'benefits'}
              >
                Program Benefits
              </button>
              <button
                className={`tab-btn ${activeTab === 'timeline' ? 'tab-btn-active' : ''}`}
                onClick={() => setActiveTab('timeline')}
                role="tab"
                aria-selected={activeTab === 'timeline'}
              >
                Application Timeline
              </button>
            </div>

            {/* Tab Display Panel */}
            <Card className="tab-panel animate-scale-in" hoverEffect={false}>
              <h4 className="tab-panel-title">{tabContents[activeTab].title}</h4>
              <ul className="tab-panel-list">
                {tabContents[activeTab].items.map((item, idx) => (
                  <li key={idx} className="tab-panel-item">
                    <CheckCircle2 className="panel-check-icon" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="tab-panel-actions">
                <Button to="/contact" variant="primary">Submit Application Inquiry</Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="container section-padding programs-cta-section">
        <Card className="programs-cta-card" hoverEffect={false}>
          <div className="cta-content">
            <h2>Ready to Host a Workshop?</h2>
            <p>If you are a student group or clinical lead looking to co-organize a simulation workshop, contact our team to acquire resources, syllabus guidelines, and funding grants.</p>
          </div>
          <Button to="/contact" variant="secondary">Partner With Us</Button>
        </Card>
      </section>
    </div>
  );
};
export default Programs;
