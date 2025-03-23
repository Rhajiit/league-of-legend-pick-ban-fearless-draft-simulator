import { useEffect, useState } from "react";
import ChampionSelect from "../components/champion-select/champion-select-main";
import championRawData from "../mocks/champion.json";
import { ChampionDataListType } from "../types/championDataType";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  BannedChampionsStateType,
  clearChampionAll,
} from "../utils/redux/ban-data/ban-data";

const championData: ChampionDataListType = championRawData.data;

const LocalPB = () => {
  const [blueTeamFearlessBanList, setBlueTeamFearlessBanList] = useState<
    string[]
  >([]);
  const [redTeamFearlessBanList, setRedTeamFearlessBanList] = useState<
    string[]
  >([]);
  const [selectedList, setSelectedList] = useState<string[]>([]);

  const dispatch = useDispatch();

  const championGlobalBanList = useSelector(
    (state: BannedChampionsStateType) => state.globalChampionBan,
  );

  const handleClearChampionData = () => {
    dispatch(clearChampionAll());
  };

  useEffect(() => {
    console.log(championGlobalBanList);
  }, [championGlobalBanList]);

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
          onClick={() => handleClearChampionData()}
        >
          pick
        </button>
      </div>
    </>
  );
};

export default LocalPB;
