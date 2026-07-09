import React, { useState } from 'react';
import { PageHeader } from '../../components/common/PageHeader';
import { Card } from '../../components/ui/Card';
import { Modal } from '../../components/ui/Modal';
import { Badge } from '../../components/ui/Badge';
import { ZoomIn, Calendar } from 'lucide-react';
import './Gallery.css';

export const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const photos = [
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

  const filteredPhotos = filter === 'All' 
    ? photos 
    : photos.filter(p => p.category === filter);

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
              onClick={() => setFilter(cat)}
              role="tab"
              aria-selected={filter === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="gallery-grid">
          {filteredPhotos.map((photo) => (
            <Card
              key={photo.id}
              className="gallery-card animate-scale-in"
              clickable={true}
              onClick={() => setSelectedPhoto(photo)}
              hoverEffect={true}
            >
              <div className={`gallery-visual-placeholder ${photo.colorClass}`}>
                <ZoomIn className="zoom-icon" size={32} />
                <span className="visual-category">{photo.category}</span>
              </div>
              <div className="gallery-card-content">
                <h4 className="gallery-photo-title">{photo.title}</h4>
                <div className="gallery-photo-meta">
                  <span><Calendar size={12} /> {photo.date}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Lightbox Zoom Modal */}
      <Modal
        isOpen={!!selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
        title={selectedPhoto?.title}
      >
        {selectedPhoto && (
          <div className="lightbox-content animate-scale-in">
            <div className={`lightbox-visual ${selectedPhoto.colorClass}`}>
              <ZoomIn size={48} className="lightbox-visual-icon" />
            </div>
            <div className="lightbox-details">
              <div className="lightbox-meta">
                <Badge text={selectedPhoto.category} type="primary" />
                <span className="lightbox-date"><Calendar size={14} /> {selectedPhoto.date}</span>
              </div>
              <p className="lightbox-desc">{selectedPhoto.desc}</p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};
export default Gallery;
