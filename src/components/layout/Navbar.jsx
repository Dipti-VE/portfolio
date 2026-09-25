import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Journey', href: '#journey' },
    { name: 'Skills', href: '#skills' },
    { name: 'Growth', href: '#growth' }
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container container">
        <div className="navbar-profile">
          <a href="#home" onClick={closeMenu} className="profile-link">
            <div className="profile-img-container">
              {/* Replace the src with your actual image path once you save it in the assets folder */}
              <img src="/profile.jpeg" alt="Dipti Bhowmik" className="profile-img" />
            </div>
            <div className="profile-info">
              <span className="profile-name">Dipti Bhowmik</span>
              <span className="profile-id">ID: TK12692</span>

            </div>
          </a>
        </div>

        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link"
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}
          <a href="#journey" className="btn-primary nav-cta" onClick={closeMenu}>Journey</a>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}
