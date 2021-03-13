/* eslint-disable @typescript-eslint/indent */
import { createReducer } from 'typesafe-actions';
import {
  OFFSET_ACTION,
  OFFSET_PLUS_COUNT,
  OFFSET_MINUS_COUNT,
} from './actions';

export type OFFSET_STATE = {
  [boxoffsetWay: string]: {
    name: string;
    cost: number | boolean;
    description?: string;
    unitDescription: string;
    unit: number;
    count: number;
  };
};

const initialState: OFFSET_STATE = {};

export const offset = createReducer<OFFSET_STATE, OFFSET_ACTION>(initialState, {
  [OFFSET_PLUS_COUNT]: (state, action) => ({
    ...state,
    [action.payload.name]: state.hasOwnProperty(`${action.payload.name}`)
      ? {
          ...action.payload,
          count: state[action.payload.name].count + 1,
        }
      : {
          ...action.payload,
          count: 1 * action.payload.unit,
        },
  }),
  [OFFSET_MINUS_COUNT]: (state, action) => ({
    ...state,
    [action.payload.name]:
      state.hasOwnProperty(`${action.payload.name}`) &&
      state[action.payload.name].count > 0
        ? {
            ...action.payload,
            count: state[action.payload.name].count - 1,
          }
        : {
            ...action.payload,
            count: 0,
          },
  }),
});
