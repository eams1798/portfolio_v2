import { hexagonSkill } from "../../../interfaces"

const SkillDescription = ({skill}: {skill: hexagonSkill}) => {
  return (
    <div className="skill-description">
      <h2>{skill.name}</h2>
      <p>{skill.description}</p>
    </div>
  )
}

export default SkillDescription