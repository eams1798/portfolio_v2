import LinesDots from "./LinesDots"
import PortfolioSection from "../PortfolioSection"
import "../styles/Hero.css"

const Hero = () => {
  return (
    <PortfolioSection sectionName="hero">
      <LinesDots />
      <div className="hero-container">
        <div className="hero-info">
            <div className="hero-greeting"><h2>Hello!<br/>I'm <span className="hero-name">Estefano Misme</span></h2></div>
            <div className="hero-description">
                <p>
                  Self-taught software engineer dedicated to full stack web development. I am specialized in the MERN stack,
                  but I also like to complement my knowledge with other branches. Currently learning about Machine Learning
                  and the use of generative AI.
                </p>
            </div>
        </div>
        <div className="hero-photo-container">
            <div className="hero-photo" />
            <button className="resume-button"><a href="#">See my resume</a></button>
        </div>
      </div>
    </PortfolioSection>
  )
}

export default Hero