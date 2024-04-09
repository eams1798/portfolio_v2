import { hexagonSkill } from "../../../interfaces";
import PortfolioSection from "../PortfolioSection"
import "../styles/Skills.css"
import SkillGrid from "./SkillGrid"
import {skills as skillsData} from '../../../data/index';
import { useState } from "react";
import SkillDescription from "./SkillDescription";

const Skills = () => {
  const [skills, ] = useState<hexagonSkill[]>(skillsData);
  const [currentSkill, setCurrentSkill] = useState<hexagonSkill>(skills[0]);
  return (
    <PortfolioSection sectionName="skills">
      <div className="skills-container">
        <h1 className="porfolio-title">Skills</h1>
        <div className="skills-list">
          <SkillGrid skills={skills} setCurrentSkill={setCurrentSkill} />
          <SkillDescription skill={currentSkill} />
        </div>
      </div>
    </PortfolioSection>
  )
}

export default Skills