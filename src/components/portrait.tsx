import { ChampionDataType } from "../types/championDataType";

const ChampionPortrait = ({
  championData,
}: {
  championData: ChampionDataType;
}) => {
  return (
    <div className="flex max-w-20 cursor-default flex-col items-center bg-white">
      <img
        className="h-20 w-20 cursor-pointer"
        src={`/assets/champion/${championData.image.full}`}
      />
      <p className="max-w-full truncate">{championData.name}</p>
    </div>
  );
};

export default ChampionPortrait;
