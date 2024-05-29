import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'

const PorfolioMenu = () => (
  <Navbar expand="lg" variant='dark' className="portfolio-menu bg-dark sticky-top">
      <Container>
        <Navbar.Brand href="#">{"<misotideas/>"}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
          <Nav className="me-2">
            <Nav.Link href="#hero">Hero</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <NavDropdown title="Select a language" id="basic-nav-dropdown" menuVariant='dark'>
              <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Español</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
)

export default PorfolioMenu