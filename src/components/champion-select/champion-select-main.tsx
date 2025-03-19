import { useState } from "react";

import {
  ChampionDataListType,
  ChampionTagType,
} from "../../types/championDataType";
import ChampionFilterByTag from "./champion-filter";
import ChampionPortrait from "../portrait";
import { championTypes } from "../../utils/constants/champion-type";

interface ComponentChampionSelectType {
  selectedChampionList: string[];
  bannedChampionList: string[];
  championData: ChampionDataListType;
}

const ChampionSelect = ({
  selectedChampionList,
  bannedChampionList,
  championData,
}: ComponentChampionSelectType) => {
  const [tagFilter, setTagFilter] = useState<ChampionTagType>(null);
  const [nameFilter, setNameFilter] = useState<string>("");
  const [timer, setTimer] = useState<number>(90);

  const handleChampionTagFilter = (selectedTagFilter: ChampionTagType) => {
    if (tagFilter === selectedTagFilter) {
      setTagFilter(null);
    } else {
      setTagFilter(selectedTagFilter);
    }
  };

  return (
    <div className="w-[40rem] shrink-0 border">
      <header className="flex flex-col">
        <div className="text-center">
          <p>희망 챔피언을 선택하세요!</p>
          <div>{timer}</div>
        </div>

        <div className="border">
          <div className="flex justify-between">
            <div>
              {championTypes.map((tag) => (
                <ChampionFilterByTag
                  key={`champion-filter-button-${tag}`}
                  tagFilter={tag}
                  onFilterChampionTag={handleChampionTagFilter}
                />
              ))}
            </div>

            <input
              type="text"
              onChange={(event) => setNameFilter(event.target.value)}
              className="m-1 h-full border"
            />
          </div>
        </div>
      </header>

      <div className="h-2/3 overflow-y-scroll">
        <main className="m-auto my-4 grid w-fit grid-cols-6 gap-x-6 gap-y-1">
          {Object.keys(championData).map((championName) => {
            return tagFilter === null && nameFilter === "" ? (
              <ChampionPortrait
                key={`champion-id-${championData[championName].key}`}
                championData={championData[championName]}
              />
            ) : (
              championName.toLowerCase().includes(nameFilter.toLowerCase()) &&
                (tagFilter === null ||
                  championData[championName].tags.includes(tagFilter)) && (
                  <ChampionPortrait
                    key={`champion-id-${championData[championName].key}`}
                    championData={championData[championName]}
                  />
                )
            );
          })}
        </main>
      </div>
    </div>
  );
};

export default ChampionSelect;
