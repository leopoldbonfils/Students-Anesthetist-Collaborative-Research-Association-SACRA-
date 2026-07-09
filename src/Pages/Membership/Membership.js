import React, { useState } from 'react';
import { PageHeader } from '../../components/common/PageHeader';
import { SectionTitle } from '../../components/common/SectionTitle';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { Globe, GraduationCap, Award, Check, CheckCircle2 } from 'lucide-react';
import './Membership.css';

export const Membership = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [university, setUniversity] = useState('');
  const [studyYear, setStudyYear] = useState('clinical');
  const [submitStatus, setSubmitStatus] = useState('idle'); // idle, loading, success

  const benefits = [
    {
      icon: <Globe size={24} />,
      title: 'Global Chapter Network',
      description: 'Connect with medical students and clinical residents at over 50 university medical hubs globally.'
    },
    {
      icon: <GraduationCap size={24} />,
      title: 'Research Advising',
      description: 'Access statistical advisory hours, study protocol reviews, and peer-to-peer critique cycles.'
    },
    {
      icon: <Award size={24} />,
      title: 'Fellowship & Grants',
      description: 'Eligibility to apply for SACRA Student Research Fellowship awards and travel workshops grants.'
    }
  ];

  const tiers = [
    {
      name: 'Free Student Tier',
      price: '$0',
      period: 'forever',
      popular: true,
      features: [
        'Access to regional student audits',
        'Join Slack community channel workspace',
        'Attend monthly webinar lectures',
        'Digital Certificate of Membership'
      ]
    },
    {
      name: 'Resident / Fellow Tier',
      price: '$15',
      period: 'annually',
      popular: false,
      features: [
        'All student tier features plus:',
        'Lead multi-center research projects',
        'Apply for Travel grants to meetings',
        'Vote in SACRA executive board elections'
      ]
    },
    {
      name: 'Institutional Chapter',
      price: '$120',
      period: 'annually',
      popular: false,
      features: [
        'All resident tier features plus:',
        'Sim-Lab curriculum templates licenses',
        'Dedicated advisory statistics team hours',
        'Symposium hosting support package'
      ]
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus('loading');
    setTimeout(() => {
      setSubmitStatus('success');
    }, 1500);
  };

  const handleResetForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setUniversity('');
    setStudyYear('clinical');
    setSubmitStatus('idle');
  };

  return (
    <div className="membership-page animate-fade-in">
      <PageHeader
        title="Become a Member"
        description="Connect with leading student researchers, access peer mentorship, and audit clinical surgery checklists."
      />

      {/* Benefits Grid */}
      <section className="container section-padding">
        <SectionTitle
          title="Why Join SACRA?"
          subtitle="Empowering student anesthetists to acquire robust clinical training and publish academic audits."
        />
        <div className="membership-benefits-grid">
          {benefits.map((ben, idx) => (
            <Card key={idx} className="benefit-card" hoverEffect={true}>
              <div className="benefit-icon-wrapper">{ben.icon}</div>
              <h4>{ben.title}</h4>
              <p>{ben.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Tiers Pricing Grid */}
      <section className="tiers-section">
        <div className="container">
          <SectionTitle
            title="Membership Tiers"
            subtitle="Choose a plan designed for medical students, clinical residents, or entire university chapters."
          />
          <div className="tiers-grid">
            {tiers.map((tier, idx) => (
              <Card key={idx} className={`tier-card ${tier.popular ? 'tier-card-popular' : ''}`} hoverEffect={true}>
                {tier.popular && <Badge text="Most Popular" type="success" className="tier-popular-tag" />}
                <h3 className="tier-name">{tier.name}</h3>
                <div className="tier-price-box">
                  <span className="tier-price">{tier.price}</span>
                  <span className="tier-period">/ {tier.period}</span>
                </div>
                <ul className="tier-features-list">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx} className="tier-feature-item">
                      <Check className="feature-check-icon" size={16} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="container section-padding form-section">
        <div className="membership-form-container">
          <SectionTitle
            title="Submit Your Membership Inquiry"
            subtitle="Fill out the registration details below to activate your student credentials and join the network."
          />

          {submitStatus === 'success' ? (
            <Card className="form-success-card animate-scale-in" hoverEffect={false}>
              <CheckCircle2 className="success-icon" size={56} />
              <h3>Inquiry Received!</h3>
              <p>
                Thank you, <strong>{firstName} {lastName}</strong>. We have registered your application under <strong>{university}</strong>. An email check link has been sent to <strong>{email}</strong>.
              </p>
              <Button onClick={handleResetForm} variant="outline">
                Register Another Account
              </Button>
            </Card>
          ) : (
            <Card className="form-card" hoverEffect={false}>
              <form onSubmit={handleSubmit} className="membership-signup-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="first-name">First Name</label>
                    <input
                      id="first-name"
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      placeholder="Jane"
                      disabled={submitStatus === 'loading'}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="last-name">Last Name</label>
                    <input
                      id="last-name"
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                      placeholder="Doe"
                      disabled={submitStatus === 'loading'}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="student-email">Email Address</label>
                  <input
                    id="student-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="jane.doe@university.edu"
                    disabled={submitStatus === 'loading'}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="student-university">University / Hospital Affiliation</label>
                  <input
                    id="student-university"
                    type="text"
                    value={university}
                    onChange={(e) => setUniversity(e.target.value)}
                    required
                    placeholder="Harvard Medical School"
                    disabled={submitStatus === 'loading'}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="student-year">Year of Study / Training Stage</label>
                  <select
                    id="student-year"
                    value={studyYear}
                    onChange={(e) => setStudyYear(e.target.value)}
                    disabled={submitStatus === 'loading'}
                    className="form-select-box"
                  >
                    <option value="pre-clinical">Pre-Clinical Years (MD/DO 1-2)</option>
                    <option value="clinical">Clinical Clerkship Years (MD/DO 3-4)</option>
                    <option value="resident">Anesthesia Resident / Registrar</option>
                    <option value="fellow">Clinical Fellow</option>
                  </select>
                </div>

                <div className="form-actions-row">
                  <Button type="submit" variant="primary" isLoading={submitStatus === 'loading'}>
                    Activate Membership
                  </Button>
                </div>
              </form>
            </Card>
          )}
        </div>
      </section>
    </div>
  );
};
export default Membership;
