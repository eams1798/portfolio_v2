export interface coordinate {
  x: number;
  y: number;
  z: number;
}

export interface hexagonContact {
  name: string;
  icon: string;
  url: string;
  coordinates: coordinate;
  action: 'visit' | 'copy';
  type: 'contact';
}

export interface hexagonSkill {
  id: string;
  name: string;
  icon: string;
  description: string;
  url?: string;
  coordinates: coordinate
  type: 'skill';
  experience?: string;
}

export interface project {
  name: string;
  description: string;
  tech: string[];
  url: string;
  image: string;
}

