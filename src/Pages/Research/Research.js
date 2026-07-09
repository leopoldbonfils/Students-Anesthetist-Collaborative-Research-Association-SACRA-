import React, { useState, useEffect } from 'react';
import { PageHeader } from '../../components/common/PageHeader';
import { SectionTitle } from '../../components/common/SectionTitle';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Loader } from '../../components/ui/Loader';
import { dataService } from '../../services/dataService';
import { Search, Download, FileText, Ban } from 'lucide-react';
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
      <PageHeader
        title="Research Collaborative"
        description="Explore our active clinical audits, multicenter observational trials, and student-coauthored bibliography."
      />

      {/* Active Trials Section */}
      <section className="container section-padding">
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
