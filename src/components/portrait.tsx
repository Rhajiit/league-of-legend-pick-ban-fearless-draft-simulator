import { useDispatch } from "react-redux";
import { ChampionDataType } from "../types/championDataType";
import { useTotalBan } from "../utils/redux/ban-champion/hooks";
import { useTotalSelect } from "../utils/redux/select-champion/hooks";
import { useCurrentPhaseTarget } from "../utils/redux/phase/hooks";
import { setCurrentPhaseTarget } from "../utils/redux/phase/phase";

const ChampionPortrait = ({
  championData,
}: {
  championData: ChampionDataType;
}) => {
  const dispatch = useDispatch();

  const banList = useTotalBan();
  const selectedList = useTotalSelect();
  const focusedChampion = useCurrentPhaseTarget();

  const handleSelectChampion = (champion: string) => {
    dispatch(setCurrentPhaseTarget(champion));
  };

  const bannedChampion = banList.includes(championData.name);
  const selectedChampion = selectedList.includes(championData.name);
  const isCurrentFocused = focusedChampion === championData.name;

  return (
    <button
      className="group relative flex w-20 cursor-default flex-col items-center bg-white"
      type="button"
      onClick={() => handleSelectChampion(championData.name)}
    >
      <img
        className={`h-20 w-20 ${selectedChampion || bannedChampion ? "cursor-default grayscale" : "cursor-pointer"}`}
        src={`/assets/champion/${championData.image.full}`}
      />
      {bannedChampion && (
        <div className="absolute h-20 w-20 border-4 border-red-600"></div>
      )}

      <div
        className={`absolute h-20 w-20 animate-pulse border-[6px] border-cyan-700 ${selectedChampion || bannedChampion ? "hidden cursor-default" : "cursor-pointer group-hover:block"} ${isCurrentFocused && !(selectedChampion || bannedChampion) ? "hover: block cursor-pointer" : "hidden"}`}
      />

      <p
        className={`max-w-full truncate ${bannedChampion ? "text-red-600" : ""}`}
      >
        {championData.name}
      </p>
    </button>
  );
};

export default ChampionPortrait;
