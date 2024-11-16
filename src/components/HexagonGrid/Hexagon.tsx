import { hexagonContact, hexagonSkill } from '../../../interfaces';
import '../styles/Hexagon.css';
import { AnyStringedFunction, SetSkillType } from '.';

interface IHexagonProps {
  item: hexagonSkill | hexagonContact
  startPoint: {i: number; j: number}
  hexagonRadius: number
  itemAction: SetSkillType | AnyStringedFunction
  windowWidth: number
}

const Hexagon = ({ item, startPoint, hexagonRadius, itemAction, windowWidth }: IHexagonProps) => {
  const { name, icon, url } = item;

  const x = { i: 0, j: hexagonRadius };
  const y = { i: hexagonRadius / 2 * Math.sqrt(3), j: - hexagonRadius / 2 };
  const z = { i: hexagonRadius / 2 * Math.sqrt(3), j: hexagonRadius / 2 };

  const HexagonShadowStyle: React.CSSProperties = {
    zIndex: 1,
    width: hexagonRadius * Math.sqrt(3),
    height: hexagonRadius * 2,
    filter: "drop-shadow(0 0 10px rgb(26, 172, 255))",
    position: 'absolute',
    top: startPoint.j + (x.j * item.coordinates.x + y.j * item.coordinates.y + z.j * item.coordinates.z) - 5,
    left: startPoint.i + (x.i * item.coordinates.x + y.i * item.coordinates.y + z.i * item.coordinates.z) - 5,
  }

  const HexagonStyle: React.CSSProperties = {
    zIndex: 5,
    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
    backgroundColor: '#d2d2d2',
    backgroundImage: `url(${icon})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: `${hexagonRadius * 1.2}px`,
    width: hexagonRadius * Math.sqrt(3),
    height: hexagonRadius * 2,
    position: 'absolute',
    top: startPoint.j + x.j * item.coordinates.x + y.j * item.coordinates.y + z.j * item.coordinates.z,
    left: startPoint.i + x.i * item.coordinates.x + y.i * item.coordinates.y + z.i * item.coordinates.z
  }

  if (item.type === 'skill') {
    return (
    <>
      <div
          className="hexagon"
          title={name}
          style={HexagonStyle}
          onClick={ windowWidth > 992 ? (() => {if (url) window.open(url, '_blank')}): (() => window.open("#skill-title", '_self')) }
          onMouseEnter={() => (itemAction as SetSkillType)(item)} />
      <div className ="hexagon-shadow" style={HexagonShadowStyle} />
    </>)
  } else if (item.type === 'contact' && item.action === 'copy') {
    return (
      <>
        <div
            className="hexagon"
            title={name}
            style={HexagonStyle}
            onClick={() => (itemAction as AnyStringedFunction)(item.url)} />
        <div className ="hexagon-shadow" style={HexagonShadowStyle} />
      </> 
    );
  } else {
    return (
    <>
      <div
          className="hexagon"
          title={name}
          style={HexagonStyle}
          onClick={() => window.open(url, '_blank')} />
      <div className ="hexagon-shadow" style={HexagonShadowStyle} />
    </>
    )
  }
};

export default Hexagon;
