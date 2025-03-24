import { useSelector } from "react-redux";
import { SelectedChampionStateType } from "./select-champion";
import { useMemo } from "react";

const useTotalSelect = () => {
  const selectedBlueChampion = useSelector(
    (state: SelectedChampionStateType) => state.selectedBlueChampion,
  );
  const selectedRedChampion = useSelector(
    (state: SelectedChampionStateType) => state.selectedRedChampion,
  );

  const totalSelect = useMemo(
    () => [...selectedRedChampion, selectedBlueChampion],
    [selectedBlueChampion, selectedRedChampion],
  );

  return totalSelect;
};

const useBlueSelect = () => {
  const selectedBlueChampion = useSelector(
    (state: SelectedChampionStateType) => state.selectedRedChampion,
  );

  return selectedBlueChampion;
};

const useRedSelect = () => {
  const selectedRedChampion = useSelector(
    (state: SelectedChampionStateType) => state.selectedRedChampion,
  );

  return selectedRedChampion;
};

export { useTotalSelect, useBlueSelect, useRedSelect };
