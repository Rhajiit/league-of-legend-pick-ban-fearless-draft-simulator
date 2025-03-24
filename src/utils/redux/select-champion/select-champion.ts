import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SelectedChampionStateType {
  selectedBlueChampion: string[];
  selectedRedChampion: string[];
}

const initialState: SelectedChampionStateType = {
  selectedBlueChampion: [],
  selectedRedChampion: [],
};

const SelectedChampionSlice = createSlice({
  name: "SelectedChampions",
  initialState,
  reducers: {
    // 선택한 챔피언을 해당 팀의 리스트에 추가
    addSelectedChampionToBlue: (state, action: PayloadAction<string>) => {
      state.selectedBlueChampion.push(action.payload);
    },
    addSelectedChampionToRed: (state, action: PayloadAction<string>) => {
      state.selectedRedChampion.push(action.payload);
    },

    // 선택된 챔피언을 초기화
    clearSelectedChampionFromBlue: (state) => {
      state.selectedBlueChampion = [];
    },
    clearSelectedChampionFromRed: (state) => {
      state.selectedRedChampion = [];
    },
    clearSelectedChampionAll: (state) => {
      state.selectedBlueChampion = [];
      state.selectedRedChampion = [];
    },
  },
});

export type { SelectedChampionStateType };

export default SelectedChampionSlice;

export const {
  addSelectedChampionToBlue,
  addSelectedChampionToRed,
  clearSelectedChampionFromBlue,
  clearSelectedChampionFromRed,
  clearSelectedChampionAll,
} = SelectedChampionSlice.actions;
