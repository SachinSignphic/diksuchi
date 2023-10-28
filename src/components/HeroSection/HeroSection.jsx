import './HeroSection.css'

const HeroSection = ({ children }) => {
  return (
    <div className="hero">
        { children }
    </div>
  )
}

export default HeroSection