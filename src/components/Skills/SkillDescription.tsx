import { hexagonSkill } from "../../../interfaces"
import { useTranslation } from "react-i18next"

const SkillDescription = ({skill}: {skill: hexagonSkill}) => {
  const [tS] = useTranslation("Skills")

  return (
    <div className="skill-description col-lg-4 my-3">
      <a href={skill.url} target="_blank" id="skill-title">
        <h2>{skill.name}</h2>
      </a>
      <p className="fs-5">{tS(skill.description)}</p>
    </div>
  )
}

export default SkillDescription