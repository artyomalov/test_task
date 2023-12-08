// import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '.';

export const selectPeriods = (state: RootState) => state.period.periods;
export const selectPeriodsQuantity = (state:RootState)=> state.period.periods.length
export const selectSelectedPeriod = (state:RootState) => state.period.selectedPeriod