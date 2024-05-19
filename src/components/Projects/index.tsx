import { useState } from "react";
import { projects as listOfProjects } from "../../../data"
import { project as IProject } from "../../../interfaces";
import PortfolioSection from "../PortfolioSection"
import "../styles/Projects.css"

const Projects = () => {
  const [projects, ] = useState<IProject[]>(listOfProjects);
  const [currentProject, setCurrentProject] = useState<IProject>(projects[0]);

  return (
    <PortfolioSection sectionName="projects">
      <h1 className="porfolio-title">Projects</h1>
      <div className="projects-container">
        <div className="projects-description">
          <h2>{currentProject.name}</h2>
          <p>{currentProject.description}</p>
          <p>Technologies: {currentProject.tech.join(", ")}</p>
        </div>
        <div className="projects-list">
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
              <a href={project.url} target="_blank">
                <div
                  key={project.name}
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
        </div>
      </div>
    </PortfolioSection>
  )
}

export default Projects