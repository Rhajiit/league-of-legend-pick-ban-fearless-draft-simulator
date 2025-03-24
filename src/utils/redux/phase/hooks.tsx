import { useSelector } from "react-redux";
import { PhaseStateType } from "./phase";
import { useMemo } from "react";

const useCurrentPhaseName = () => {
  const phases = useSelector((state: PhaseStateType) => state.phases);
  const currentPhaseIndex = useSelector(
    (state: PhaseStateType) => state.currentPhaseIndex,
  );

  const currentPhaseName = useMemo(
    () => phases[currentPhaseIndex],
    [currentPhaseIndex, phases],
  );

  return currentPhaseName;
};

export { useCurrentPhaseName };
