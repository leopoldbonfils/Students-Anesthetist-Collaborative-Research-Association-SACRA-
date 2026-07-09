import React, { useState, useEffect } from 'react';
import { SectionTitle } from '../../components/common/SectionTitle';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { Modal } from '../../components/ui/Modal';
import { Loader } from '../../components/ui/Loader';
import { dataService } from '../../services/dataService';
import { Clock, MapPin, CheckCircle2 } from 'lucide-react';
import simLabImg from '../../assets/images/sim-lab.png';
import './Events.css';

export const Events = () => {
  const [eventsData, setEventsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState(null); // Holds event to RSVP
  const [rsvpName, setRsvpName] = useState('');
  const [rsvpEmail, setRsvpEmail] = useState('');
  const [rsvpInst, setRsvpInst] = useState('');
  const [rsvpStatus, setRsvpStatus] = useState('idle'); // idle, loading, success

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await dataService.getEvents();
        setEventsData(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const handleOpenRsvp = (event) => {
    setSelectedEvent(event);
    setRsvpStatus('idle');
  };

  const handleCloseRsvp = () => {
    setSelectedEvent(null);
    setRsvpName('');
    setRsvpEmail('');
    setRsvpInst('');
  };

  const handleRsvpSubmit = (e) => {
    e.preventDefault();
    setRsvpStatus('loading');
    setTimeout(() => {
      setRsvpStatus('success');
    }, 1200);
  };

  if (isLoading) {
    return (
      <div className="events-page">
        <Loader type="spinner" />
      </div>
    );
  }

  const featuredEvent = eventsData?.upcomingEvents.find(ev => ev.featured);
  const standardEvents = eventsData?.upcomingEvents.filter(ev => !ev.featured) || [];
  const pastEvents = eventsData?.pastEvents || [];

  return (
    <div className="events-page animate-fade-in">
      {/* Light blue/gray Event Hero Section (Aligned with 3rd Screenshot) */}
      <section className="events-hero-section">
        <div className="container events-hero-container">
          <span className="events-hero-badge">Learning & Development</span>
          <h1 className="events-hero-title">Upcoming Events & Clinical Workshops</h1>
          <p className="events-hero-subtitle">
            Advancing the field of anesthesia through collaborative research, hands-on training, and global academic exchange. Join our community of student anesthetists.
          </p>
        </div>
      </section>

      {/* Featured Event Card */}
      {featuredEvent && (
        <section className="container section-padding">
          <div className="featured-section-header">
            <h2 className="featured-section-title">★ Featured Event</h2>
          </div>
          <Card className="featured-event-card" hoverEffect={false}>
            <div className="featured-event-visual">
              {/* Render simulation image representing lecture/workshop halls */}
              <img src={simLabImg} alt="SACRA Symposium hall" className="symposium-image" />
            </div>
            
            <div className="featured-event-content">
              <div className="featured-event-header-row">
                <div className="event-date-box">
                  <span className="date-number">15</span>
                  <span className="date-month-short">OCT</span>
                </div>
                <div className="event-location-row">
                  <MapPin size={16} className="loc-icon" />
                  <span>Royal College of Physicians, London</span>
                </div>
              </div>

              <h3 className="featured-event-title">
                SACRA Annual Global Anesthesia Research Symposium 2024
              </h3>
              
              <p className="featured-event-desc">
                A two-day flagship conference focusing on innovative pain management strategies and pediatric anesthesia research. Featuring keynote speakers from leading university hospitals.
              </p>

              <div className="featured-event-actions">
                <Button onClick={() => handleOpenRsvp(featuredEvent)} variant="primary">
                  Register Now
                </Button>
                <Button to="/about" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
          </Card>
        </section>
      )}

      {/* Upcoming Events List */}
      <section className="upcoming-events-section">
        <div className="container">
          <SectionTitle
            title="Upcoming Seminars & Courses"
            subtitle="Secure your seat in our monthly online seminars and simulation training sessions."
          />
          <div className="events-list-grid">
            {standardEvents.map((event) => (
              <Card key={event.id} className="event-list-card" hoverEffect={true}>
                <div className="event-date-badge">
                  <span className="date-day">{event.date.split(' ')[1].replace(',', '')}</span>
                  <span className="date-month">{event.date.split(' ')[0]}</span>
                </div>
                <div className="event-info-wrapper">
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-desc">{event.description}</p>
                  <div className="event-meta-list">
                    <span><Clock size={14} /> {event.time}</span>
                    <span><MapPin size={14} /> {event.location}</span>
                  </div>
                </div>
                <div className="event-action-wrapper">
                  <Button onClick={() => handleOpenRsvp(event)} variant="outline">
                    Register
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Archive */}
      <section className="container section-padding">
        <SectionTitle
          title="Past Events Archive"
          subtitle="Explore summaries and outlines from our past training courses and regional health outreach campaigns."
        />
        <div className="past-events-grid">
          {pastEvents.map((past) => (
            <Card key={past.id} className="past-event-card" hoverEffect={true}>
              <div className="past-event-header">
                <Badge text={past.category} type="neutral" />
                <span className="past-event-date">{past.date}</span>
              </div>
              <h4 className="past-event-title">{past.title}</h4>
              <p className="past-event-desc">{past.summary}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* RSVP Modal Portal */}
      <Modal
        isOpen={!!selectedEvent}
        onClose={handleCloseRsvp}
        title={rsvpStatus === 'success' ? 'Registration Confirmed' : `Register: ${selectedEvent?.title}`}
      >
        {rsvpStatus === 'success' ? (
          <div className="rsvp-success-block animate-scale-in">
            <CheckCircle2 className="success-icon" size={60} />
            <h3>You're Registered!</h3>
            <p>Thank you, <strong>{rsvpName}</strong>. A registration pass and access directions for the <strong>{selectedEvent?.title}</strong> have been emailed to <strong>{rsvpEmail}</strong>.</p>
            <div className="success-actions">
              <Button onClick={handleCloseRsvp} variant="primary">Close</Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleRsvpSubmit} className="rsvp-form">
            <p className="rsvp-form-text">Please provide your details below to register and secure your seat for this event.</p>
            
            <div className="form-group">
              <label htmlFor="rsvp-name">Full Name</label>
              <input
                id="rsvp-name"
                type="text"
                value={rsvpName}
                onChange={(e) => setRsvpName(e.target.value)}
                required
                disabled={rsvpStatus === 'loading'}
                placeholder="Dr. Alex Carter"
              />
            </div>

            <div className="form-group">
              <label htmlFor="rsvp-email">Email Address</label>
              <input
                id="rsvp-email"
                type="email"
                value={rsvpEmail}
                onChange={(e) => setRsvpEmail(e.target.value)}
                required
                disabled={rsvpStatus === 'loading'}
                placeholder="alex.carter@hospital.org"
              />
            </div>

            <div className="form-group">
              <label htmlFor="rsvp-institution">Hospital / University Chapter</label>
              <input
                id="rsvp-institution"
                type="text"
                value={rsvpInst}
                onChange={(e) => setRsvpInst(e.target.value)}
                required
                disabled={rsvpStatus === 'loading'}
                placeholder="Johns Hopkins Medicine"
              />
            </div>

            <div className="rsvp-form-actions">
              <Button type="submit" variant="secondary" isLoading={rsvpStatus === 'loading'}>
                Confirm Registration
              </Button>
              <Button onClick={handleCloseRsvp} variant="outline" disabled={rsvpStatus === 'loading'}>
                Cancel
              </Button>
            </div>
          </form>
        )}
      </Modal>
    </div>
  );
};
export default Events;
