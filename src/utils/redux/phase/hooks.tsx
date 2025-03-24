import { useSelector } from "react-redux";
import { useMemo } from "react";
import { rootStoreType } from "../sliceCombiner";

const useCurrentPhaseName = () => {
  const phases = useSelector((state: rootStoreType) => state.Phase.phases);
  const currentPhaseIndex = useSelector(
    (state: rootStoreType) => state.Phase.currentPhaseIndex,
  );

  const currentPhaseName = useMemo(
    () => phases[currentPhaseIndex],
    [currentPhaseIndex, phases],
  );

  return currentPhaseName;
};

const useCurrentPhaseTarget = () => {
  const target = useSelector(
    (state: rootStoreType) => state.Phase.currentPhaseTarget,
  );

  return target;
};

export { useCurrentPhaseName, useCurrentPhaseTarget };
