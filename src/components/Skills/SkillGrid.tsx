import { useEffect, useState } from 'react';
import SkillHexagon from './SkillHexagon';
import { hexagonSkill } from '../../../interfaces';

const SkillsList = ({ skills, setCurrentSkill }: {skills: hexagonSkill[], setCurrentSkill: (skill: hexagonSkill) => void}) => {
  const [hexagonRadius, ] = useState<number>(50);
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

    for ( const skill of skills ) {
      const i = Math.round(skill.coordinates.x * x.i + skill.coordinates.y * y.i + skill.coordinates.z * z.i);
      const j = Math.round(skill.coordinates.x * x.j + skill.coordinates.y * y.j + skill.coordinates.z * z.j);

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
    <div className="hexagon-grid" style={GridStyle}>
      {skills.map(skill => {
        return (
          <SkillHexagon
            key={skill.id}
            skill={skill}
            startPoint={startPoint}
            hexagonRadius={hexagonRadius}
            setCurrentSkill={setCurrentSkill} />
        );
      })}
    </div>
  );
};

export default SkillsList;
