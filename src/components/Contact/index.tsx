import PortfolioSection from "../PortfolioSection"

const Contact = () => {
  return (
    <PortfolioSection sectionName="contact">
      <h1 className="porfolio-title">Reach me out</h1>
      <div className="contact-grid">
        <div className="contact-hexagon">
          Github
        </div>
        <div className="contact-hexagon">
          Medium
        </div>
        <div className="contact-hexagon">
          LinkedIn
        </div>
        <div className="contact-hexagon">
          Gmail
        </div>
        <div className="contact-hexagon">
          Whatsapp
        </div>
      </div>
    </PortfolioSection>
  )
}

export default Contact