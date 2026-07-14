import React, { useState, useEffect } from 'react';
import { SectionTitle } from '../../components/common/SectionTitle';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Loader } from '../../components/ui/Loader';
import { dataService } from '../../services/dataService';
import { Search, Download, FileText, Ban, Monitor, Shield, Globe, ArrowRight } from 'lucide-react';
import './Research.css';

export const Research = () => {
  const [studies, setStudies] = useState([]);
  const [publications, setPublications] = useState([]);
  const [isLoadingStudies, setIsLoadingStudies] = useState(true);
  const [isLoadingPubs, setIsLoadingPubs] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchStudies = async () => {
      try {
        const data = await dataService.getStudies();
        setStudies(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoadingStudies(false);
      }
    };

    const fetchPubs = async () => {
      try {
        const data = await dataService.getPublications();
        setPublications(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoadingPubs(false);
      }
    };

    fetchStudies();
    fetchPubs();
  }, []);

  const filteredPubs = publications.filter((pub) => {
    const query = searchQuery.toLowerCase();
    return (
      pub.title.toLowerCase().includes(query) ||
      pub.authors.toLowerCase().includes(query) ||
      pub.journal.toLowerCase().includes(query)
    );
  });

  return (
    <div className="research-page animate-fade-in">
      {/* Light blue/gray Research Hero Section (Aligned with 4th Screenshot) */}
      <section className="research-hero-section">
        <div className="container research-hero-container">
          <div className="research-hero-left">
            <h1 className="research-hero-title">
              Advancing Anesthesia Through Student-Led Research
            </h1>
            <p className="research-hero-subtitle">
              SACRA empowers the next generation of clinical investigators to tackle the most pressing challenges in global anesthesia through evidence-based collaborative studies and mentorship.
            </p>
            <div className="research-hero-actions">
              <a href="#active-studies" className="btn btn-primary-solid-arrow">
                Explore Active Projects <ArrowRight size={16} />
              </a>
              <a href="/about" className="btn btn-secondary-flat">
                Read Our Mission
              </a>
            </div>
          </div>

          <div className="research-hero-right">
            {/* Styled vector representation of the Pi symbol in the screenshot */}
            <svg width="220" height="220" viewBox="0 0 100 100" fill="none" stroke="#12263f" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" className="pi-vector-symbol">
              <path d="M20 25 L80 25" />
              <path d="M38 25 L38 75 C38 80, 30 80, 24 75" />
              <path d="M62 25 L62 70 C62 75, 68 80, 76 75" />
            </svg>
          </div>
        </div>
      </section>

      {/* Core Research Focus Areas (Aligned with 4th Screenshot) */}
      <section className="focus-areas-section">
        <div className="container">
          <div className="focus-section-header">
            <h2>Core Research Focus Areas</h2>
            <p>Our collaborative efforts are strategically channeled into three pillars that define the future of anesthesia safety and efficacy.</p>
          </div>

          <div className="focus-areas-grid">
            <Card className="focus-area-card" hoverEffect={true}>
              <div className="focus-icon-box blue-tint">
                <Monitor size={28} className="focus-icon-blue" />
              </div>
              <h3>Airway Management</h3>
              <p>Studying ventilation safety guidelines, video laryngoscopy access, and checklists for difficult airway inductions.</p>
            </Card>

            <Card className="focus-area-card" hoverEffect={true}>
              <div className="focus-icon-box green-tint">
                <Shield size={28} className="focus-icon-green" />
              </div>
              <h3>Patient Safety</h3>
              <p>Auditing the implementation of WHO surgical safety protocols, drug labeling compliance, and post-op outcomes.</p>
            </Card>

            <Card className="focus-area-card" hoverEffect={true}>
              <div className="focus-icon-box blue-tint">
                <Globe size={28} className="focus-icon-blue" />
              </div>
              <h3>Public Health</h3>
              <p>Investigating anesthesia accessibility, maternal surgical outcomes, and workforce capacities in developing nations.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Active Trials Section */}
      <section id="active-studies" className="container section-padding">
        <SectionTitle
          title="Active Trials & Observational Studies"
          subtitle="Our student networks coordinate clinical audits across multiple institutions under senior advisory boards."
        />
        {isLoadingStudies ? (
          <Loader type="skeleton-card" count={3} />
        ) : (
          <div className="active-studies-grid">
            {studies.map((study) => (
              <Card key={study.id} className="study-card" hoverEffect={true}>
                <div className="study-card-header">
                  <Badge
                    text={study.status}
                    type={study.status === 'Active' ? 'success' : study.status === 'Recruiting' ? 'info' : 'neutral'}
                  />
                  <span className="study-progress-pct">{study.progress}% Complete</span>
                </div>
                <h3 className="study-card-title">{study.title}</h3>
                <span className="study-investigator">{study.investigator}</span>
                <p className="study-description">{study.description}</p>
                <div className="study-progress-bar-wrapper">
                  <div className="study-progress-bar" style={{ width: `${study.progress}%` }}></div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </section>

      {/* Publications Table Section */}
      <section className="publications-section">
        <div className="container">
          <SectionTitle
            title="Published Papers & Abstracts"
            subtitle="Explore research reviews and clinical trials published by SACRA student network members in peer-reviewed journals."
          />

          <div className="publications-table-container">
            {/* Search Input */}
            <div className="search-bar-wrapper">
              <Search className="search-icon" size={20} />
              <input
                type="text"
                placeholder="Search publications by title, author, or journal..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="table-search-input"
                aria-label="Search publications table"
              />
            </div>

            {isLoadingPubs ? (
              <Loader type="skeleton-table" count={4} />
            ) : filteredPubs.length > 0 ? (
              <div className="table-responsive-wrapper">
                <table className="pubs-table">
                  <thead>
                    <tr>
                      <th>Title & Authors</th>
                      <th>Journal</th>
                      <th>Date</th>
                      <th>DOI Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredPubs.map((pub) => (
                      <tr key={pub.id} className="pub-table-row animate-fade-in">
                        <td className="pub-info-cell">
                          <div className="pub-title-wrapper">
                            <FileText className="pub-file-icon" size={16} />
                            <span className="pub-title">{pub.title}</span>
                          </div>
                          <span className="pub-authors">{pub.authors}</span>
                        </td>
                        <td className="pub-journal">{pub.journal}</td>
                        <td className="pub-date">
                          {new Date(pub.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short'
                          })}
                        </td>
                        <td>
                          <a
                            href={pub.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pub-download-link"
                          >
                            <Download size={16} />
                            <span>Link</span>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              /* Empty State */
              <div className="publications-empty-state animate-scale-in">
                <Ban size={48} className="empty-icon" />
                <h4>No Publications Found</h4>
                <p>We couldn't find any papers matching "{searchQuery}". Please check spelling or refine query filters.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Research;
