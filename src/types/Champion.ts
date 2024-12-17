//챔피언 정보
export interface GetChampion {
  type: string;
  format: string;
  version: string;
  data: {
    [key: string]: Champion;
  };
}
export interface Champion {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: {
    attack: number; //공격력
    defense: number; //방어력
    magic: number; //마법력
    difficulty: number; //어려움
  };
  image: ChampionImage;
  tags: string[];
  partype: string;
  stats: object;
}

//이미지 정보
export interface ChampionImage {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface addImgChampion extends Champion {
  imgPath: string;
}

//챔피언 자세정보
export interface GetChampionDetail {
  type: string;
  format: string;
  version: string;
  data: {
    [key: string]: ChampionDetail;
  };
}

export interface ChampionDetail extends Champion {
  skins: object[];
  lore: string;
  allytype: string[];
  enemytip: string[];
  spells: {
    id: string;
    name: string;
    description: string;
    image: ChampionImage;
    resource: string;
  };
  passive: {
    name: string;
    description: string;
    image: ChampionImage;
  };
  recommend: [];
}
