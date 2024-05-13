export interface hexagonSkill {
  id: string;
  name: string;
  icon: string;
  description: string;
  link: string;
  coordinates: {
    x: number;
    y: number;
    z: number;
  };
}

export interface project {
  name: string;
  description: string;
  tech: string[];
  link: string;
}

