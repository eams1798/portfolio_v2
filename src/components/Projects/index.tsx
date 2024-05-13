import PortfolioSection from "../PortfolioSection"

const Projects = () => {
  return (
    <PortfolioSection sectionName="projects">
      <h1 className="porfolio-title">Projects</h1>
      <div className="projects-container">
        <div className="projects-description">
          <h3>Project</h3>
          <p>Project description. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae suscipit, ipsam, quisquam beatae id illo modi quas ex similique et, voluptate labore odit perferendis magni veritatis fuga qui ab. Hic?
          </p>
          <p>Used stack: __</p>
          <p>Project link: __</p>
        </div>
        <div className="projects-list">
          <div className="current-project"></div>
          <div className="other-projects"></div>
        </div>
      </div>
    </PortfolioSection>
  )
}

export default Projects