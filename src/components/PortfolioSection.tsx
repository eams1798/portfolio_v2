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

const PortfolioSection = ({children, sectionName}: {children: React.ReactNode, sectionName: string}) => {
  return (
    <section className={`portfolio-sec portfolio-sec-${sectionName}`}>
      <LangMenu />
      {children}
      <PortfolioMenu sectionName={sectionName} />
    </section>
  )
}

export default PortfolioSection