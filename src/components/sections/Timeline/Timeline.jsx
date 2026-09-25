import React, { useState } from 'react';
import Section from '../../layout/Section';
import { journeyTimeline } from '../../../data/portfolioData';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './Timeline.css';

const TimelineItem = ({ item, index }) => {
  const scrollRef = useScrollAnimation({ threshold: 0.2 });
  const [isExpanded, setIsExpanded] = useState(false);

  const hasExtraDetails = (item.learnings && item.learnings.length > 0) || (item.challenges && item.challenges.length > 0);

  return (
    <div ref={scrollRef} className={`timeline-item fade-in visible ${index % 2 === 0 ? 'left' : 'right'}`}>
      <div className="timeline-dot"></div>

      <div className="timeline-content glass-card">
        <div className="timeline-header">
          <span className="timeline-date">{item.date}</span>
          {item.tag && <span className="badge">{item.tag}</span>}
        </div>

        <h3 className="timeline-title">{item.title}</h3>
        {item.role && <p className="timeline-role">{item.role}</p>}
        {item.mentor && <p className="timeline-mentor">Mentor/Guidance: {item.mentor}</p>}

        <p className="timeline-desc">{item.description}</p>

        {item.technologies && item.technologies.length > 0 && (
          <div className="timeline-tech">
            {item.technologies.map((tech, i) => (
              <span key={i} className="tech-pill">{tech}</span>
            ))}
          </div>
        )}

        {item.contributions && item.contributions.length > 0 && (
          <div className="timeline-contributions">
            <h4>Contributions:</h4>
            <ul>
              {item.contributions.map((cont, i) => (
                <li key={i}>{cont}</li>
              ))}
            </ul>
          </div>
        )}

        {hasExtraDetails && (
          <div className="timeline-expand">
            <button
              className="btn-text toggle-details-btn"
              onClick={() => setIsExpanded(!isExpanded)}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'transparent', border: 'none', color: 'var(--accent-color)', cursor: 'pointer', fontWeight: 'bold', padding: '0', marginTop: '10px' }}
            >
              {isExpanded ? 'Show Less' : 'See What I Learned & Challenges'}
              {isExpanded ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
            </button>

            {isExpanded && (
              <div className="expanded-details" style={{ marginTop: '15px' }}>
                {item.learnings && item.learnings.length > 0 && (
                  <div className="timeline-contributions">
                    <h4 style={{ color: 'var(--accent-color)' }}>What I Learned:</h4>
                    <ul>
                      {item.learnings.map((learning, i) => (
                        <li key={i}>{learning}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {item.challenges && item.challenges.length > 0 && (
                  <div className="timeline-contributions" style={{ marginTop: '10px' }}>
                    <h4 style={{ color: 'var(--accent-color)' }}>Challenges Faced:</h4>
                    <ul>
                      {item.challenges.map((challenge, i) => (
                        <li key={i}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        <div className="timeline-actions" style={{ display: 'flex', gap: '10px', marginTop: '1.5rem' }}>
          {item.liveLink && item.liveLink !== "#" && (
            <a href={item.liveLink} target="_blank" rel="noopener noreferrer" className="btn-icon" title="View Live Website">
              <FaExternalLinkAlt size={16} />
            </a>
          )}
          {(item.github && item.github !== "#" && item.github !== "") && (
            <a href={item.github} target="_blank" rel="noopener noreferrer" className="btn-icon" title="View Source on GitHub">
              <FaGithub size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Timeline() {
  return (
    <Section id="journey" title="My Journey Timeline" subtitle="A chronological view of my progression, projects, and learning throughout the internship.">
      <div className="timeline-container">
        <div className="timeline-line"></div>
        {journeyTimeline.map((item, index) => (
          <TimelineItem key={item.id} item={item} index={index} />
        ))}
      </div>
    </Section>
  );
}
