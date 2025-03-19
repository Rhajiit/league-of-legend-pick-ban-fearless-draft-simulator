import { ChampionTagType } from "../../types/championDataType";

interface onFilterChampionTagType {
  tagFilter: ChampionTagType;
  onFilterChampionTag: (championTag: ChampionTagType) => void;
}

const ChampionFilter = ({
  tagFilter,
  onFilterChampionTag,
}: onFilterChampionTagType) => {
  return (
    <button
      className="m-1 cursor-pointer"
      onClick={() => onFilterChampionTag(tagFilter)}
    >
      {tagFilter}
    </button>
  );
};

export default ChampionFilter;
