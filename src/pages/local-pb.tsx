import ChampionSelect from "../components/champion-select/champion-select-main";
import championRawData from "../mocks/champion.json";
import { ChampionDataListType } from "../types/championDataType";

import { useDispatch } from "react-redux";
import { clearChampionAll } from "../utils/redux/ban-champion/ban-champion";
import { useTotalBan } from "../utils/redux/ban-champion/hooks";
import { useEffect } from "react";

const championData: ChampionDataListType = championRawData.data;

const LocalPB = () => {
  const dispatch = useDispatch();
  const totalBanList = useTotalBan();

  const handleClearChampionData = () => {
    dispatch(clearChampionAll());
  };

  useEffect(() => {
    console.log(totalBanList);
  }, [totalBanList]);

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
        <ChampionSelect championData={championData} />

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
