import { hexagonSkill } from "../../../interfaces"

const SkillDescription = ({skill}: {skill: hexagonSkill}) => {
  return (
    <div className="skill-description col-lg-4 my-3">
      <a href={skill.url} target="_blank" id="skill-title">
        <h2>{skill.name}</h2>
      </a>
      <p>{skill.description}</p>
    </div>
  )
}

export default SkillDescription