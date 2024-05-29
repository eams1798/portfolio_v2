import { useEffect, useState } from 'react';
import Hexagon from './Hexagon';
import { hexagonContact, hexagonSkill } from '../../../interfaces';

export type SetSkillType = React.Dispatch<React.SetStateAction<hexagonSkill>>
export type AnyStringedFunction = (item: string) => void

interface IHexagonGridProps {
  items: hexagonSkill[] | hexagonContact[]
  itemAction: SetSkillType | AnyStringedFunction
  hexagonRadius: number
  windowWidth: number
  otherClassNames?: string[]
}

const HexagonGrid = ({ items, itemAction, hexagonRadius, windowWidth,otherClassNames }: IHexagonGridProps) => {
  const [gridDimensions, setGridDimensions] = useState<{width: number; height: number}>({width: 0, height: 0});
  const [startPoint, setStartPoint] = useState<{i: number; j: number}>({i: 0, j: 0});

  const GridStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    position: 'relative',
    ...gridDimensions
  }

  const setGridDimensionsandStartPoint = () => {
    const x = { i: 0, j: hexagonRadius };
    const y = { i: hexagonRadius / 2 * Math.sqrt(3), j: - hexagonRadius / 2 };
    const z = { i: hexagonRadius / 2 * Math.sqrt(3), j: hexagonRadius / 2 };

    const i_positions: number[] = [], j_positions: number[] = [];

    for ( const item of items ) {
      const i = Math.round(item.coordinates.x * x.i + item.coordinates.y * y.i + item.coordinates.z * z.i);
      const j = Math.round(item.coordinates.x * x.j + item.coordinates.y * y.j + item.coordinates.z * z.j);

      if (!i_positions.includes(i)) i_positions.push(i);
      if (!j_positions.includes(j)) j_positions.push(j);
    }

    const iMin = Math.min(...i_positions), iMax = Math.max(...i_positions);
    const jMin = Math.min(...j_positions), jMax = Math.max(...j_positions);

    setGridDimensions({
      width: Math.ceil(iMax - iMin + hexagonRadius * Math.sqrt(3)),
      height: Math.ceil(jMax - jMin + hexagonRadius * 2)
    });

    if (iMin < 0) setStartPoint((sp) => ({ ...sp, i: -iMin }));
    if (jMin < 0) setStartPoint((sp) => ({ ...sp, j: -jMin }));
  }

  useEffect(() => {
    setGridDimensionsandStartPoint();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`hexagon-grid ${otherClassNames?.join(' ')}`} style={GridStyle}>
      {items.map(item => {
        return (
          <Hexagon
            key={item.name}
            item={item}
            startPoint={startPoint}
            hexagonRadius={hexagonRadius}
            itemAction={itemAction}
            windowWidth={windowWidth} />
        );
      })}
    </div>
  );
};

export default HexagonGrid;
