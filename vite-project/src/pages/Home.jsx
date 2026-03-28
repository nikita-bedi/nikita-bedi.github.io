import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import selectedPublicationsData from '../data/selectedPublications'
import selectedPresentationsData from '../data/selectedPresentations'
import newsData from '../data/news'
import '../App.css'

function Home({ theme, toggleTheme }) {
  const [expandedSections, setExpandedSections] = useState({
    publications: false,
    presentations: false,
    cv: false,
    contact: false
  })
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false)
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const sectionRefs = useRef({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id
            setExpandedSections(prev => ({
              ...prev,
              [sectionId]: true
            }))
          }
        })
      },
      { threshold: 0.1, rootMargin: '-100px 0px 0px 0px' }
    )

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleContactSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    
    try {
      const response = await fetch('https://formspree.io/f/nbedi@ucla.edu', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      
      if (response.ok) {
        setFormSubmitted(true)
        setContactForm({ name: '', email: '', message: '' })
        setTimeout(() => setFormSubmitted(false), 5000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
    }
  }

  const handleFormChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <div className="animated-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-name">Nikita Bedi</div>
          <button 
            className="hamburger" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className={`nav-right ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <ul>
              <li className="dropdown">
                <a 
                  onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)} 
                  style={{ cursor: 'pointer' }}
                  className="dropdown-toggle"
                >
                  About
                </a>
                {aboutDropdownOpen && (
                  <ul className="dropdown-menu">
                    <li><a onClick={() => { scrollToSection('news'); setMobileMenuOpen(false); }} style={{ cursor: 'pointer' }}>News</a></li>
                    <li><Link to="/about" onClick={() => setMobileMenuOpen(false)}>About Me</Link></li>
                  </ul>
                )}
              </li>
              <li><a onClick={() => { scrollToSection('publications'); setMobileMenuOpen(false); }} style={{ cursor: 'pointer' }}>Publications</a></li>
              <li><a onClick={() => { scrollToSection('presentations'); setMobileMenuOpen(false); }} style={{ cursor: 'pointer' }}>Presentations</a></li>
              <li><Link to="/projects" onClick={() => setMobileMenuOpen(false)}>Projects</Link></li>
              <li><a onClick={() => { scrollToSection('cv'); setMobileMenuOpen(false); }} style={{ cursor: 'pointer' }}>CV</a></li>
              <li><a onClick={() => { scrollToSection('contact'); setMobileMenuOpen(false); }} style={{ cursor: 'pointer' }}>Contact</a></li>
            </ul>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>
        </div>
      </nav>

      <div className="container">
        <header>
          <div className="header-content">
            <img className="headshot" src="/profile.jpg?v=3" alt="Nikita Bedi" />
            <div className="header-text">
              <h1>Nikita Bedi</h1>
              <div className="title">Applied ML Researcher</div>
              <div className="affiliation">Stanford University · Holsinger Lab</div>
              <p>I'm an applied machine learning researcher working at the intersection of AI and medicine. My work focuses on building multimodal AI systems for oncology and surgery, with expertise in computer vision, medical imaging, and language models.</p>
              <div className="contact-links">
                <a href="mailto:nbedi@ucla.edu" aria-label="Email" title="Email">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </a>
                <a href="https://github.com/nikita-bedi?tab=repositories" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                </a>
                <a href="https://linkedin.com/in/nikita-bedi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="https://scholar.google.com/citations?user=hBLItS0AAAAJ&hl=en" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar" title="Google Scholar">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg>
                </a>
              </div>
            </div>
          </div>
        </header>

        <section id="news">
          <h2>News</h2>
          <p className="section-intro">Here's what I've been up to lately!</p>
          {newsData.map((item, index) => (
            <div key={index} className="news-item">
              <div className="news-date">{item.date}</div>
              {item.link ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="news-content-link">
                  <div className="news-content">{item.content}</div>
                </a>
              ) : (
                <div className="news-content">{item.content}</div>
              )}
            </div>
          ))}
        </section>

        <section id="publications" ref={(el) => sectionRefs.current.publications = el}>
          <h2>Selected Publications</h2>
          {expandedSections.publications && (
            <div className="section-content">
              <p className="section-intro">A selection of my research work in medical AI and computer vision.</p>
              {selectedPublicationsData.map((pub, index) => (
                <div key={index} className="publication">
                  {pub.doi ? (
                    <a href={pub.doi} target="_blank" rel="noopener noreferrer" className="publication-link">
                      <h3>{pub.title}</h3>
                    </a>
                  ) : (
                    <h3>{pub.title}</h3>
                  )}
                  <div className="authors" dangerouslySetInnerHTML={{ __html: pub.authors }}></div>
                  <div className="venue">{pub.venue}</div>
                  {pub.note && <div className="note">{pub.note}</div>}
                </div>
              ))}
            </div>
          )}
        </section>

        <section id="presentations" ref={(el) => sectionRefs.current.presentations = el}>
          <h2>Selected Presentations</h2>
          {expandedSections.presentations && (
            <div className="section-content">
              <p className="section-intro">Conference talks and presentations from recent work.</p>
              {selectedPresentationsData.map((pres, index) => (
                <div key={index} className="publication">
                  <h3>{pres.title}</h3>
                  <div className="authors" dangerouslySetInnerHTML={{ __html: pres.authors }}></div>
                  <div className="venue">{pres.venue}</div>
                  {pres.note && <div className="note">{pres.note}</div>}
                </div>
              ))}
            </div>
          )}
        </section>

        <section id="cv" ref={(el) => sectionRefs.current.cv = el}>
          <h2>Curriculum Vitae</h2>
          {expandedSections.cv && (
            <div className="section-content">
              <p className="section-intro">Download my CV or view my complete publication list.</p>
              <div className="cv-download">
                <a href="/data/NikitaBedi_CV.pdf" className="contact-btn" download>Download CV</a>
              </div>
              <p className="cv-note">For a complete list of all publications, presentations, please refer to my <a href="https://scholar.google.com/citations?user=hBLItS0AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar profile</a>.</p>
            </div>
          )}
        </section>

        <section id="contact" ref={(el) => sectionRefs.current.contact = el}>
          <h2>Contact</h2>
          {expandedSections.contact && (
            <div className="section-content">
              <div className="contact-simple">
                <p>Feel free to reach out about research collaborations, questions about my work, or any other inquiries.</p>
                
                <form className="contact-form" onSubmit={handleContactSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={contactForm.name}
                      onChange={handleFormChange}
                      required
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={contactForm.email}
                      onChange={handleFormChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={contactForm.message}
                      onChange={handleFormChange}
                      required
                      placeholder="Your message..."
                      rows="5"
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="contact-btn">Send Message</button>
                  {formSubmitted && <p className="form-success">✓ Message sent successfully! I'll get back to you soon.</p>}
                </form>

                <div className="contact-links-icons">
                  <a href="mailto:nbedi@ucla.edu" aria-label="Email" title="Email">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </a>
                  <a href="https://github.com/nikita-bedi?tab=repositories" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                  </a>
                  <a href="https://scholar.google.com/citations?user=hBLItS0AAAAJ&hl=en" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar" title="Google Scholar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M9 10h6"/></svg>
                  </a>
                  <a href="https://linkedin.com/in/nikita-bedi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                </div>
              </div>
            </div>
          )}
        </section>

        <footer>
          <p>© 2026 Nikita Bedi</p>
        </footer>
      </div>
    </>
  )
}

export default Home
