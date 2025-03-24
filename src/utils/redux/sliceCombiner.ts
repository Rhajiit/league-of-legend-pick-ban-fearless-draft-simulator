import { combineSlices, configureStore } from "@reduxjs/toolkit";
import BannedChampionsSlice, {
  BannedChampionsStateType,
} from "./ban-champion/ban-champion";
import PhaseSlice, { PhaseStateType } from "./phase/phase";
import SelectedChampionSlice, {
  SelectedChampionStateType,
} from "./select-champion/select-champion";

interface rootStoreType {
  BannedChampions: BannedChampionsStateType;
  Phase: PhaseStateType;
  SelectedChampions: SelectedChampionStateType;
}

// Reducer 결합
const rootReducer = combineSlices(
  BannedChampionsSlice,
  PhaseSlice,
  SelectedChampionSlice,
);

// rootStore 생성
const rootStore = configureStore({
  reducer: rootReducer,
});
export type { rootStoreType };

export default rootStore;
