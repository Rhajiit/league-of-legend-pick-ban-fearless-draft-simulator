import { ChampionDataType } from "../types/championDataType";

const ChampionPortrait = ({
  championData,
}: {
  championData: ChampionDataType;
}) => {
  const selectedChampion = championData.name === "Ahri" ? true : false;
  const bannedChampion = championData.name === "Aatrox" ? true : false;
  const focusedChampion = championData.name === "Akali" ? true : false;

  return (
    <div className="relative flex w-20 cursor-default flex-col items-center bg-white">
      <img
        className={`h-20 w-20 ${selectedChampion || bannedChampion ? "cursor-default grayscale" : "cursor-pointer"}`}
        src={`/assets/champion/${championData.image.full}`}
      />
      {bannedChampion && (
        <div className="absolute h-20 w-20 border-4 border-red-600"></div>
      )}
      <p
        className={`max-w-full truncate ${bannedChampion ? "text-red-600" : ""}`}
      >
        {focusedChampion && (
          <div className="absolute top-1 left-1 h-18 w-18 rounded-full border-8 border-cyan-800"></div>
        )}
        {championData.name}
      </p>
    </div>
  );
};

export default ChampionPortrait;
