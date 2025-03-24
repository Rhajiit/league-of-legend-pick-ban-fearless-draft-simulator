import { useSelector } from "react-redux";
import { useMemo } from "react";
import { rootStoreType } from "../sliceCombiner";

const useTotalBan = () => {
  const globalChampionBan = useSelector(
    (state: rootStoreType) => state.BannedChampions.globalChampionBan,
  );
  const blueChampionBan = useSelector(
    (state: rootStoreType) => state.BannedChampions.blueChampionBan,
  );
  const redChampionBan = useSelector(
    (state: rootStoreType) => state.BannedChampions.redChampionBan,
  );

  const totalBan = useMemo(() => {
    return [...globalChampionBan, ...blueChampionBan, ...redChampionBan];
  }, [globalChampionBan, blueChampionBan, redChampionBan]);

  return totalBan;
};

const useRedBan = () => {
  const redBan = useSelector(
    (state: rootStoreType) => state.BannedChampions.redChampionBan,
  );

  return redBan;
};

const useBlueBan = () => {
  const blueBan = useSelector(
    (state: rootStoreType) => state.BannedChampions.blueChampionBan,
  );

  return blueBan;
};

export { useTotalBan, useBlueBan, useRedBan };
