import { hexagonContact, hexagonSkill } from '../../../interfaces';
import '../styles/SkillHexagon.css';
import { AnyStringedFunction, SetSkillType } from '.';

interface IHexagonProps {
  item: hexagonSkill | hexagonContact
  startPoint: {i: number; j: number}
  hexagonRadius: number
  itemAction: SetSkillType | AnyStringedFunction
}

const Hexagon = ({ item, startPoint, hexagonRadius, itemAction }: IHexagonProps) => {
  const { name, icon, url } = item;

  const x = { i: 0, j: hexagonRadius };
  const y = { i: hexagonRadius / 2 * Math.sqrt(3), j: - hexagonRadius / 2 };
  const z = { i: hexagonRadius / 2 * Math.sqrt(3), j: hexagonRadius / 2 };

  const HexagonStyle: React.CSSProperties = {
    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
    backgroundColor: '#d2d2d2',
    width: hexagonRadius * Math.sqrt(3),
    height: hexagonRadius * 2,
    position: 'absolute',
    top: startPoint.j + x.j * item.coordinates.x + y.j * item.coordinates.y + z.j * item.coordinates.z,
    left: startPoint.i + x.i * item.coordinates.x + y.i * item.coordinates.y + z.i * item.coordinates.z
  }

  if (item.type === 'skill') {
    return (
    <div className="hexagon" style={HexagonStyle} onMouseEnter={() => (itemAction as SetSkillType)(item)}> {/* setSkill(skill) */}
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={icon} alt={name} title={name} />
      </a>
    </div>
    )
  } else if (item.type === 'contact' && item.action === 'copy') {
    return (
      <div className="hexagon" style={HexagonStyle} onClick={() => (itemAction as AnyStringedFunction)(item.url)}> {/* copyToClipboard(contact) */}
        <img src={icon} alt={name} title={`Copy: ${name}`} />
      </div>
    )
  } else {
    return (
      <div className="hexagon" style={HexagonStyle}>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img src={icon} alt={name} title={name} />
        </a>
      </div>
    )
  }
};

export default Hexagon;
