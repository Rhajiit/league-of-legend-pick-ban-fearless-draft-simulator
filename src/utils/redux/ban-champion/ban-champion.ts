import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

interface BannedChampionsStateType {
  blueChampionBan: string[];
  redChampionBan: string[];
  globalChampionBan: string[];
}

const initialState: BannedChampionsStateType = {
  blueChampionBan: [],
  redChampionBan: [],
  globalChampionBan: [],
};

const BannedChampionsState = createSlice({
  name: "SelectedChampions",
  initialState,
  reducers: {
    // 챔피언을 밴리스트에 추가
    addChampionToGlobalBanList: (state, action: PayloadAction<string>) => {
      state.globalChampionBan.push(action.payload);
    },
    addChampionToBlueBanList: (state, action: PayloadAction<string>) => {
      state.blueChampionBan.push(action.payload);
    },
    addChampionToRedBanList: (state, action: PayloadAction<string>) => {
      state.redChampionBan.push(action.payload);
    },

    // 밴리스트를 초기화
    clearChampionFromBlueBanList: (state) => {
      state.blueChampionBan = [];
    },
    clearChampionFromRedBanList: (state) => {
      state.redChampionBan = [];
    },
    clearChampionAll: (state) => {
      state.blueChampionBan = [];
      state.redChampionBan = [];
      state.globalChampionBan = [];
    },
  },
});

const store = configureStore({ reducer: BannedChampionsState.reducer });

export type { BannedChampionsStateType };

export default store;

export const {
  addChampionToGlobalBanList,
  addChampionToBlueBanList,
  addChampionToRedBanList,
  clearChampionFromBlueBanList,
  clearChampionFromRedBanList,
  clearChampionAll,
} = BannedChampionsState.actions;
