import { ChampionDataType } from "../types/championDataType";

const ChampionPortrait = ({
  championData,
}: {
  championData: ChampionDataType;
}) => {
  const selectedChampion = championData.name === "Ahri" ? true : false;
  const bannedChampion = championData.name === "Aatrox" ? true : false;

  return (
    <div className="relative flex max-w-20 cursor-default flex-col items-center bg-white">
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
        {championData.name}
      </p>
    </div>
  );
};

export default ChampionPortrait;
