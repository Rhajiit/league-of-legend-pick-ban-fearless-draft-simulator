import { useSelector } from "react-redux";
import { BannedChampionsStateType } from "./ban-data";

const useTotalBan = () => {
  const totalBan = useSelector((state: BannedChampionsStateType) => [
    ...state.globalChampionBan,
    ...state.blueChampionBan,
    ...state.redChampionBan,
  ]);

  return totalBan;
};

const useRedBan = () => {
  const redBan = useSelector(
    (state: BannedChampionsStateType) => state.redChampionBan,
  );

  return redBan;
};

const useBlueBan = () => {
  const blueBan = useSelector(
    (state: BannedChampionsStateType) => state.blueChampionBan,
  );

  return blueBan;
};

export { useTotalBan, useBlueBan, useRedBan };
