import React from 'react';
import Section from '../../layout/Section';
import { matrixProjects, learnings, challenges } from '../../../data/portfolioData';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import './Growth.css';

const LearningCard = ({ learning, index }) => {
  const scrollRef = useScrollAnimation({ threshold: 0.2 });
  return (
    <div ref={scrollRef} className="learning-card glass-card fade-in" style={{ animationDelay: `${(index % 3) * 0.1}s` }}>
      <h4>{learning.title}</h4>
      <p>{learning.description}</p>
    </div>
  );
};

const ChallengeCard = ({ item, index }) => {
  const scrollRef = useScrollAnimation({ threshold: 0.2 });
  return (
    <div ref={scrollRef} className="challenge-card glass-card fade-in" style={{ animationDelay: `${(index % 2) * 0.1}s` }}>
      <div className="challenge-header">
        <span className="challenge-icon">⚠️</span>
        <h4>{item.challenge}</h4>
      </div>
      <div className="challenge-body">
        <div className="challenge-item">
          <strong>What I Did:</strong>
          <p>{item.action}</p>
        </div>
        <div className="challenge-item">
          <strong>What I Learned:</strong>
          <p>{item.learning}</p>
        </div>
      </div>
    </div>
  );
};

export default function Growth() {
  const tableRef = useScrollAnimation({ threshold: 0.2 });

  return (
    <Section id="growth" title="Growth & Reflections" subtitle="Looking back at the projects, challenges, and core learnings from this internship.">
      
      <div className="matrix-section">
        <h3 className="subsection-title">Project Matrix</h3>
        <div ref={tableRef} className="table-responsive glass-card fade-in">
          <table className="project-matrix">
            <thead>
              <tr>
                <th>Project</th>
                <th>Period</th>
                <th>Role</th>
                <th>Area</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {matrixProjects.map((proj, index) => (
                <tr key={index}>
                  <td className="fw-600">{proj.name}</td>
                  <td>{proj.period}</td>
                  <td>{proj.role}</td>
                  <td><span className="matrix-badge">{proj.area}</span></td>
                  <td>
                    <span className={`status-dot ${proj.status.toLowerCase().includes('ongoing') ? 'ongoing' : 'completed'}`}></span>
                    {proj.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="learnings-section">
        <h3 className="subsection-title">What I Learned</h3>
        <div className="learnings-grid">
          {learnings.map((learning, index) => (
            <LearningCard key={index} learning={learning} index={index} />
          ))}
        </div>
      </div>

      <div className="challenges-section">
        <h3 className="subsection-title">Challenges That Helped Me Grow</h3>
        <div className="challenges-grid">
          {challenges.map((item, index) => (
            <ChallengeCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
      
    </Section>
  );
}
