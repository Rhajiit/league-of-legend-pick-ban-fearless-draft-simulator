import { useState } from "react";
import ChampionPortrait from "../components/portrait";
import championRawData from "../mocks/champion.json";
import {
  ChampionDataListType,
  ChampionTagType,
} from "../types/championDataType";
import { championTypes } from "../utils/constants/champion-type";
import ChampionFilter from "../components/champion-select/champion-filter";

const championData: ChampionDataListType = championRawData.data;

const LocalPB = () => {
  const [tagFilter, setTagFilter] = useState<ChampionTagType>(null);
  const [timer, setTimer] = useState<number>(90);

  const handleChampionTagFilter = (selectedTagFilter: ChampionTagType) => {
    if (tagFilter === selectedTagFilter) {
      setTagFilter(null);
    } else {
      setTagFilter(selectedTagFilter);
    }
  };

  return (
    <div className="flex">
      <div className="min-w-96 border">Blue Team</div>
      <div className="w-full border">
        <header className="flex flex-col">
          <div className="text-center">
            <p>희망 챔피언을 선택하세요!</p>
            <div>{timer}</div>
          </div>

          <div className="border">
            {championTypes.map((tag) => (
              <ChampionFilter
                key={`champion-filter-button-${tag}`}
                tagFilter={tag}
                onFilterChampionTag={handleChampionTagFilter}
              />
            ))}
            <input type="text" className="m-1 h-full border" />
          </div>
        </header>
        <main className="grid grid-cols-4 overflow-scroll">
          {Object.keys(championData).map((championName) => {
            return tagFilter === null ? (
              <ChampionPortrait
                key={`champion-id-${championData[championName].key}`}
                championData={championData[championName]}
              />
            ) : (
              championData[championName].tags.indexOf(tagFilter) !== -1 && (
                <ChampionPortrait
                  key={`champion-id-${championData[championName].key}`}
                  championData={championData[championName]}
                />
              )
            );
          })}
        </main>
      </div>
      <div className="min-w-96 border">Red Team</div>
    </div>
  );
};

export default LocalPB;
