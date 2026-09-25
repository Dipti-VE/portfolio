import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import clsx from 'clsx';
import './Section.css';

export default function Section({ id, className, children, title, subtitle }) {
  const scrollRef = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id={id} className={clsx('section', className)}>
      <div 
        ref={scrollRef} 
        className="container section-content fade-in visible"
      >
        {(title || subtitle) && (
          <div className="section-header">
            {title && <h2 className="section-title text-gradient">{title}</h2>}
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
