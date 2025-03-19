import { ChampionTagType } from "../../types/championDataType";

interface onFilterChampionTagType {
  tagFilter: ChampionTagType;
  onFilterChampionTag: (championTag: ChampionTagType) => void;
}

const ChampionFilterByTag = ({
  tagFilter,
  onFilterChampionTag,
}: onFilterChampionTagType) => {
  return (
    <button
      className="m-1 cursor-pointer"
      type="button"
      onClick={() => onFilterChampionTag(tagFilter)}
    >
      {tagFilter}
    </button>
  );
};

export default ChampionFilterByTag;
