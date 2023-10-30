import './ProjectChoice.css';
import architecture from '/architecture.jpg'

const ProjectChoice = () => {
  return (
    <div className='project-choice'>
        <div className="fw-card from-right">
            <img src={architecture} alt="Architecture" />
            <h1 className="fw-card-title">Architecture</h1>
        </div>
        <div className="fw-card from-left">
            <img src="/interior.jpg" alt="Interior" />
            <h1 className="fw-card-title">Interior</h1>
        </div>
    </div>
  )
}

export default ProjectChoice