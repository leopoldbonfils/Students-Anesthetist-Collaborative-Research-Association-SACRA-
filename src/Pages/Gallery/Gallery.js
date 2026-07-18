import React, { useState, useEffect } from 'react';
import { PageHeader } from '../../components/common/PageHeader';
import { ZoomIn, Calendar, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { createPortal } from 'react-dom';
import './Gallery.css';

const MOCK_PHOTOS = [
  {
    id: 'photo-01',
    title: 'Ultrasound-Guided Regional Blocks Workshop',
    category: 'Workshops',
    date: 'May 14, 2026',
    desc: 'Students practicing needle alignment checks and nerve localization under ultrasound imaging guides.',
    colorClass: 'block-blue'
  },
  {
    id: 'photo-02',
    title: 'Airway Safety Audit Symposium Presentation',
    category: 'Symposiums',
    date: 'February 22, 2026',
    desc: 'Elena Rostova presenting the multi-center observational audit on anesthesia induction compliance rates.',
    colorClass: 'block-teal'
  },
  {
    id: 'photo-03',
    title: 'Simulation Lab: Pediatric Crisis Drill',
    category: 'Workshops',
    date: 'November 05, 2025',
    desc: 'Fellows auditing crisis resource management compliance checklists in simulation anesthesia recovery suite.',
    colorClass: 'block-navy'
  },
  {
    id: 'photo-04',
    title: 'Outreach Campaign: Surgical Safety WHO Checklists',
    category: 'Outreach',
    date: 'September 18, 2025',
    desc: 'SACRA student team training local health workers in community health clinics on surgery monitoring.',
    colorClass: 'block-green'
  },
  {
    id: 'photo-05',
    title: 'Annual Board Meeting & Committee Alignment',
    category: 'Symposiums',
    date: 'June 10, 2025',
    desc: 'Our faculty board chairs and student executive team planning the fellowship grants roadmap.',
    colorClass: 'block-blue'
  },
  {
    id: 'photo-06',
    title: 'Geriatric Cognitive Dysfunction Trials Group',
    category: 'Outreach',
    date: 'April 02, 2025',
    desc: 'Reviewing clinical biomarker protocols for postoperative cognitive dysfunctions in geriatric patients.',
    colorClass: 'block-teal'
  }
];

const ASPECT_RATIOS = ['16-9', '4-3', '1-1', '3-2'];

export const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [photos, setPhotos] = useState(MOCK_PHOTOS);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/gallery');
        if (response.ok) {
          const data = await response.json();
          if (data && data.length > 0) {
            const formatted = data.map((item, idx) => ({
              id: item.id,
              title: item.name,
              category: item.album || 'Workshops',
              url: item.url,
              date: new Date(item.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
              desc: item.name + ' uploaded by ' + item.uploadedBy,
              colorClass: ['block-blue', 'block-teal', 'block-navy', 'block-green'][idx % 4]
            }));
            setPhotos(formatted);
          }
        }
      } catch (err) {
        console.warn('Could not load gallery from server, using local mock data:', err);
      }
    };
    fetchPhotos();
  }, []);

  const filteredPhotos = filter === 'All' 
    ? photos 
    : photos.filter(p => p.category === filter);

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredPhotos.length - 1));
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev < filteredPhotos.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    if (lightboxIndex === null) return;
    
    // Prevent scrolling behind lightbox
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setLightboxIndex(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [lightboxIndex, filteredPhotos]);

  const activePhoto = lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  return (
    <div className="gallery-page animate-fade-in">
      <PageHeader
        title="Association Gallery"
        description="Explore snapshots of our clinical simulation workshops, research symposia, and surgical checklist audits."
      />

      {/* Filter Category Pills */}
      <section className="container section-padding">
        <div className="gallery-filters" role="tablist">
          {['All', 'Workshops', 'Symposiums', 'Outreach'].map((cat) => (
            <button
              key={cat}
              className={`filter-pill ${filter === cat ? 'filter-pill-active' : ''}`}
              onClick={() => {
                setFilter(cat);
                setLightboxIndex(null); // Close lightbox if changing filter
              }}
              role="tab"
              aria-selected={filter === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="gallery-grid">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              className="gallery-item animate-scale-in"
              onClick={() => setLightboxIndex(index)}
            >
              <div className="gallery-image-container">
                {photo.url ? (
                  <img src={photo.url} alt={photo.title} className="gallery-image" />
                ) : (
                  <div className={`gallery-placeholder ${photo.colorClass}`} />
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Zoom Portal */}
      {activePhoto && createPortal(
        <div 
          className="custom-lightbox animate-fade-in" 
          role="dialog" 
          aria-modal="true"
          onClick={() => setLightboxIndex(null)}
          tabIndex={-1}
        >
          {/* Close button */}
          <button 
            className="lightbox-close-btn" 
            onClick={() => setLightboxIndex(null)} 
            aria-label="Close full screen view"
          >
            <X size={24} />
          </button>

          {/* Navigation Arrows */}
          {filteredPhotos.length > 1 && (
            <>
              <button 
                className="lightbox-nav-btn prev" 
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                aria-label="Previous photo"
              >
                <ChevronLeft size={36} />
              </button>
              <button 
                className="lightbox-nav-btn next" 
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                aria-label="Next photo"
              >
                <ChevronRight size={36} />
              </button>
            </>
          )}

          {/* Main Content Area */}
          <div className="lightbox-main animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-image-wrapper">
              {activePhoto.url ? (
                <img src={activePhoto.url} alt={activePhoto.title} className="lightbox-image" />
              ) : (
                <div className={`gallery-placeholder ${activePhoto.colorClass} aspect-3-2`} style={{ width: '80vw', maxWidth: '600px', height: '400px' }}>
                  <ZoomIn size={64} style={{ opacity: 0.3, color: 'white' }} />
                </div>
              )}
            </div>

            {/* Captions & Info */}
            <div className="lightbox-caption-panel">
              <div className="lightbox-caption-header">
                <h3 className="lightbox-caption-title">{activePhoto.title}</h3>
                <div className="lightbox-caption-meta">
                  <span className="gallery-item-category-badge">{activePhoto.category}</span>
                  <span><Calendar size={14} style={{ verticalAlign: 'middle', marginRight: '4px' }} /> {activePhoto.date}</span>
                </div>
              </div>
              <p className="lightbox-caption-desc">{activePhoto.desc}</p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};
export default Gallery;
