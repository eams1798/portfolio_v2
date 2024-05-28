import { hexagonSkill } from "../../../interfaces"

const SkillDescription = ({skill}: {skill: hexagonSkill}) => {
  return (
    <div className="skill-description col-lg-4 my-3">
      <h2>{skill.name}</h2>
      <p>{skill.description}</p>
    </div>
  )
}

export default SkillDescription