import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import defaultPickAndBanPhase, {
  PhaseType,
} from "../../constants/default-pick-and-ban-phase";

type ChangePhaseOrder = [number, number];
interface PhaseStateType {
  phases: PhaseType[];
  currentPhaseIndex: number;
  currentPhaseTarget: string;
}

const initialState: PhaseStateType = {
  phases: defaultPickAndBanPhase,
  currentPhaseIndex: 0,
  currentPhaseTarget: "",
};

const PhaseSlice = createSlice({
  name: "Phase",
  initialState,
  reducers: {
    // 다음 페이즈로 이동
    progressNextPhase: (state) => {
      state.currentPhaseIndex++;
    },

    // 페이즈 순서의 변경 기능을 추가할 경우 사용할 액션
    changePhaseOrder: (state, action: PayloadAction<ChangePhaseOrder>) => {
      const firstIndex = action.payload[0];
      const secondIndex = action.payload[1];

      const firstPhase = state.phases[firstIndex];
      const secondPhase = state.phases[secondIndex];

      state.phases[firstIndex] = secondPhase;
      state.phases[secondIndex] = firstPhase;
    },

    // 현재 페이즈에서 다룰 챔피언
    setCurrentPhaseTarget: (state, action: PayloadAction<string>) => {
      state.currentPhaseTarget = action.payload;
    },

    resetTarget: (state) => {
      state.currentPhaseTarget = "";
    },
    // 현재 진행된 단계를 초기화
    resetPhaseIndex: (state) => {
      state.currentPhaseIndex = 0;
    },

    resetPhaseOrder: (state) => {
      state.phases = defaultPickAndBanPhase;
    },
  },
});

export type { PhaseStateType };

export default PhaseSlice;

export const {
  progressNextPhase,
  changePhaseOrder,
  setCurrentPhaseTarget,
  resetPhaseIndex,
  resetPhaseOrder,
  resetTarget,
} = PhaseSlice.actions;
