/* eslint-disable @typescript-eslint/indent */
import { createReducer } from 'typesafe-actions';
import {
  OFFSET_ACTION,
  OFFSET_PLUS_COUNT,
  OFFSET_MINUS_COUNT,
} from './actions';

export type OFFSET_STATE = {
  [boxoffsetWay: string]: {
    count: number;
    weight: number;
  };
};

const initialState: OFFSET_STATE = {};

export const offset = createReducer<OFFSET_STATE, OFFSET_ACTION>(initialState, {
  [OFFSET_PLUS_COUNT]: (state, action) => ({
    ...state,
    [action.payload.offsetWay]: state.hasOwnProperty(
      `${action.payload.offsetWay}`,
    )
      ? {
          count: state[action.payload.offsetWay].count + 1,
          weight:
            state[action.payload.offsetWay].weight +
            action.payload.detail.weight,
        }
      : {
          count: 1,
          weight: action.payload.detail.weight,
        },
  }),
  [OFFSET_MINUS_COUNT]: (state, action) => ({
    ...state,
    [action.payload.offsetWay]:
      state.hasOwnProperty(`${action.payload.offsetWay}`) &&
      state[action.payload.offsetWay].count > 0
        ? {
            count: state[action.payload.offsetWay].count - 1,
            weight:
              state[action.payload.offsetWay].weight -
              action.payload.detail.weight,
          }
        : {
            count: 0,
            weight: 0,
          },
  }),
});
