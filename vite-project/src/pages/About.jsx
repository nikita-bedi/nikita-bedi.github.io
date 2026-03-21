import { Link } from 'react-router-dom'
import '../App.css'

function About() {
  return (
    <div className="page-container">
      <nav className="page-nav">
        <Link to="/" className="back-link">← Back to Home</Link>
      </nav>
      
      <div className="page-content">
        <h1>About Me</h1>
        
        <p>Hi, I'm Nikita! Average Silicon Valley-raised person who's caffeine-powered and data-driven. I work at Stanford University as a translational program manager at the Holsinger Lab and am currently finishing my Master's in Data Science through the Harvard Extension School. I have a Bachelor's in Biology from UCLA and used to work as a clinical research coordinator at the Stanford Cancer Institute in Head and Neck Surgery.</p>
        
        <p>I created this website as a personal blog to remind myself of my motivations and accomplishments for those existential crisis days.</p>
        
        <p>My introduction to this work was through surgical oncology trials at Stanford, where I was introduced to clinical research, and the challenges of bridging clinical and technical domains. Clinical data is messy in ways that are hard to model. A radiologist reads a scan one way, another reads it differently. A patient moves to a different medical system and suddenly you're missing important context about them. In surgery, there's no easy objective way to measure something as basic as surgical bleeding. Data is messy and sparse, and that's medicine. It's also what makes building AI for clinical settings genuinely interesting to me.</p>
        
        <p>I work on multimodal approaches because the full picture (imaging, pathology, genomics, surgical video, patient history, wearables) tells a richer story than any single source. Merging all of that is where the interesting questions live: why do some patients respond to treatment and others don't? Can we catch a postoperative complication before it happens? Can we build something that helps a general surgeon in a rural hospital provide care that would otherwise require a specialist?</p>
        
        <p>That last question got personal for me in 2022, when I lost both my grandmothers to cancer within months of each other. One lived far from specialized care, and getting there was its own ordeal. The other had access, but as a caregiver I was still piecing together information from a system that wasn't built to explain itself. I'd spent years on the clinical side of that gap. Being on the other side made me want to close it.</p>
        
        <p>This experience also sharpened something I already believed: that building this well means being honest about what AI can and can't do, who it reaches and who it misses, and what the cost of being wrong actually is.</p>
      </div>
    </div>
  )
}

export default About
