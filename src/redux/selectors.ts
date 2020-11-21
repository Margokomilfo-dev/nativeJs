import { IGlobalState } from './state';

//interface IRootState extends IGlobalState {}

export const selectCurrencyState = (state: IGlobalState) => state.currency