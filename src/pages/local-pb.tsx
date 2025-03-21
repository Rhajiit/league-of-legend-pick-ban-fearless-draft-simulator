import { useState } from "react";
import ChampionSelect from "../components/champion-select/champion-select-main";
import championRawData from "../mocks/champion.json";
import { ChampionDataListType } from "../types/championDataType";

const championData: ChampionDataListType = championRawData.data;

const LocalPB = () => {
  const [globalBanList, setGlobalBanList] = useState<string[]>([]);
  const [blueTeamFearlessBanList, setBlueTeamFearlessBanList] = useState<
    string[]
  >([]);
  const [redTeamFearlessBanList, setRedTeamFearlessBanList] = useState<
    string[]
  >([]);
  const [currentBlueBanList, setCurrentBlueBanList] = useState<string[]>([]);
  const [currentRedBanList, setCurrentRedBanList] = usestate<string[]>([]);
  const [selectedList, setSelectedList] = useState<string[]>([]);

  const handleChampionPickConfirm = () => {};

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <div className="flex w-full flex-col justify-between border">
          <div>
            <p>Blue Team</p>
            <div className="mt-8">Blue team selected Champions</div>
          </div>
          <div className="h-52">Previous Select</div>
        </div>
        <ChampionSelect
          selectedChampionList={selectedList}
          bannedChampionList={currentBlueBanList}
          championData={championData}
        />

        <div className="flex w-full flex-col justify-between border">
          <div>
            <p>Red Team</p>
            <div className="mt-8">Red team selected Champions</div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 h-52 w-full border">
        <button
          type="button"
          className="mx-auto mt-2 block cursor-pointer border px-10 py-3"
          onClick={() => handleChampionPickConfirm()}
        >
          pick
        </button>
      </div>
    </>
  );
};

export default LocalPB;
