import React from 'react';
import Section from '../../layout/Section';
import { techSkills } from '../../../data/portfolioData';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import './Skills.css';

const EvolutionStage = ({ stage, index }) => {
  const scrollRef = useScrollAnimation({ threshold: 0.5 });
  
  return (
    <div ref={scrollRef} className="evolution-stage fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
      <div className="stage-number">Stage {index + 1}</div>
      <div className="stage-content glass-card">
        <h4>{stage.title}</h4>
        <ul>
          {stage.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
      {index < 4 && <div className="stage-connector">↓</div>}
    </div>
  );
};

export default function Skills() {
  const evolutionStages = [
    { title: "Frontend Development", points: ["React", "React Native", "UI Development", "Components", "Client-side implementation"] },
    { title: "MERN Stack", points: ["MongoDB", "Express", "React", "Node.js"] },
    { title: "Backend & Systems", points: ["REST APIs", "Redis", "Webhooks", "FastAPI", "Next.js", "Server-side logic"] },
    { title: "AI Applications", points: ["AI Chatbots", "Image Analysis", "Document Analysis", "LLM-based workflows"] },
    { title: "AI Agents & Automation", points: ["Agent Workflows", "Requirement Analysis", "Proposal Gen", "Process Automation"] }
  ];

  return (
    <Section id="skills" title="How My Technical Skills Evolved" subtitle="A visual progression of my technical capabilities throughout the internship.">
      
      <div className="evolution-container">
        {evolutionStages.map((stage, index) => (
          <EvolutionStage key={index} stage={stage} index={index} />
        ))}
      </div>

      <div className="tech-wall">
        <h3 className="tech-wall-title">Technologies & Concepts I Worked With</h3>
        
        <div className="tech-grid">
          {Object.entries(techSkills).map(([category, skills], index) => (
            <div key={category} className="tech-category glass-card">
              <h4 className="category-title">{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
              <div className="skill-tags">
                {skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
