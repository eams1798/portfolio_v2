import LinesDots from "./LinesDots"
import PortfolioSection from "../PortfolioSection"
import "../styles/Hero.css"
import { Col, Container, Row } from "react-bootstrap"
import { useTranslation } from "react-i18next"

const Hero = ({windowWidth}: {windowWidth: number}) => {
  const [tH] = useTranslation("Hero");

  return (
    <PortfolioSection sectionName="hero" otherClassNames={["justify-content-start"]}>
      <LinesDots windowWidth={windowWidth} />
      <Container className="hero-container m-0 position-relative" fluid>
        <Row className="justify-content-around">
          <Col className="hero-info py-5" sm={7}>
              <div className="hero-greeting mb-4">
                <h2 className="fs-1">{tH("hello")}<br/>{tH("i-m")} <span className="hero-name">Estefano Misme</span></h2>
              </div>
              <div className="hero-description fs-5 mt-4">
                <p>
                  {tH("my-description")}
                </p>
              </div>
          </Col>
          <Col className="hero-photo-container d-flex flex-column align-items-center justify-content-center" sm={3}>
              <Row className="hero-photo my-2" />
              <Row className="hero-resume my-2">
                <button className="resume-button"><a href="https://github.com/eams1798/projects-resources/blob/main/portfolio_v2/Resume%20-%20Estefano%20Misme.pdf" target="_blank">{tH("see-my-resume")}</a></button>
              </Row>
          </Col>
        </Row>
      </Container>
    </PortfolioSection>
  )
}

export default Hero