import React from 'react';
import Section from '../../layout/Section';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './CaseStudy.css';

export default function CaseStudy({ project }) {
  if (!project) return null;

  return (
    <div className="case-study glass-card fade-in">
      <div className="case-study-header">
        {project.badge && <span className="badge featured-badge">{project.badge}</span>}
        <h3 className="case-study-title">{project.title}</h3>
        <p className="case-study-period">{project.period}</p>
      </div>

      <div className="case-study-content">
        <p className="case-study-desc">{project.description}</p>

        {project.goal && (
          <div className="case-study-section">
            <h4>The Goal</h4>
            <p>{project.goal}</p>
          </div>
        )}

        {project.problem && (
          <div className="case-study-section">
            <h4>The Problem</h4>
            <p>{project.problem}</p>
          </div>
        )}

        {project.solution && (
          <div className="case-study-section">
            <h4>The Solution</h4>
            <p>{project.solution}</p>
          </div>
        )}

        {project.workflow && (
          <div className="case-study-workflow">
            <h4>Workflow</h4>
            <div className="workflow-diagram">
              {project.workflow.map((step, index) => (
                <React.Fragment key={index}>
                  <div className="workflow-step">{step}</div>
                  {index < project.workflow.length - 1 && <div className="workflow-arrow">↓</div>}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        {project.contributions && (
          <div className="case-study-section">
            <h4>My Role & Contributions</h4>
            <div className="contribution-grid">
              {project.contributions.map((cont, i) => (
                <div key={i} className="contribution-card">
                  <h5>{cont.title}</h5>
                  <p>{cont.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {project.concepts && (
          <div className="case-study-section">
            <h4>Key Concepts</h4>
            <div className="concept-tags">
              {project.concepts.map((concept, i) => (
                <span key={i} className="concept-tag">{concept}</span>
              ))}
            </div>
          </div>
        )}

        <div className="case-study-actions" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
          {project.liveLink && project.liveLink !== "#" && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn-icon" title="View Live Website">
              <FaExternalLinkAlt size={16} />
            </a>
          )}
          {project.github && project.github !== "#" && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-icon" title="View Source on GitHub">
              <FaGithub size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
