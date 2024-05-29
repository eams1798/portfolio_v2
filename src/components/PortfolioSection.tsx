import { Container } from "react-bootstrap"
import "./styles/PortfolioSection.css"

const PortfolioSection = ({children, sectionName, otherClassNames}: {children: React.ReactNode, sectionName: string, otherClassNames?: string[]}) => {
  return (
    <Container id={`${sectionName}`} className={`portfolio-sec ${otherClassNames?.join(" ") || ""}`}>
      {children}
    </Container>
  )
}

export default PortfolioSection