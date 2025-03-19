import { useState } from "react";
import ChampionPortrait from "../components/portrait";
import championRawData from "../mocks/champion.json";
import {
  ChampionDataListType,
  ChampionTagType,
} from "../types/championDataType";
import { championTypes } from "../utils/constants/champion-type";
import ChampionFilterByTag from "../components/champion-select/champion-filter";

const championData: ChampionDataListType = championRawData.data;

const LocalPB = () => {
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
    <div className="flex h-screen overflow-hidden">
      <div className="min-w-96 border">Blue Team</div>
      <div className="w-full border">
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
        <div className="h-full overflow-y-scroll">
          <main className="m-auto my-4 grid w-fit grid-cols-6 gap-x-12 gap-y-1">
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
      <div className="min-w-96 border">Red Team</div>
    </div>
  );
};

export default LocalPB;
