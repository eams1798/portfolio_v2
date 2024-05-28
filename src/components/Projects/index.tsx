import { useState } from "react";
import { projects as listOfProjects } from "../../../data"
import { project as IProject } from "../../../interfaces";
import PortfolioSection from "../PortfolioSection"
import "../styles/Projects.css"
import { Col, Container, Row } from "react-bootstrap";

const Projects = () => {
  const [projects, ] = useState<IProject[]>(listOfProjects);
  const [currentProject, setCurrentProject] = useState<IProject>(projects[0]);

  return (
    <PortfolioSection sectionName="projects">
      <Container>
        <h1 className="porfolio-title mb-5">Projects</h1>
        <Row className="projects-container">
          <Col lg={6} className="projects-description my-3">
            <h2>{currentProject.name}</h2>
            <p>{currentProject.description}</p>
            <p>Technologies: {currentProject.tech.join(", ")}</p>
          </Col>
          <Col lg={6} className="projects-list my-3">
            <div
              className="current-project"
              style={{
                backgroundImage: `url(${currentProject.image})`,
                backgroundSize: "cover",
                width: "300px",
                height: "200px",
                }} />
            <div className="other-projects">
            {
              projects.map((project) => (
                <a key={project.name} href={project.url} target="_blank">
                  <div
                    className="other-project"
                    style={{
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: "cover",
                      width: "120px",
                      height: "80px",
                      }}
                    onMouseEnter={() => setCurrentProject(project)}
                    />
                </a>
                )
              )
            }
            </div>
          </Col>
        </Row>
      </Container>
    </PortfolioSection>
  )
}

export default Projects