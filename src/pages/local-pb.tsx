import championRawData from "../mocks/champion.json";
import { ChampionDataListType } from "../types/championDataType";
import { useDispatch } from "react-redux";
import ChampionSelect from "../components/champion-select/champion-select-main";
import {
  useCurrentPhaseName,
  useCurrentPhaseTarget,
} from "../utils/redux/phase/hooks";
import {
  addChampionToBlueBanList,
  addChampionToRedBanList,
} from "../utils/redux/ban-champion/ban-champion";
import {
  addSelectedChampionToBlue,
  addSelectedChampionToRed,
} from "../utils/redux/select-champion/select-champion";
import { progressNextPhase } from "../utils/redux/phase/phase";

const championData: ChampionDataListType = championRawData.data;

const LocalPB = () => {
  const dispatch = useDispatch();
  const currentPhaseName = useCurrentPhaseName();
  const targetChampion = useCurrentPhaseTarget();

  const handleClearChampionData = () => {
    switch (currentPhaseName) {
      case "blueBan":
        dispatch(addChampionToBlueBanList(targetChampion));
        break;
      case "blueSelect":
        dispatch(addSelectedChampionToBlue(targetChampion));
        break;
      case "redBan":
        dispatch(addChampionToRedBanList(targetChampion));
        break;
      case "redSelect":
        dispatch(addSelectedChampionToRed(targetChampion));
    }

    dispatch(progressNextPhase());
  };

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
          confirm
        </button>
      </div>
    </>
  );
};

export default LocalPB;
