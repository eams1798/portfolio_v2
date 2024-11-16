import { hexagonSkill } from "../../../interfaces"
import { useTranslation } from "react-i18next"

const SkillDescription = ({skill}: {skill: hexagonSkill}) => {
  const [tS] = useTranslation("Skills")
  let experience = ""
  const experienceTime = skill.experience?.split(" ")[0]
  const experienceTimeType = skill.experience?.split(" ")[1]

  if (skill.experience === "Basic knowledge") {
    experience = tS("basic")
  } else {
    switch (experienceTimeType) {
      case "years":
        experience = experienceTime + " " + tS("years")
        break;
      case "year":
        experience = experienceTime + " " + tS("year")
        break;
      case "months":
        experience = experienceTime + " " + tS("months")
        break;
      default:
        experience = skill.experience? skill.experience : ""
        break;
    }

  }


  return (
    <div className="skill-description col-lg-4 my-3">
      {skill.url?
        <a href={skill.url} target="_blank" id="skill-title">
          <h2>{skill.name}</h2>
        </a> : 
        <h2 style={{color: "rgb(26, 172, 255)"}} id="skill-title">{skill.name}</h2>
      }
      {tS(skill.description).split("\n").length > 1 ?
        <ul className="fs-5">
        {(tS(skill.description)).split("\n").map((line: string, index: number) => {
          return (
            <li key={index}>
              {line}
              <br />
            </li>
          )
        })}
      </ul> :  
        <p className="fs-5">{tS(skill.description)}</p>}
      { experience && <p className="fs-5">{tS("experience")}: {experience}</p>}
    </div>
  )
}

export default SkillDescription