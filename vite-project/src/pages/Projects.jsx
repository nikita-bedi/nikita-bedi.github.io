import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import projectsData from '../data/projects'
import '../App.css'

function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="page-container">
      <nav className="page-nav">
        <Link to="/" className="back-link">← Back to Home</Link>
      </nav>
      
      <div className="page-content projects-page">
        <h1>Projects</h1>
        
        <section className="project-section">
          <h2 className="section-header">🚀 Current Projects</h2>
          {projectsData.current.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-meta">
                <span className="project-year">{project.year}</span>
                {project.pdf && (
                  <>
                    <span className="meta-separator">•</span>
                    <a href={project.pdf} target="_blank" rel="noopener noreferrer" className="project-pdf-link">
                      📄 View PDF
                    </a>
                  </>
                )}
              </div>
            </div>
          ))}
        </section>

        <section className="project-section">
          <h2 className="section-header">📚 Past Projects</h2>
          {projectsData.past.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-meta">
                <span className="project-year">{project.year}</span>
                {project.pdf && (
                  <>
                    <span className="meta-separator">•</span>
                    <a href={project.pdf} target="_blank" rel="noopener noreferrer" className="project-pdf-link">
                      📄 View PDF
                    </a>
                  </>
                )}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

export default Projects
