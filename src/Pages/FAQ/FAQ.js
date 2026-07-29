import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Users, FlaskConical, ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.css';

export const FAQ = () => {
  const [openIds, setOpenIds] = useState({});

  const toggleFAQ = (id) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const faqCategories = [
    {
      categoryTitle: 'General Membership',
      categoryIcon: <Users className="faq-category-icon blue" size={24} />,
      items: [
        {
          id: 'gen-1',
          question: 'Who is eligible to join SACRA?',
          answer: 'Any anesthesia student enrolled at Kibogora Polytechnic or another recognized Rwandan institution is eligible to apply for full membership. Students from other health-related programs who have a strong interest in anesthesia safety, research, and community health outreach may apply as associate members. Applicants must complete the registration form and agree to abide by SACRA\'s constitution and code of conduct, as adopted at the 1st General Assembly on 20 May 2025.'
        },
        {
          id: 'gen-2',
          question: 'What are the primary benefits of membership?',
          answer: 'Members gain access to SACRA\'s community health campaigns, campus seminars and educational workshops, peer-to-peer study groups, simulation training sessions at Kibogora Polytechnic\'s clinical skills lab, and leadership development programs. Members also have the opportunity to participate in student-led research projects, contribute to public health outreach in Rusizi District, and build a strong professional network with fellow anesthesia students.'
        }
      ]
    },
    {
      categoryTitle: 'Research & Projects',
      categoryIcon: <FlaskConical className="faq-category-icon teal" size={24} />,
      items: [
        {
          id: 'res-1',
          question: 'How can I start a new research project?',
          answer: 'To propose a project, submit a structured research abstract concept through our application portal. The SACRA academic board reviews submissions for methodology and safety guidelines before registering them as active trials.'
        },
        {
          id: 'res-2',
          question: 'Does SACRA provide funding for student-led research?',
          answer: 'Currently, SACRA operates on a volunteer and institutional support basis. While formal research grant funding is not yet available, SACRA actively supports student researchers by providing guidance on methodology, facilitating access to supervisors, and helping members present their findings at campus events and local health forums. As SACRA grows, formal grant and support mechanisms will be established and announced through official SACRA channels.'
        }
      ]
    }
  ];

  return (
    <div className="faq-page animate-fade-in">
      {/* Soft Blue FAQ Hero Banner (Aligned with Mockup) */}
      <section className="faq-hero-section">
        <div className="container faq-hero-container">
          <span className="faq-hero-badge">Help Center</span>
          <h1 className="faq-hero-title">Frequently Asked Questions</h1>
          <p className="faq-hero-subtitle">
            Find comprehensive answers to common inquiries about our research initiatives, membership benefits, and collaborative opportunities within the global anesthetist community.
          </p>
        </div>
      </section>

      {/* Accordion Questions Area */}
      <section className="container section-padding faq-main-section">
        <div className="faq-content-container">
          {faqCategories.map((category, catIdx) => (
            <div key={catIdx} className="faq-category-block">
              {/* Category Header Row */}
              <div className="faq-category-header">
                {category.categoryIcon}
                <h2>{category.categoryTitle}</h2>
              </div>

              {/* Accordion List */}
              <div className="faq-accordion-list">
                {category.items.map((item) => {
                  const isOpen = !!openIds[item.id];
                  return (
                    <Card
                      key={item.id}
                      className={`faq-item-card ${isOpen ? 'faq-item-card-open' : ''}`}
                      hoverEffect={false}
                    >
                      <button
                        className="faq-toggle-trigger"
                        onClick={() => toggleFAQ(item.id)}
                        aria-expanded={isOpen}
                      >
                        <span className="faq-question-text">{item.question}</span>
                        {isOpen ? (
                          <ChevronUp size={18} className="chevron-icon" />
                        ) : (
                          <ChevronDown size={18} className="chevron-icon" />
                        )}
                      </button>
                      
                      {isOpen && (
                        <div className="faq-answer-content animate-slide-up">
                          <p>{item.answer}</p>
                        </div>
                      )}
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact support sidebar */}
        <div className="faq-sidebar-cta">
          <Card className="sidebar-cta-card" hoverEffect={false}>
            <div className="faq-contact-box">
              <h4>Still Have Questions?</h4>
              <p>If you can't find the answers you're looking for, contact our support desk directly at Kibogora Polytechnic – Rusizi Campus, or reach us at <a href="mailto:sacra.59@yahoo.com">sacra.59@yahoo.com</a> / <a href="tel:+250789402382">+250 789 402 382</a>.</p>
            </div>
            <Button to="/contact" variant="primary">Contact Our Support</Button>
          </Card>
        </div>
      </section>
    </div>
  );
};
export default FAQ;
