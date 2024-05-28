import { Container } from "react-bootstrap"
import LangMenu from "./LangMenu"
import "./styles/PortfolioSection.css"

const PortfolioMenu = ({sectionName}: {sectionName: string}) => {
  if (sectionName === "hero") {
    return (
      <div className="portfolio-menu hero">
        <p>Use the directional arrows to move between sections</p>
        <div className="mainmenu-buttons">
          <button className="menu-btn">Skills</button>
          <button className="menu-btn">Projects</button>
          <button className="menu-btn">Contact</button>
        </div>
      </div>
    )
  }
  return (
    <div className={`portfolio-menu ${sectionName}`}>
      <button className="menu-btn">Hero</button>
    </div>
  )
}

const PortfolioSection = ({children, sectionName, otherClassNames}: {children: React.ReactNode, sectionName: string, otherClassNames?: string[]}) => {
  return (
    <Container className={`portfolio-sec portfolio-sec-${sectionName} ${otherClassNames?.join(" ") || ""}`}>
      <LangMenu />
      {children}
      <PortfolioMenu sectionName={sectionName} />
    </Container>
  )
}

export default PortfolioSection