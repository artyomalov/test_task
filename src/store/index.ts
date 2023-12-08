import { configureStore, combineReducers } from '@reduxjs/toolkit';
import periodReducer from './periodSlice';

const rootReducer = combineReducers({
  period: periodReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
