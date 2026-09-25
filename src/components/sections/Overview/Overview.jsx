import React from 'react';
import Section from '../../layout/Section';
import { Calendar, Briefcase, Code, Terminal, Layers, Zap } from 'lucide-react';
import { personalInfo } from '../../../data/portfolioData';
import './Overview.css';

export default function Overview() {
  const overviewCards = [
    {
      icon: <Calendar className="card-icon" />,
      label: "Internship Start",
      value: personalInfo.startDate
    },
    {
      icon: <Briefcase className="card-icon" />,
      label: "Primary Role",
      value: "AIML TRAINEE"
    },
    {
      icon: <Layers className="card-icon" />,
      label: "Major Areas",
      value: "Frontend • MERN • Backend • AI"
    },
    {
      icon: <Code className="card-icon" />,
      label: "Client Projects",
      value: "Contributed"
    },
    {
      icon: <Terminal className="card-icon" />,
      label: "Internal Projects",
      value: "Developed"
    },
    {
      icon: <Zap className="card-icon" />,
      label: "Proofs of Concept",
      value: "Explored"
    }
  ];

  return (
    <Section id="overview" title="Internship at a Glance">
      <div className="overview-grid">
        {overviewCards.map((card, index) => (
          <div 
            key={index} 
            className="glass-card overview-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="icon-wrapper">
              {card.icon}
            </div>
            <div className="card-content">
              <span className="card-label">{card.label}</span>
              <h3 className="card-value">{card.value}</h3>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
