import { hexagonSkill } from "../../../interfaces";
import PortfolioSection from "../PortfolioSection"
import "../styles/Skills.css"
import HexagonGrid from "../HexagonGrid";
import {skills as skillsData} from '../../../data/index';
import { useState } from "react";
import SkillDescription from "./SkillDescription";
import { Container, Row } from "react-bootstrap";

const Skills = () => {
  const [skills, ] = useState<hexagonSkill[]>(skillsData);
  const [currentSkill, setCurrentSkill] = useState<hexagonSkill>(skills[0]);
  return (
    <PortfolioSection sectionName="skills">
      <Container className="skills-container">
        <h1 className="porfolio-title mb-5">Skills</h1>
        <Row className="skills-list d-flex justify-content-evenly align-items-center">
          <HexagonGrid items={skills} itemAction={setCurrentSkill} hexagonRadius={50} otherClassNames={["col-auto", "col-lg-8", "my-3"]} />
          <SkillDescription skill={currentSkill} />
        </Row>
      </Container>
    </PortfolioSection>
  )
}

export default Skills