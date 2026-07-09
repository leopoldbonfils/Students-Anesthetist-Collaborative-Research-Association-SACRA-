import React, { useState } from 'react';
import { PageHeader } from '../../components/common/PageHeader';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.css';

export const FAQ = () => {
  const [openIds, setOpenIds] = useState({});

  const toggleFAQ = (id) => {
    setOpenIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const faqCategories = [
    {
      category: 'General Questions',
      questions: [
        {
          id: 'gen-1',
          q: 'What is SACRA?',
          a: 'SACRA stands for Students Anesthetist Collaborative Research Association. We are an international network of medical students, anesthesia residents, and clinical advisors conducting collaborative audits, research, and simulation training campaigns to advance anesthesia safety.'
        },
        {
          id: 'gen-2',
          q: 'Who runs the association?',
          a: 'SACRA is student-led, directed by an elected executive student board. Our research projects and simulation curricula are overseen by a senior faculty advisory board comprised of board-certified academic anesthesiologists.'
        }
      ]
    },
    {
      category: 'Membership',
      questions: [
        {
          id: 'mem-1',
          q: 'Is there a membership fee for medical students?',
          a: 'No, membership in our core student tier is completely free for undergraduate medical students worldwide. Trainees can register using their university email coordinates.'
        },
        {
          id: 'mem-2',
          q: 'How do I start a new university chapter?',
          a: 'If your medical school or hospital does not have an active chapter, you can submit an application via our Contact page. We will provide you with starting documents, simulation curricula templates, and match you with regional student coordinators.'
        }
      ]
    },
    {
      category: 'Research & Publications',
      questions: [
        {
          id: 'res-1',
          q: 'Do students get co-authorship on SACRA publication papers?',
          a: 'Yes! All students who actively collect data or draft protocols for our observational audits are recognized as collaborative authors. Published papers attribute study accomplishments to individual contributors and local chapters.'
        },
        {
          id: 'res-2',
          q: 'Can I apply for travel or simulation workshop grants?',
          a: 'Active resident and institutional board members can submit research project plans to our funding committee. Selected chapters receive support grants to procure clinical training resources, simulator aids, and offset conference travel expenses.'
        }
      ]
    }
  ];

  return (
    <div className="faq-page animate-fade-in">
      <PageHeader
        title="Frequently Asked Questions"
        description="Find answers to common questions about research collaboration, membership tiers, and university chapters."
      />

      <section className="container section-padding faq-main-section">
        <div className="faq-layout">
          <div className="faq-accordion-container">
            {faqCategories.map((cat, catIdx) => (
              <div key={catIdx} className="faq-category-block">
                <h3 className="faq-category-title">{cat.category}</h3>
                <div className="faq-list">
                  {cat.questions.map((item) => {
                    const isOpen = !!openIds[item.id];
                    return (
                      <Card
                        key={item.id}
                        className={`faq-item-card ${isOpen ? 'faq-item-open' : ''}`}
                        hoverEffect={false}
                        clickable={true}
                        onClick={() => toggleFAQ(item.id)}
                      >
                        <div className="faq-question-row">
                          <span className="faq-question-text">{item.q}</span>
                          <button className="faq-toggle-btn" aria-label="Toggle answer">
                            {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                          </button>
                        </div>
                        <div className={`faq-answer-container ${isOpen ? 'answer-open' : 'answer-closed'}`}>
                          <p className="faq-answer-text">{item.a}</p>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Help sidebar */}
          <div className="faq-sidebar">
            <Card className="faq-help-card" hoverEffect={false}>
              <HelpCircle className="help-card-icon" size={32} />
              <h4>Still Need Assistance?</h4>
              <p>If you can't find your answer here, our team is always ready to guide you. Send us an inquiry details sheet.</p>
              <Button to="/contact" variant="primary" className="help-card-btn">
                Contact Our Support
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};
export default FAQ;
