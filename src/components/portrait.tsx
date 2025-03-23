import { useDispatch } from "react-redux";
import { ChampionDataType } from "../types/championDataType";
import {
  addChampionToGlobalBanList,
  BannedChampionsStateType,
} from "../utils/redux/ban-data/ban-data";
import { useSelector } from "react-redux";

const ChampionPortrait = ({
  championData,
}: {
  championData: ChampionDataType;
}) => {
  const dispatch = useDispatch();

  const handleAddChampion = (champion: string) => {
    dispatch(addChampionToGlobalBanList(champion));
  };

  const banList = useSelector((state: BannedChampionsStateType) => [
    ...state.globalChampionBan,
    ...state.blueChampionBan,
    ...state.redChampionBan,
  ]);

  const bannedChampion = banList.includes(championData.name);
  const selectedChampion = championData.name === "Ahri" ? true : false;
  const focusedChampion = championData.name === "Akali" ? true : false;

  return (
    <button
      className="relative flex w-20 cursor-default flex-col items-center bg-white"
      type="button"
      onClick={() => handleAddChampion(championData.name)}
    >
      <img
        className={`h-20 w-20 ${selectedChampion || bannedChampion ? "cursor-default grayscale" : "cursor-pointer"}`}
        src={`/assets/champion/${championData.image.full}`}
      />
      {bannedChampion && (
        <div className="absolute h-20 w-20 border-4 border-red-600"></div>
      )}
      {focusedChampion && (
        <div className="absolute top-1 left-1 h-18 w-18 rounded-full border-8 border-cyan-800"></div>
      )}
      <p
        className={`max-w-full truncate ${bannedChampion ? "text-red-600" : ""}`}
      >
        {championData.name}
      </p>
    </button>
  );
};

export default ChampionPortrait;
