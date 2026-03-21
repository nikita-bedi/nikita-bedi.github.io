import { Link } from 'react-router-dom'
import projectsData from '../data/projects'
import '../App.css'

function Projects() {
  return (
    <div className="page-container">
      <nav className="page-nav">
        <Link to="/" className="back-link">← Back to Home</Link>
      </nav>
      
      <div className="page-content">
        <h1>Projects</h1>
        
        {projectsData.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <div className="project-type">{project.type}</div>
            <div className="description">{project.description}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
