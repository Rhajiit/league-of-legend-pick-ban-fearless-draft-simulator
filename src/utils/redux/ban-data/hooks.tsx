import { useSelector } from "react-redux";
import { BannedChampionsStateType } from "./ban-data";
import { useMemo } from "react";

const useTotalBan = () => {
  const globalChampionBan = useSelector(
    (state: BannedChampionsStateType) => state.globalChampionBan,
  );
  const blueChampionBan = useSelector(
    (state: BannedChampionsStateType) => state.blueChampionBan,
  );
  const redChampionBan = useSelector(
    (state: BannedChampionsStateType) => state.redChampionBan,
  );

  const totalBan = useMemo(() => {
    return [...globalChampionBan, ...blueChampionBan, ...redChampionBan];
  }, [globalChampionBan, blueChampionBan, redChampionBan]);

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
