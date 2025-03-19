interface ChampionDataType {
  name: string;
  tags: string[];
  key: string;
  image: {
    full: string;
    [key: string]: unknown;
  };
  [key: string]: unknown;
}

interface ChampionDataListType {
  [key: string]: ChampionDataType;
}

type ChampionTagType =
  | "Fighter"
  | "Marksman"
  | "Assassin"
  | "Tank"
  | "Support"
  | "Mage"
  | null;

export type { ChampionDataType, ChampionDataListType, ChampionTagType };
