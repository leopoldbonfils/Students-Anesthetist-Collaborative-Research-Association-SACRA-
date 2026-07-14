import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Users, FileText, CheckCircle2 } from 'lucide-react';
import simLabImg from '../../assets/images/sim-lab.png';
import './Membership.css';

export const Membership = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [university, setUniversity] = useState('');
  const [studyYear, setStudyYear] = useState('clinical');
  const [submitStatus, setSubmitStatus] = useState('idle'); // idle, loading, success

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
      {/* Soft Blue Hero Section (Aligned with Mockup) */}
      <section className="membership-hero-section">
        <div className="container membership-hero-container">

          <h1 className="membership-hero-title">Join a Community of Future Anesthetists</h1>
          <p className="membership-hero-subtitle">
            Empowering the next generation of medical researchers and clinicians through collaborative innovation, mentorship, and clinical excellence.
          </p>
          <div className="membership-hero-actions">
            <a href="#apply" className="btn btn-start-app">Start Application</a>
          </div>
        </div>
      </section>

      {/* Why Join SACRA Section (Aligned with Mockup) */}
      <section className="why-join-section container">
        <div className="why-section-header">
          <h2>Why Join SACRA?</h2>
          <div className="teal-line"></div>
        </div>

        <div className="why-join-grid">
          {/* Global Mentorship Network (Horizontal card with image on right) */}
          <Card className="why-card horizontal-mentorship-card" hoverEffect={false}>
            <div className="mentorship-card-content">
              <div className="why-icon-box blue-icon-box">
                <Users size={24} />
              </div>
              <h3>Global Mentorship Network</h3>
              <p>
                Connect with leading professionals and senior anesthetists worldwide. Get guidance on career paths, research methodology, and peer review publishing pipelines.
              </p>
            </div>
            <div className="mentorship-card-visual">
              <img src={simLabImg} alt="Students in clinical lab" className="mentorship-lab-img" />
            </div>
          </Card>

          {/* Research Grants (Solid Green Card) */}
          <Card className="why-card green-grants-card" hoverEffect={false}>
            <div className="why-icon-box white-icon-box">
              <FileText size={24} />
            </div>
            <h3>Research Grants</h3>
            <p>
              Exclusive access to annual funding opportunities for collaborative anesthesia research projects, abstract submissions, and travel to international clinical symposiums.
            </p>
          </Card>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="apply" className="container section-padding form-section">
        <div className="membership-form-container">
          <div className="section-title-centered">
            <h2>Submit Your Membership Inquiry</h2>
            <p>Fill out the registration details below to activate your student credentials and join the network.</p>
          </div>

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
                      placeholder="Enter first name"
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
                      placeholder="Enter last name"
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
                    placeholder="Enter email address"
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
                    placeholder="Enter university / hospital affiliation"
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
                    <option value="pre-clinical">Pre-Clinical Years</option>
                    <option value="clinical">Clinical Clerkship Years</option>
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
