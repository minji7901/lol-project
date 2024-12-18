// 챔피언 기본 정보
export interface Champion {
  version: string;
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
  image: ChampionImage;
  tags: string[];
  partype: string;
  stats: Record<string, any>;
}

// 이미지 정보
export interface ChampionImage {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

// 챔피언의 상세 정보
export interface ChampionDetail extends Champion {
  skins: {
    id: string;
    name: string;
    chromas: boolean;
  }[];
  lore: string;
  allytips: string[];
  enemytips: string[];
  spells: {
    id: string;
    name: string;
    description: string;
    image: ChampionImage;
    resource: string;
  }[];
  passive: {
    name: string;
    description: string;
    image: ChampionImage;
  };
  recommend: any[];
}

// 챔피언 목록
export interface GetChampion {
  type: string;
  format: string;
  version: string;
  data: {
    [key: string]: Champion;
  };
}

// 챔피언 상세 정보 목록
export interface GetChampionDetail {
  type: string;
  format: string;
  version: string;
  data: {
    [key: string]: ChampionDetail;
  };
}

// 이미지 경로가 추가된 챔피언 타입
export interface addImgChampion extends Champion {
  imgPath: string;
}
