import { hexagonSkill } from '../../../interfaces';
import '../styles/SkillHexagon.css';

const SkillHexagon = ({ skill, startPoint, hexagonRadius, setCurrentSkill }: {skill: hexagonSkill, startPoint: {i: number; j: number}, hexagonRadius: number, setCurrentSkill: (skill: hexagonSkill) => void }) => {
  const { name, icon, description, link } = skill;

  const x = { i: 0, j: hexagonRadius };
  const y = { i: hexagonRadius / 2 * Math.sqrt(3), j: - hexagonRadius / 2 };
  const z = { i: hexagonRadius / 2 * Math.sqrt(3), j: hexagonRadius / 2 };

  const HexagonStyle: React.CSSProperties = {
    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
    backgroundColor: '#d2d2d2',
    width: hexagonRadius * Math.sqrt(3),
    height: hexagonRadius * 2,
    position: 'absolute',
    top: startPoint.j + x.j * skill.coordinates.x + y.j * skill.coordinates.y + z.j * skill.coordinates.z,
    left: startPoint.i + x.i * skill.coordinates.x + y.i * skill.coordinates.y + z.i * skill.coordinates.z
  }

  return (
    <div className="hexagon" style={HexagonStyle} onMouseEnter={() => setCurrentSkill(skill)}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={icon} alt={name} title={description} />
      </a>
    </div>
  );
};

export default SkillHexagon;
