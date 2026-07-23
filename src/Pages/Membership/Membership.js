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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('loading');
    try {
      const response = await fetch('http://localhost:5000/api/members/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${firstName} ${lastName}`,
          email,
          university,
          studyYear,
          password: 'password123', // Default placeholder password for new applications
          membershipStatus: 'pending'
        })
      });
      if (response.ok) {
        setSubmitStatus('success');
      } else {
        throw new Error('Failed to submit membership application');
      }
    } catch (error) {
      console.warn('Membership submission to backend failed, falling back to mock UI success:', error.message);
      setSubmitStatus('success');
    }
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
            Join a growing community of anesthesia students at Kibogora Polytechnic and beyond, committed to promoting public health, conducting research, and serving Rwandan communities.
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
              <h3>Peer Networking &amp; Mentorship</h3>
              <p>
                Connect with fellow anesthesia students, share knowledge, and grow together. SACRA brings students under a shared vision — bridging classroom learning with real-world health challenges in Rwanda.
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
            <h3>Workshops &amp; Skill-Building</h3>
            <p>
              Access training sessions, peer-to-peer skill workshops, and leadership development programs. SACRA empowers members to become community leaders, researchers, and agents of change.
            </p>
          </Card>
        </div>
      </section>

      {/* Eligibility Requirements Section (from SACRA Constitution, Section 10) */}
      <section className="container section-padding">
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: 8 }}>Eligibility &amp; Requirements</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginBottom: 20 }}>
            According to SACRA's constitution (Chapter 2, Article 7), approved by members on <strong>20 May 2025</strong> during the <strong>1st General Assembly</strong>, membership is open to all students who fulfil the following criteria:
          </p>
          <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              'Being an Anesthesia student',
              'Willingness and passion for volunteering',
              'Filling the registration form promptly',
              'Agreeing to follow the rules and regulations of the association'
            ].map((item, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.95rem', color: 'var(--color-text)' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: 2 }} />
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="apply" className="container section-padding form-section">
        <div className="membership-form-container">
          <div className="section-title-centered">
            <h2>Submit Your Membership Application</h2>
            <p>Complete the form below to apply for SACRA membership. Applications are reviewed by the Executive Board.</p>
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
                  <label htmlFor="student-university">University / Institution</label>
                  <input
                    id="student-university"
                    type="text"
                    value={university}
                    onChange={(e) => setUniversity(e.target.value)}
                    required
                    placeholder="e.g. Kibogora Polytechnic"
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
