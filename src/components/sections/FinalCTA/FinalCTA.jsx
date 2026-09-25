import React from 'react';
import Section from '../../layout/Section';
import { ArrowRight, Mail } from 'lucide-react';
import { personalInfo } from '../../../data/portfolioData';
import './FinalCTA.css';

export default function FinalCTA() {
  return (
    <Section id="contact" className="final-cta-section">
      <div className="final-cta-content glass-card fade-in">
        <h2>Still Building. Still Learning.</h2>
        <p>
          From building frontend interfaces to exploring full-stack systems and AI-powered applications, my internship has been a continuous journey of learning, experimentation, and real-world development.
        </p>
        
        <div className="cta-buttons">
          <a href="#journey" className="btn-primary">
            Explore My Journey <ArrowRight size={18} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            Connect With Me
          </a>
        </div>
      </div>
    </Section>
  );
}
