import { useSelector } from "react-redux";
import { useMemo } from "react";
import { rootStoreType } from "../sliceCombiner";

const useTotalSelect = () => {
  const selectedBlueChampion = useSelector(
    (state: rootStoreType) => state.SelectedChampions.selectedBlueChampion,
  );
  const selectedRedChampion = useSelector(
    (state: rootStoreType) => state.SelectedChampions.selectedRedChampion,
  );

  const totalSelect = useMemo(() => {
    return [...selectedRedChampion, ...selectedBlueChampion];
  }, [selectedBlueChampion, selectedRedChampion]);

  return totalSelect;
};

const useBlueSelect = () => {
  const selectedBlueChampion = useSelector(
    (state: rootStoreType) => state.SelectedChampions.selectedRedChampion,
  );

  return selectedBlueChampion;
};

const useRedSelect = () => {
  const selectedRedChampion = useSelector(
    (state: rootStoreType) => state.SelectedChampions.selectedRedChampion,
  );

  return selectedRedChampion;
};

export { useTotalSelect, useBlueSelect, useRedSelect };
