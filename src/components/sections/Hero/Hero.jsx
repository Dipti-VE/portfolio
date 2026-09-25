import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { personalInfo } from '../../../data/portfolioData';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="glow-orb glow-orb-1"></div>
        <div className="glow-orb glow-orb-2"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content fade-in visible">
          <div className="hero-badge">
            <span className="badge">Internship Journey • {personalInfo.startDate} – Present</span>
          </div>
          
          <h1 className="hero-title">
            My Internship <span className="text-gradient">Journey</span>
          </h1>
          
          <h2 className="hero-subtitle">
           AIML DEVELOPER
          </h2>
          
          <p className="hero-description">
            An interactive showcase of the projects, technologies, Proofs of Concept, and engineering challenges I worked on throughout my internship.
          </p>
          
          <div className="hero-cta">
            <a href="#journey" className="btn-primary">
              Explore My Journey <ArrowRight size={18} />
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <FaGithub size={20} /> GitHub
            </a>
          </div>
        </div>
        
        <div className="hero-visual fade-in visible" style={{transitionDelay: '0.2s'}}>
          <div className="visual-path">
            <div className="path-node">Frontend</div>
            <div className="path-line"></div>
            <div className="path-node">MERN</div>
            <div className="path-line"></div>
            <div className="path-node">AI</div>
            <div className="path-line"></div>
            <div className="path-node active">AI Agents</div>
          </div>
        </div>
      </div>
    </section>
  );
}
