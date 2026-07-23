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
      title: 'Community Health Campaigns',
      description: 'Conducting health campaigns addressing NCDs, sexual health, emergency response, hygiene, and anesthesia-related awareness to promote public health across Rwandan communities.',
      badge: 'Outreach'
    },
    {
      icon: <Compass size={28} />,
      title: 'Workshops & Skill-Building',
      description: 'Organizing workshops, trainings, and peer-to-peer skill-building sessions to empower anesthesia students as clinicians, community leaders, and agents of change.',
      badge: 'Practical'
    },
    {
      icon: <Shield size={28} />,
      title: 'Anesthesia Research Projects',
      description: 'Publishing evidence-based educational materials and collaborative research projects that strengthen research skills and evidence-based practice among anesthesia students.',
      badge: 'Academic'
    },
    {
      icon: <HeartHandshake size={28} />,
      title: 'Leadership Development',
      description: 'Promoting leadership, teamwork, and community service through structured programs that develop future anesthesia leaders and create a national platform for students in Rwanda.',
      badge: 'Leadership'
    }
  ];

  const tabContents = {
    eligibility: {
      title: 'Who Can Participate?',
      items: [
        'Being an Anesthesia student at Kibogora Polytechnic or any affiliated institution.',
        'Willingness and passion for volunteering and community service.',
        'Agreeing to follow the rules and regulations of the association.',
        'Active SACRA members who have completed membership registration.'
      ]
    },
    benefits: {
      title: 'Program Benefits',
      items: [
        'Participation in community health campaigns (NCDs, hygiene, emergency response).',
        'Access to peer-to-peer workshops and skill-building sessions.',
        'Engagement in evidence-based research and educational publications.',
        'Leadership development and community service recognition.'
      ]
    },
    timeline: {
      title: 'How to Get Involved',
      items: [
        'Step 1: Complete the SACRA membership registration form.',
        'Step 2: Attend the orientation session and General Assembly.',
        'Step 3: Join a program committee aligned with your interests.',
        'Step 4: Participate in planned activities and contribute to SACRA\'s mission.'
      ]
    }
  };

  return (
    <div className="programs-page animate-fade-in">
      <PageHeader
        title="Our Programs & Services"
        description="Empowering anesthesia students through health campaigns, workshops, research projects, and community outreach at Kibogora Polytechnic, Rusizi Campus."
      />

      {/* Programs List Section */}
      <section className="container section-padding">
        <SectionTitle
          title="SACRA's Core Programs"
          subtitle="Programs designed to promote public health, build research skills, and empower anesthesia students across Rwanda."
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
            title="Getting Involved"
            subtitle="Understand how to participate, the benefits you'll gain, and the steps to join SACRA's programs."
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
            <h2>Ready to Collaborate?</h2>
            <p>Are you a health institution, hospital, NGO, or academic partner interested in collaborating with SACRA? Get in touch to co-organize health campaigns, workshops, or research initiatives aligned with Rwanda's public health needs.</p>
          </div>
          <Button to="/contact" variant="secondary">Partner With Us</Button>
        </Card>
      </section>
    </div>
  );
};
export default Programs;
