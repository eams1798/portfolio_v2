import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

const PorfolioMenu = () => {
  const [tN, i18n] = useTranslation("Navbar")
  return (
  <Navbar expand="lg" variant='dark' className="portfolio-menu bg-dark sticky-top">
      <Container>
        <Navbar.Brand href="#">{tN("my-portfolio")}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
          <Nav className="me-2">
            <Nav.Link href="#hero">{tN("hero")}</Nav.Link>
            <Nav.Link href="#skills">{tN("skills")}</Nav.Link>
            <Nav.Link href="#projects">{tN("projects")}</Nav.Link>
            <Nav.Link href="#contact">{tN("contact")}</Nav.Link>
            <NavDropdown title={tN("select-a-language")} id="basic-nav-dropdown" menuVariant='dark'>
              <NavDropdown.Item onClick={() => i18n.changeLanguage("en")}>English</NavDropdown.Item>
              <NavDropdown.Item onClick={() => i18n.changeLanguage("es")}>Español</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
)}

export default PorfolioMenu