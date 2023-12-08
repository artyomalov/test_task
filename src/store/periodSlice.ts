import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PeriodType } from '../types';
import { periodList } from '../const';

type InitialStateType = {
  periods: PeriodType[];
  selectedPeriod: number;
  rotationAngle: number;
};

const initialState: InitialStateType = {
  periods: periodList,
  selectedPeriod: 0,
  rotationAngle: 0,
};

const periodsSlice = createSlice({
  name: 'periodsData',
  initialState: initialState,
  reducers: {
    changeSelectedPeriod: (state, action: PayloadAction<number>) => {
      if (action.payload < 0 || action.payload > 5) {
        state.selectedPeriod = 1;
      } else state.selectedPeriod = action.payload;
    },
  },
});

export const { changeSelectedPeriod } = periodsSlice.actions;

export default periodsSlice.reducer;
