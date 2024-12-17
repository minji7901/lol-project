export type GetItem = {
  type: string;
  version: string;
  basic: object;
  data: {
    [key: string]: Item;
  };
};

export type Item = {
  name: string;
  rune: object;
  gold: {
    base: number;
    purchasable: boolean;
    total: number;
    sell: number;
  };
  group: string;
  description: string;
  colloq: string;
  plaintext: string;
  consumed: boolean;
  stats: {
    // 체력 증가
    FlatHPPoolMod?: number;
    // 마나 증가
    FlatMPPoolMod?: number;
    // 방어력 증가
    FlatArmorMod?: number;
    // 공격력 증가
    FlatPhysicalDamageMod?: number;
  };
  into: string[];
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };

  tags: string[];
  maps: {
    [key: string]: string;
  };
};
