/* import LinesDots from "./LinesDots" */
import PortfolioSection from "../PortfolioSection"
import "../styles/Hero.css"
import { Col, Container, Row } from "react-bootstrap"

const Hero = () => {
  return (
    <PortfolioSection sectionName="hero" otherClassNames={["justify-content-start"]}>
      {/* <LinesDots /> */}
      <Container className="hero-container" fluid>
        <Row className="justify-content-around">
          <Col className="hero-info py-5" sm={7}>
              <div className="hero-greeting"><h2>Hello!<br/>I'm <span className="hero-name">Estefano Misme</span></h2></div>
              <div className="hero-description">
                  <p>
                    Self-taught software engineer dedicated to full stack web development. I am specialized in the MERN stack,
                    but I also like to complement my knowledge with other branches. Currently learning about Machine Learning
                    and the use of generative AI.
                  </p>
              </div>
          </Col>
          <Col className="hero-photo-container d-flex flex-column align-items-center justify-content-center" sm={3}>
              <Row className="hero-photo my-2" />
              <Row className="hero-resume my-2">
                <button className="resume-button"><a href="#">See my resume</a></button>
              </Row>
          </Col>
        </Row>
      </Container>
    </PortfolioSection>
  )
}

export default Hero