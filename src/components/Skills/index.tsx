import { hexagonSkill } from "../../../interfaces";
import PortfolioSection from "../PortfolioSection"
import "../styles/Skills.css"
import HexagonGrid from "../HexagonGrid";
import {skills as skillsData} from '../../../data/index';
import { useState } from "react";
import SkillDescription from "./SkillDescription";
import { Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next"

const Skills = ({windowWidth}: {windowWidth: number}) => {
  const [skills, ] = useState<hexagonSkill[]>(skillsData);
  const [currentSkill, setCurrentSkill] = useState<hexagonSkill>(skills[0]);
  const [tS] = useTranslation("Skills")

  return (
    <PortfolioSection sectionName="skills">
      <Container className="skills-container">
        <h1 className="porfolio-title mb-5">{tS("title")}</h1>
        <Row className="skills-list d-flex justify-content-evenly align-items-center">
          <HexagonGrid
            items={skills}
            itemAction={setCurrentSkill}
            hexagonRadius={50}
            windowWidth={windowWidth}
            otherClassNames={["col-auto", "col-lg-8", "my-3"]} />
          <SkillDescription skill={currentSkill} />
        </Row>
      </Container>
    </PortfolioSection>
  )
}

export default Skills