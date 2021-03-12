/* eslint-disable @typescript-eslint/indent */
import { createReducer } from 'typesafe-actions';

import { SelectType } from '../../lib/types';
import { DAILY_ACTION, DAILY_SELECT } from './action';

export type DAILY_STATE = {
  [dailyName: string]: Partial<SelectType>;
};

const initialState: DAILY_STATE = {};

export const daily = createReducer<DAILY_STATE, DAILY_ACTION>(initialState, {
  [DAILY_SELECT]: (state, action) => ({
    ...state,
    [action.payload.category]: {
      cost: action.payload.cost,
      name: action.payload.name,
    },
  }),
});
