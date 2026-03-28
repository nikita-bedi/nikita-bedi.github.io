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
        
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <div className="project-type">{project.type}</div>
            <p className="project-description">{project.description}</p>
            {project.pdf && (
              <a href={project.pdf} target="_blank" rel="noopener noreferrer" className="project-pdf-link">
                📄 View PDF
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
