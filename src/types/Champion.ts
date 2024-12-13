//챔피언 정보
export interface Champion {
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
  image: Image;
  tags: string[];
  partype: string;
  stats: object;
}

//이미지 정보
interface Image {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

//챔피언 자세정보
export interface ChampionDetail extends Champion {
  skins: object[];
  lore: string;
  allytype: string[];
  enemytip: string[];
  spells: {
    id: string;
    name: string;
    description: string;
    image: Image;
    resource: string;
  };
  passive: {
    name: string;
    description: string;
    image: Image;
  };
  recommend: [];
}