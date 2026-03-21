import { useState, useEffect } from 'react'
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

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
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
          <div className="nav-right">
            <ul>
              <li><a href="#news">News</a></li>
              <li><a href="#publications">Publications</a></li>
              <li><a href="#presentations">Presentations</a></li>
              <li><a href="#cv">CV</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
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
            <img className="headshot" src="/profile.jpeg" alt="Nikita Bedi" />
            <div className="header-text">
              <h1>Nikita Bedi</h1>
              <div className="title">Applied ML Researcher</div>
              <div className="affiliation">Stanford University · Holsinger Lab</div>
              <p>I'm an applied machine learning researcher working at the intersection of AI and medicine. My work focuses on building multimodal AI systems for oncology and surgery, with expertise in computer vision, medical imaging, and language models.</p>
              <div className="contact-links">
                <a href="mailto:nbedi@ucla.edu">Email</a>
                <a href="https://github.com/nikita-bedi?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://linkedin.com/in/nikita-bedi" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://scholar.google.com/citations?user=hBLItS0AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar</a>
              </div>
            </div>
          </div>
        </header>

        <section id="news">
          <h2>News</h2>
          {newsData.map((item, index) => (
            <div key={index} className="news-item">
              <div className="news-date">{item.date}</div>
              <div className="news-content">
                {item.content}
                {item.link && (
                  <> <a href={item.link} target="_blank" rel="noopener noreferrer" className="news-link">→</a></>
                )}
              </div>
            </div>
          ))}
        </section>

        <section id="publications">
          <h2 onClick={() => toggleSection('publications')} className="collapsible-header">
            Selected Publications {expandedSections.publications ? '▼' : '▶'}
          </h2>
          {expandedSections.publications && (
            <div className="section-content">
              {selectedPublicationsData.map((pub, index) => (
                <div key={index} className="publication">
                  <h3>{pub.title}</h3>
                  <div className="authors" dangerouslySetInnerHTML={{ __html: pub.authors }}></div>
                  <div className="venue">{pub.venue}</div>
                  {pub.note && <div className="note">{pub.note}</div>}
                  {pub.doi && <a href={pub.doi} target="_blank" rel="noopener noreferrer">DOI: {pub.doi.split('/').pop()}</a>}
                </div>
              ))}
            </div>
          )}
        </section>

        <section id="presentations">
          <h2 onClick={() => toggleSection('presentations')} className="collapsible-header">
            Selected Presentations {expandedSections.presentations ? '▼' : '▶'}
          </h2>
          {expandedSections.presentations && (
            <div className="section-content">
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

        <section id="cv">
          <h2 onClick={() => toggleSection('cv')} className="collapsible-header">
            Curriculum Vitae {expandedSections.cv ? '▼' : '▶'}
          </h2>
          {expandedSections.cv && (
            <div className="section-content">
              <div className="cv-download">
                <a href="/data/NikitaCV_KannLab.pdf" className="contact-btn" download>Download CV</a>
              </div>
              <p className="cv-note">For a complete list of all publications, presentations, please refer to my <a href="https://scholar.google.com/citations?user=K20903UAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar profile</a>.</p>
            </div>
          )}
        </section>

        <section id="contact">
          <h2 onClick={() => toggleSection('contact')} className="collapsible-header">
            Contact {expandedSections.contact ? '▼' : '▶'}
          </h2>
          {expandedSections.contact && (
            <div className="section-content">
              <div className="contact-simple">
                <p>Feel free to reach out about research collaborations, questions about my work, or any other inquiries.</p>
                <div className="contact-links-simple">
                  <a href="mailto:nbedi@ucla.edu">Email</a>
                  <span className="separator">/</span>
                  <a href="https://github.com/nikita-bedi?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub</a>
                  <span className="separator">/</span>
                  <a href="https://scholar.google.com/citations?user=hBLItS0AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar</a>
                  <span className="separator">/</span>
                  <a href="https://linkedin.com/in/nikita-bedi" target="_blank" rel="noopener noreferrer">LinkedIn</a>
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
